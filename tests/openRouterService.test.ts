import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  OpenRouterService,
  OPENROUTER_MODELS,
  DEFAULT_MODEL
} from '../src/services/ai/openRouterService';
import {
  PROMPT_STARTERS,
  getOfflineFallbackAnswer
} from '../src/services/ai/aiTutorKnowledge';

describe('OpenRouter AI Service & Tutor', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe('Key & Model Management', () => {
    it('defaults to no API key and DEFAULT_MODEL', () => {
      expect(OpenRouterService.getApiKey()).toBe('');
      expect(OpenRouterService.hasApiKey()).toBe(false);
      expect(OpenRouterService.getModel()).toBe(DEFAULT_MODEL);
      expect(OpenRouterService.getTemperature()).toBe(0.7);
    });

    it('saves and retrieves API key from localStorage', () => {
      OpenRouterService.setApiKey('sk-or-v1-testkey12345');
      expect(OpenRouterService.getApiKey()).toBe('sk-or-v1-testkey12345');
      expect(OpenRouterService.hasApiKey()).toBe(true);

      OpenRouterService.clearApiKey();
      expect(OpenRouterService.getApiKey()).toBe('');
      expect(OpenRouterService.hasApiKey()).toBe(false);
    });

    it('saves and retrieves custom models and temperatures', () => {
      OpenRouterService.setModel('meta-llama/llama-3.3-70b-instruct:free');
      expect(OpenRouterService.getModel()).toBe('meta-llama/llama-3.3-70b-instruct:free');

      OpenRouterService.setTemperature(0.4);
      expect(OpenRouterService.getTemperature()).toBe(0.4);
    });

    it('contains curated models with free tiers', () => {
      const freeModels = OPENROUTER_MODELS.filter(m => m.badge === 'Free');
      expect(freeModels.length).toBeGreaterThanOrEqual(2);
      expect(OPENROUTER_MODELS.some(m => m.id.includes('gemini'))).toBe(true);
    });
  });

  describe('API Key Validation', () => {
    it('fails when no key is provided', async () => {
      const res = await OpenRouterService.validateApiKey('');
      expect(res.valid).toBe(false);
      expect(res.message).toContain('No API key');
    });

    it('succeeds when OpenRouter responds with 200', async () => {
      globalThis.fetch = vi.fn().mockResolvedValue({
        status: 200,
        json: async () => ({
          data: {
            label: 'Nyan Learn Key',
            usage: 0.02,
            limit: null,
            is_free_tier: true
          }
        })
      } as unknown as Response);

      const res = await OpenRouterService.validateApiKey('sk-or-v1-valid');
      expect(res.valid).toBe(true);
      expect(res.label).toBe('Nyan Learn Key');
      expect(res.isFreeTier).toBe(true);
    });

    it('handles 401 invalid key error gracefully', async () => {
      globalThis.fetch = vi.fn().mockResolvedValue({
        status: 401,
        statusText: 'Unauthorized'
      } as unknown as Response);

      const res = await OpenRouterService.validateApiKey('sk-or-v1-invalid');
      expect(res.valid).toBe(false);
      expect(res.message).toContain('Invalid API Key');
    });
  });

  describe('Streaming Chat Functionality', () => {
    it('throws when streaming is called without API key', async () => {
      OpenRouterService.clearApiKey();
      await expect(
        OpenRouterService.streamChat({
          messages: [{ role: 'user', content: 'What is a loop?' }],
          onChunk: vi.fn(),
          language: 'en'
        })
      ).rejects.toThrow(/OpenRouter API Key not found/);
    });

    it('parses SSE chunks and triggers onChunk callback', async () => {
      OpenRouterService.setApiKey('sk-or-v1-dummy');

      const ssePayload = [
        'data: {"choices":[{"delta":{"content":"A loop "}}]}\n\n',
        'data: {"choices":[{"delta":{"content":"repeats actions!"}}]}\n\n',
        'data: [DONE]\n\n'
      ].join('');

      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(ssePayload));
          controller.close();
        }
      });

      globalThis.fetch = vi.fn().mockResolvedValue({
        ok: true,
        body: stream
      } as unknown as Response);

      const chunks: string[] = [];
      const result = await OpenRouterService.streamChat({
        messages: [{ role: 'user', content: 'Explain loops' }],
        onChunk: (c) => chunks.push(c),
        language: 'en'
      });

      expect(chunks).toEqual(['A loop ', 'repeats actions!']);
      expect(result).toBe('A loop repeats actions!');
    });
  });

  describe('Smart Offline Fallback & Prompt Starters', () => {
    it('returns algorithm explanation in English', () => {
      const answer = getOfflineFallbackAnswer('what is an algorithm', 'en');
      expect(answer).toContain('Algorithm');
      expect(answer).toContain('Cookie Baking Analogy');
    });

    it('returns algorithm explanation in Burmese', () => {
      const answer = getOfflineFallbackAnswer('algorithm ဆိုတာ ဘာလဲ', 'my');
      expect(answer).toContain('Algorithm (အယ်လဂိုရီသမ်)');
      expect(answer).toContain('မုန့်ဖုတ်တဲ့ ဥပမာ');
    });

    it('returns loop explanation for loop query', () => {
      const answer = getOfflineFallbackAnswer('tell me about loops in game', 'en');
      expect(answer).toContain('Loop');
      expect(answer).toContain('Game Example');
    });

    it('returns online safety rules', () => {
      const answer = getOfflineFallbackAnswer('how to make a safe password', 'en');
      expect(answer).toContain('Golden Rules for Online Safety');
    });

    it('provides prompt starters with both English and Burmese translations', () => {
      expect(PROMPT_STARTERS.length).toBeGreaterThanOrEqual(6);
      PROMPT_STARTERS.forEach(starter => {
        expect(starter.labelEn.length).toBeGreaterThan(0);
        expect(starter.labelMy.length).toBeGreaterThan(0);
        expect(starter.promptEn.length).toBeGreaterThan(0);
        expect(starter.promptMy.length).toBeGreaterThan(0);
      });
    });
  });
});
