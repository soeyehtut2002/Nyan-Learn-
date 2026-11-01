/**
 * OpenRouter API Service for Nyan Learn (CodeQuest)
 * Handles communications with https://openrouter.ai/api/v1
 * Supports streaming (SSE), model selection, key verification, and child-safe tutoring prompt.
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
  badge: 'Free' | 'Fast' | 'Smart' | 'Code' | 'Popular';
  description: string;
}

export const OPENROUTER_MODELS: ModelOption[] = [
  {
    id: 'google/gemini-2.0-flash-lite-preview-02-05:free',
    name: 'Gemini 2.0 Flash Lite',
    provider: 'Google',
    badge: 'Free',
    description: 'Ultra-fast, high quality & 100% free on OpenRouter'
  },
  {
    id: 'meta-llama/llama-3.3-70b-instruct:free',
    name: 'Llama 3.3 70B Instruct',
    provider: 'Meta',
    badge: 'Free',
    description: 'Powerful 70B parameter open model for in-depth reasoning'
  },
  {
    id: 'deepseek/deepseek-r1:free',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    badge: 'Smart',
    description: 'Advanced reasoning and problem-solving specialist'
  },
  {
    id: 'google/gemini-2.0-flash-exp:free',
    name: 'Gemini 2.0 Flash Exp',
    provider: 'Google',
    badge: 'Free',
    description: 'Next-gen experimental multimodal model'
  },
  {
    id: 'qwen/qwen-2.5-coder-32b-instruct:free',
    name: 'Qwen 2.5 Coder 32B',
    provider: 'Alibaba / Qwen',
    badge: 'Code',
    description: 'Fine-tuned programming and code-explanation expert'
  },
  {
    id: 'mistralai/mistral-7b-instruct:free',
    name: 'Mistral 7B Instruct',
    provider: 'Mistral AI',
    badge: 'Fast',
    description: 'Lightweight, rapid and concise responses'
  },
  {
    id: 'openai/gpt-4o-mini',
    name: 'GPT-4o Mini',
    provider: 'OpenAI',
    badge: 'Popular',
    description: 'Affordable, balanced intelligence from OpenAI'
  }
];

export const FALLBACK_DEFAULT_MODEL = 'google/gemini-2.0-flash-lite-preview-02-05:free';

export const getDefaultModelFromEnv = (): string => {
  try {
    const envModel = (import.meta as unknown as { env?: { VITE_OPENROUTER_MODEL?: string; VITE_OPENROUTER_DEFAULT_MODEL?: string } }).env?.VITE_OPENROUTER_MODEL
      || (import.meta as unknown as { env?: { VITE_OPENROUTER_MODEL?: string; VITE_OPENROUTER_DEFAULT_MODEL?: string } }).env?.VITE_OPENROUTER_DEFAULT_MODEL;
    if (envModel && envModel.trim()) {
      return envModel.trim();
    }
  } catch {
    // ignore
  }
  return FALLBACK_DEFAULT_MODEL;
};

export const DEFAULT_MODEL = getDefaultModelFromEnv();

const STORAGE_KEY_API_KEY = 'nyan_learn_openrouter_api_key';
const STORAGE_KEY_MODEL = 'nyan_learn_openrouter_model';
const STORAGE_KEY_TEMP = 'nyan_learn_openrouter_temperature';

export const NYAN_BOT_SYSTEM_PROMPT = `You are Nyan Bot (ဉာဏ်ဘော့), an enthusiastic, warm, encouraging, and kid-friendly AI learning companion and coding tutor inside Nyan Learn (ဉာဏ်လမ်း).

Target Audience:
- Children, young students (ages 7-16), and beginners exploring coding, algorithms, digital safety, AI literacy, and computer science.

Core Persona & Rules:
1. Tone & Character:
   - Cheerful, patient, respectful, and motivating!
   - Use playful, kid-safe emojis (🐱, 🚀, 💡, 💻, 🧠, 🌟, 🛡️, 🧩) naturally.
   - Celebrate curiosity and encourage the user whenever they ask a question.
   - Never be harsh, condescending, or overly academic.

2. Language & Bilingual Support:
   - You are bilingual in Myanmar (Burmese) and English.
   - If the user messages in Burmese (မြန်မာစာ), respond warmly in natural, fluent Burmese.
   - If the user messages in English, respond in clear, easy-to-understand English.
   - When introducing coding concepts (like Loop, Variable, Function, Algorithm, Bug, Condition), explain the English term and provide the Burmese meaning or an everyday analogy.

3. Kid-Safe & Educational Pedagogy:
   - Use relatable real-world analogies: recipes, Lego bricks, school games, tying shoelaces, maze navigation.
   - Keep answers structured: short friendly opening, clear bullet points or numbered steps, and a fun concluding encouragement.
   - Code examples should be simple, clean, and well-commented (e.g. Blockly logic, Python, JavaScript, or Scratch concepts).
   - Strict Child Safety: Strictly refuse any harmful, adult, violent, or unsafe queries. Politely redirect back to coding, STEM, puzzles, and online safety.

4. Online Safety Advocacy:
   - Remind students to never share personal info (real full name, address, passwords, school name, phone number) on the internet.`;

export interface KeyValidationResult {
  valid: boolean;
  message: string;
  label?: string;
  usage?: number;
  limit?: number | null;
  isFreeTier?: boolean;
}

export class OpenRouterService {
  /**
   * Retrieve active API Key from LocalStorage or Vite Env
   */
  static getApiKey(): string {
    if (typeof window === 'undefined') return '';
    const stored = localStorage.getItem(STORAGE_KEY_API_KEY);
    if (stored && stored.trim()) {
      return stored.trim();
    }
    // Check Vite environment variable
    try {
      const envKey = (import.meta as unknown as { env?: { VITE_OPENROUTER_API_KEY?: string } }).env?.VITE_OPENROUTER_API_KEY;
      if (envKey && envKey.trim()) {
        return envKey.trim();
      }
    } catch {
      // ignore
    }
    return '';
  }

  /**
   * Check if an API key is currently configured
   */
  static hasApiKey(): boolean {
    return Boolean(this.getApiKey());
  }

  /**
   * Save API key to LocalStorage
   */
  static setApiKey(key: string): void {
    if (typeof window === 'undefined') return;
    const trimmed = key.trim();
    if (trimmed) {
      localStorage.setItem(STORAGE_KEY_API_KEY, trimmed);
    } else {
      localStorage.removeItem(STORAGE_KEY_API_KEY);
    }
  }

  /**
   * Clear API key
   */
  static clearApiKey(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY_API_KEY);
  }

  /**
   * Get selected model ID
   */
  static getModel(): string {
    if (typeof window === 'undefined') return getDefaultModelFromEnv();
    const stored = localStorage.getItem(STORAGE_KEY_MODEL);
    if (stored && stored.trim()) {
      return stored.trim();
    }
    return getDefaultModelFromEnv();
  }

  /**
   * Save selected model ID
   */
  static setModel(modelId: string): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY_MODEL, modelId);
  }

  /**
   * Get temperature setting (0.0 to 1.0)
   */
  static getTemperature(): number {
    if (typeof window === 'undefined') return 0.7;
    const val = localStorage.getItem(STORAGE_KEY_TEMP);
    if (val) {
      const parsed = parseFloat(val);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) return parsed;
    }
    return 0.7;
  }

  /**
   * Set temperature
   */
  static setTemperature(temp: number): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY_TEMP, temp.toString());
  }

  /**
   * Verify an API key with OpenRouter auth endpoint
   */
  static async validateApiKey(apiKeyToTest?: string): Promise<KeyValidationResult> {
    const key = apiKeyToTest !== undefined ? apiKeyToTest.trim() : this.getApiKey();
    if (!key) {
      return {
        valid: false,
        message: 'No API key provided. Please enter your OpenRouter key.'
      };
    }

    try {
      const response = await fetch('https://openrouter.ai/api/v1/auth/key', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${key}`
        }
      });

      if (response.status === 200) {
        const json = await response.json();
        const data = json.data || {};
        return {
          valid: true,
          message: 'API Key is valid and active!',
          label: data.label || 'OpenRouter Key',
          usage: data.usage,
          limit: data.limit,
          isFreeTier: data.is_free_tier
        };
      } else if (response.status === 401) {
        return {
          valid: false,
          message: 'Invalid API Key. Please verify your OpenRouter key at openrouter.ai/keys'
        };
      } else {
        return {
          valid: false,
          message: `Validation failed with status ${response.status}: ${response.statusText}`
        };
      }
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : String(err);
      return {
        valid: false,
        message: `Network connection error: ${errMessage}`
      };
    }
  }

  /**
   * Send a chat message with Server-Sent Events (SSE) streaming support
   */
  static async streamChat({
    messages,
    onChunk,
    signal,
    customModel,
    language = 'en'
  }: {
    messages: { role: 'user' | 'assistant' | 'system'; content: string }[];
    onChunk: (chunk: string) => void;
    signal?: AbortSignal;
    customModel?: string;
    language?: 'en' | 'my';
  }): Promise<string> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error(
        language === 'my'
          ? 'OpenRouter API Key မထည့်ရသေးပါ။ ညာဘက်အပေါ်ရှိ ⚙️ Settings မှတစ်ဆင့် OpenRouter Key ကို အလွယ်တကူ ထည့်သွင်းနိုင်ပါတယ်!'
          : 'OpenRouter API Key not found. Please click ⚙️ Settings to configure your key (free keys available at openrouter.ai).'
      );
    }

    const model = customModel || this.getModel();
    const temperature = this.getTemperature();

    // Prepare system prompt tailored to current user language
    const langNote = language === 'my'
      ? '\n[Current Language Preference: The user interface is set to Myanmar (Burmese). Greet and explain primarily in Burmese unless the user asks in English.]'
      : '\n[Current Language Preference: English. Explain primarily in English unless the user asks in Burmese.]';

    const systemMessage = {
      role: 'system' as const,
      content: NYAN_BOT_SYSTEM_PROMPT + langNote
    };

    // Filter out messages to only user/assistant
    const formattedMessages = [
      systemMessage,
      ...messages.map(m => ({ role: m.role, content: m.content }))
    ];

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'https://nyanlearn.edu',
        'X-Title': 'Nyan Learn AI Tutor'
      },
      body: JSON.stringify({
        model,
        messages: formattedMessages,
        temperature,
        stream: true
      }),
      signal
    });

    if (!response.ok) {
      let errorMessage = `OpenRouter API Error: ${response.status} ${response.statusText}`;
      try {
        const errorJson = await response.json();
        if (errorJson.error?.message) {
          errorMessage = errorJson.error.message;
        }
      } catch {
        // failed to parse json error
      }

      // Add friendly suggestions for common issues
      if (response.status === 401) {
        throw new Error(
          language === 'my'
            ? 'OpenRouter API Key မမှန်ကန်ပါ။ ⚙️ Settings တွင် API Key ကို ပြန်လည်စစ်ဆေးပါ။'
            : 'Invalid OpenRouter API Key. Please verify your key in ⚙️ Settings.'
        );
      } else if (response.status === 402) {
        throw new Error(
          language === 'my'
            ? 'OpenRouter Credits ကုန်ဆုံးနေပါသည်။ အခမဲ့ Model (ဥပမာ Gemini 2.0 Flash Lite:free သို့မဟုတ် Llama 3.3 70B:free) ကို ရွေးချယ်အသုံးပြုနိုင်ပါတယ်။'
            : 'Out of credits on this model. Please switch to a :free model like Gemini 2.0 Flash Lite:free in Settings!'
        );
      } else if (response.status === 429) {
        throw new Error(
          language === 'my'
            ? 'OpenRouter Rate Limit ပြည့်သွားပါပြီ။ ခဏစောင့်ပြီး ပြန်လည်မေးမြန်းပါ သို့မဟုတ် အခြား Free Model တစ်ခုသို့ ပြောင်းလဲပါ။'
            : 'Rate limit reached on OpenRouter. Please wait a moment or try another :free model in Settings.'
        );
      }
      throw new Error(errorMessage);
    }

    if (!response.body) {
      throw new Error('Response body is empty from OpenRouter stream');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let fullResponse = '';
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith(':')) continue;
          if (trimmed === 'data: [DONE]') continue;

          if (trimmed.startsWith('data: ')) {
            const dataStr = trimmed.slice(6);
            try {
              const parsed = JSON.parse(dataStr);
              const textChunk = parsed.choices?.[0]?.delta?.content || '';
              if (textChunk) {
                fullResponse += textChunk;
                onChunk(textChunk);
              }
            } catch {
              // Ignore partial JSON chunks
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }

    return fullResponse;
  }
}
