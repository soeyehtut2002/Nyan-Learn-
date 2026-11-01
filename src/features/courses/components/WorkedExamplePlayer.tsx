import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bot,
  ListOrdered,
  Eye,
  Code,
  Shield,
  Zap,
} from './Icons';
import { ByteMascot, MascotMood } from './ByteMascot';

export interface WorkedStep {
  stepNumber: number;
  instruction: string;
  outcome: string;
}

export interface WorkedExampleData {
  title: string;
  scenario: string;
  steps: WorkedStep[];
}

interface WorkedExamplePlayerProps {
  workedExample: WorkedExampleData;
  language: 'en' | 'my';
}

export const WorkedExamplePlayer: React.FC<WorkedExamplePlayerProps> = ({
  workedExample,
  language,
}) => {
  const steps = workedExample.steps || [];
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'interactive' | 'overview'>('interactive');
  const [executedSteps, setExecutedSteps] = useState<number[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayTimerRef = useRef<any>(null);

  const currentStep = steps[activeStepIdx] || steps[0];
  const isFirstStep = activeStepIdx === 0;
  const isLastStep = activeStepIdx === steps.length - 1;
  const hasRunCurrent = executedSteps.includes(activeStepIdx);
  const allExecuted = steps.length > 0 && executedSteps.length === steps.length;

  // Reset when workedExample changes
  useEffect(() => {
    setActiveStepIdx(0);
    setExecutedSteps([]);
    setIsExecuting(false);
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
  }, [workedExample]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, []);

  // Determine code category & badge
  const getCodeCategory = (instruction = '') => {
    const lower = instruction.toLowerCase();
    if (
      lower.includes('<') ||
      lower.includes('html') ||
      lower.includes('css') ||
      lower.includes('color:') ||
      lower.includes('background') ||
      lower.includes('padding') ||
      lower.includes('border') ||
      lower.includes('<h1>') ||
      lower.includes('<h2>') ||
      lower.includes('<p>') ||
      lower.includes('<img>') ||
      lower.includes('<a>')
    ) {
      return {
        label: language === 'my' ? 'ဝဘ်ကုဒ် (HTML / CSS)' : 'Web & CSS Code',
        icon: <Code className="w-3.5 h-3.5" />,
        prompt: '$ web',
      };
    }
    if (lower.includes('robot.') || lower.includes('robot') || lower.includes('byte')) {
      return {
        label: language === 'my' ? 'စက်ရုပ် အမိန့် (Robot Code)' : 'Robot Instruction',
        icon: <Bot className="w-3.5 h-3.5" />,
        prompt: '$ robot',
      };
    }
    if (
      lower.includes('password') ||
      lower.includes('phish') ||
      lower.includes('shield') ||
      lower.includes('encrypt') ||
      lower.includes('safe')
    ) {
      return {
        label: language === 'my' ? 'လုံခြုံရေးစည်းမျဉ်း (Security Rule)' : 'Security Rule',
        icon: <Shield className="w-3.5 h-3.5" />,
        prompt: '$ sec',
      };
    }
    return {
      label: language === 'my' ? 'ပရိုဂရမ် အမိန့် (Code Logic)' : 'Program Logic',
      icon: <Zap className="w-3.5 h-3.5" />,
      prompt: '$ code',
    };
  };

  // Derive Byte Mascot mood
  const getStepMood = (): MascotMood => {
    if (isExecuting) return 'coder';
    if (!hasRunCurrent) return 'thinking';
    const lower = (currentStep?.instruction || '').toLowerCase();
    if (lower.includes('smile') || lower.includes('happy') || lower.includes('wave')) return 'happy';
    if (lower.includes('check') || lower.includes('find') || lower.includes('detect') || lower.includes('test')) return 'detective';
    if (lower.includes('code') || lower.includes('loop') || lower.includes('draw')) return 'coder';
    return 'success';
  };

  // Run the current step with animation
  const handleRunStep = () => {
    if (isExecuting) return;
    setIsExecuting(true);

    setTimeout(() => {
      setIsExecuting(false);
      setExecutedSteps((prev) => {
        if (!prev.includes(activeStepIdx)) {
          return [...prev, activeStepIdx];
        }
        return prev;
      });
    }, 600);
  };

  // Next step
  const handleNextStep = () => {
    if (activeStepIdx < steps.length - 1) {
      setActiveStepIdx((prev) => prev + 1);
    }
  };

  // Previous step
  const handlePrevStep = () => {
    if (activeStepIdx > 0) {
      setActiveStepIdx((prev) => prev - 1);
    }
  };

  // Jump to specific step
  const handleJumpStep = (idx: number) => {
    setActiveStepIdx(idx);
  };

  // Reset all steps
  const handleReset = () => {
    setActiveStepIdx(0);
    setExecutedSteps([]);
    setIsExecuting(false);
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
  };

  // Auto-play walkthrough effect
  const handleToggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    } else {
      setIsAutoPlaying(true);
      if (allExecuted) {
        setExecutedSteps([]);
        setActiveStepIdx(0);
      }
    }
  };

  // Auto-play stepper driver
  useEffect(() => {
    if (!isAutoPlaying) return;

    if (!executedSteps.includes(activeStepIdx)) {
      // Execute current step
      setIsExecuting(true);
      autoPlayTimerRef.current = setTimeout(() => {
        setIsExecuting(false);
        setExecutedSteps((prev) => [...prev, activeStepIdx]);
      }, 700);
    } else {
      // Already executed, advance to next step after a pause
      if (activeStepIdx < steps.length - 1) {
        autoPlayTimerRef.current = setTimeout(() => {
          setActiveStepIdx((prev) => prev + 1);
        }, 1500);
      } else {
        // Reached end of walkthrough
        autoPlayTimerRef.current = setTimeout(() => {
          setIsAutoPlaying(false);
        }, 1200);
      }
    }

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, activeStepIdx, executedSteps, steps.length]);

  if (!steps.length) return null;

  const category = getCodeCategory(currentStep?.instruction);

  // Compute live CSS preview styles for styling/card examples
  const computeLiveCardStyle = () => {
    const styleObj: React.CSSProperties = {
      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      background: '#f1f5f9',
      color: '#334155',
      padding: '12px',
      borderRadius: '8px',
      border: '2px solid #cbd5e1',
      fontWeight: 700,
      textAlign: 'center',
      minWidth: '180px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    };

    // Apply cumulative steps that have been executed
    steps.forEach((st, idx) => {
      if (executedSteps.includes(idx)) {
        const text = st.instruction.toLowerCase();
        if (text.includes('background') || text.includes('#6366f1') || text.includes('purple') || text.includes('blue')) {
          styleObj.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
          styleObj.border = '2px solid #818cf8';
        }
        if (text.includes('color: white') || text.includes('color: #fff') || text.includes('white')) {
          styleObj.color = '#ffffff';
        }
        if (text.includes('padding: 20px') || text.includes('padding: 24px') || text.includes('padding:')) {
          styleObj.padding = '22px';
        }
        if (text.includes('border-radius: 16px') || text.includes('border-radius: 20px') || text.includes('border-radius')) {
          styleObj.borderRadius = '20px';
          styleObj.boxShadow = '0 12px 28px rgba(99, 102, 241, 0.35)';
        }
      }
    });

    return styleObj;
  };

  const isCssExample = steps.some((s) => {
    const t = s.instruction.toLowerCase();
    return t.includes('background') || t.includes('color') || t.includes('border-radius') || t.includes('padding');
  });

  const isRobotExample = steps.some((s) => s.instruction.toLowerCase().includes('robot.'));

  return (
    <section className="worked-example-player-wrapper">
      {/* 1. TOP HEADER & MODE CONTROLS */}
      <div className="player-top-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="player-icon-badge">
            <ListOrdered className="w-5 h-5" />
          </div>
          <div>
            <div className="player-eyebrow">
              🤖 {language === 'my' ? 'လက်တွေ့စမ်းသပ် လိုက်လုပ်ကြည့်ပါ' : 'Follow-Along Worked Example'}
            </div>
            <h3 className="player-title">{workedExample.title}</h3>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* Auto-Play Walkthrough Button */}
          <button
            onClick={handleToggleAutoPlay}
            className={`autoplay-btn ${isAutoPlaying ? 'running' : ''}`}
            title="Auto-play walkthrough step-by-step"
          >
            <Play className={`w-3.5 h-3.5 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
            <span>
              {isAutoPlaying
                ? language === 'my'
                  ? 'ရပ်တန့်မည် ⏸'
                  : 'Pause ⏸'
                : language === 'my'
                ? 'အလိုအလျောက် ပြသမည် ▶'
                : 'Auto Walkthrough ▶'}
            </span>
          </button>

          {/* Mode Switcher */}
          <div className="player-mode-toggle">
            <button
              onClick={() => {
                setViewMode('interactive');
                setIsAutoPlaying(false);
              }}
              className={`mode-toggle-btn ${viewMode === 'interactive' ? 'active' : ''}`}
              title="Interactive Player"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'စမ်းသပ်မောင်းနှင်ရန်' : 'Interactive Player'}</span>
            </button>
            <button
              onClick={() => {
                setViewMode('overview');
                setIsAutoPlaying(false);
              }}
              className={`mode-toggle-btn ${viewMode === 'overview' ? 'active' : ''}`}
              title="View all steps at once"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'အဆင့်အားလုံး' : 'All Steps'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. GOAL SCENARIO DESCRIPTION */}
      <div className="player-scenario-box">
        <span className="scenario-label">
          {language === 'my' ? '🎯 ရည်ရွယ်ချက် ပန်းတိုင်:' : '🎯 Goal Scenario:'}
        </span>
        <span className="scenario-text">{workedExample.scenario}</span>
      </div>

      {/* =========================================================================
          MODE A: INTERACTIVE STEP-BY-STEP PLAYER
          ========================================================================= */}
      {viewMode === 'interactive' && (
        <div className="interactive-stage-container">
          {/* Step Navigation Dots Bar */}
          <div className="stepper-dots-bar">
            {steps.map((st, idx) => {
              const isActive = idx === activeStepIdx;
              const isDone = executedSteps.includes(idx);
              return (
                <button
                  key={st.stepNumber}
                  onClick={() => {
                    handleJumpStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`stepper-dot-btn ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                >
                  <span className="dot-num">
                    {isDone ? '✓' : st.stepNumber}
                  </span>
                  <span className="dot-label">
                    {language === 'my' ? `အဆင့် ${st.stepNumber}` : `Step ${st.stepNumber}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Stage Split */}
          <div className="stage-action-card">
            {/* LEFT: Cumulative Program Terminal */}
            <div className="code-station">
              <div className="station-header">
                <span className="station-badge">
                  {language === 'my'
                    ? `အဆင့် ${currentStep.stepNumber} / ${steps.length}`
                    : `Step ${currentStep.stepNumber} of ${steps.length}`}
                </span>
                <span className="station-lang">
                  {category.icon}
                  <span>{category.label}</span>
                </span>
              </div>

              {/* Realistic Nyan Code Terminal */}
              <div className="station-terminal">
                <div className="terminal-dots">
                  <span className="t-dot red" />
                  <span className="t-dot yellow" />
                  <span className="t-dot green" />
                  <span className="t-title">Nyan Execution Shell</span>
                </div>

                <div className="terminal-body">
                  {/* Accumulated Program History */}
                  <div className="terminal-history">
                    {steps.map((st, sIdx) => {
                      const isPast = sIdx < activeStepIdx;
                      const isCurrent = sIdx === activeStepIdx;

                      if (isPast) {
                        return (
                          <div key={st.stepNumber} className="terminal-line past">
                            <span className="step-tag">#{st.stepNumber}</span>
                            <span className="step-check">✓</span>
                            <span className="code-text-past">{st.instruction}</span>
                          </div>
                        );
                      }

                      if (isCurrent) {
                        return (
                          <div key={st.stepNumber} className="terminal-line active-line">
                            <span className="prompt">{category.prompt}&gt;</span>
                            <span className="active-code">{st.instruction}</span>
                            {isExecuting && <span className="exec-spinner">⚡</span>}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>

                  {/* Execution status indicator */}
                  <div className="terminal-status-footer">
                    {isExecuting && (
                      <span className="status-executing">
                        ⚡ {language === 'my' ? 'အမိန့်ကို မောင်းနှင်နေသည်...' : 'Executing command...'}
                      </span>
                    )}
                    {!isExecuting && hasRunCurrent && (
                      <span className="status-success">
                        ✓ {language === 'my' ? 'အောင်မြင်စွာ စမ်းသပ်ပြီး [Status: OK 200]' : 'Executed Successfully [Status: OK 200]'}
                      </span>
                    )}
                    {!isExecuting && !hasRunCurrent && (
                      <span className="status-waiting">
                        ⏳ {language === 'my' ? 'စမ်းသပ်မောင်းနှင်ရန် စောင့်ဆိုင်းနေသည်' : 'Ready to execute'}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Run Button */}
              <button
                onClick={handleRunStep}
                disabled={isExecuting}
                className={`run-step-btn ${hasRunCurrent ? 'ran' : ''} ${isExecuting ? 'executing' : ''}`}
              >
                {isExecuting ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>{language === 'my' ? 'စမ်းသပ်မောင်းနှင်နေသည်...' : 'Executing...'}</span>
                  </>
                ) : hasRunCurrent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{language === 'my' ? 'စမ်းသပ်ပြီးပြီ (ထပ်မံစမ်းသပ်ရန် နှိပ်ပါ)' : 'Executed (Click to Re-run)'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>{language === 'my' ? 'ဤအဆင့်ကို စမ်းသပ်မောင်းနှင်မည်' : 'Run This Step!'}</span>
                  </>
                )}
              </button>
            </div>

            {/* RIGHT: Live Visual Stage & Byte's Reaction */}
            <div className="reaction-station">
              {/* Dynamic Live Canvas / Visual Output */}
              <div className="visual-stage-container">
                {isCssExample ? (
                  // Live CSS Interactive Card Preview
                  <div className="css-live-preview-box">
                    <div className="live-preview-tag">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: '#6366f1' }} />
                      <span>{language === 'my' ? 'တိုက်ရိုက် အလှဆင်ပုံ (Live Card Preview)' : 'Live Preview'}</span>
                    </div>
                    <div style={computeLiveCardStyle()}>
                      <div style={{ fontSize: '15px' }}>🚀 Nyan Academy Card</div>
                      <div style={{ fontSize: '11.5px', marginTop: '4px', opacity: 0.9 }}>
                        {language === 'my' ? 'CSS အလှဆင်ထားသော ကတ်ပြား' : 'Styled with CSS'}
                      </div>
                    </div>
                  </div>
                ) : isRobotExample ? (
                  // Robot Stage with interactive posture
                  <div className="mascot-actor-box">
                    <div className={`actor-glow-ring ${hasRunCurrent ? 'active' : ''} ${isExecuting ? 'executing' : ''}`} />
                    <ByteMascot mood={getStepMood()} size={110} />
                  </div>
                ) : (
                  // General Interactive Mascot Stage
                  <div className="mascot-actor-box">
                    <div className={`actor-glow-ring ${hasRunCurrent ? 'active' : ''} ${isExecuting ? 'executing' : ''}`} />
                    <ByteMascot mood={getStepMood()} size={110} />
                  </div>
                )}
              </div>

              {/* Outcome Feedback Speech Box */}
              <div className={`reaction-speech-bubble ${hasRunCurrent ? 'revealed' : 'waiting'}`}>
                {hasRunCurrent ? (
                  <>
                    <div className="speech-title success">
                      <Sparkles className="w-4 h-4" style={{ color: '#10b981' }} />
                      <span>{language === 'my' ? 'ရလဒ် ပေါ်ထွက်လာပုံ:' : 'What Happened:'}</span>
                    </div>
                    <p className="speech-content">{currentStep.outcome}</p>
                  </>
                ) : (
                  <>
                    <div className="speech-title hint">
                      <Sparkles className="w-4 h-4" style={{ color: '#0284c7' }} />
                      <span>{language === 'my' ? '💡 စမ်းသပ်မောင်းနှင်ရန် အကြံပြုချက်:' : '💡 Execution Prompt:'}</span>
                    </div>
                    <p className="speech-content" style={{ color: '#64748b', fontStyle: 'italic' }}>
                      {language === 'my'
                        ? '👉 အထက်ပါ Code အမိန့်ကို စက်ရုပ်ထံ ပို့ဆောင်ရန် "ဤအဆင့်ကို စမ်းသပ်မောင်းနှင်မည်" ခလုတ်ကို နှိပ်လိုက်ပါ။'
                        : '👉 Click "Run This Step!" to execute this instruction and see the live outcome!'}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stepper Navigation Footer */}
          <div className="player-nav-footer">
            <button
              onClick={() => {
                handlePrevStep();
                setIsAutoPlaying(false);
              }}
              disabled={isFirstStep}
              className="player-nav-btn prev"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{language === 'my' ? 'ယခင်အဆင့်' : 'Previous Step'}</span>
            </button>

            <div className="step-counter-cluster">
              <span className="step-count-pill">
                {activeStepIdx + 1} / {steps.length}
              </span>
              {allExecuted && (
                <span className="all-done-tag">
                  🎉 {language === 'my' ? 'အားလုံးပြီးပြီ!' : 'All Steps Completed!'}
                </span>
              )}
            </div>

            {isLastStep ? (
              <button
                onClick={handleReset}
                className="player-nav-btn replay"
                title="Restart this worked example"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{language === 'my' ? 'အစမှ ပြန်လည်စမ်းသပ်မည်' : 'Replay Example'}</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleNextStep();
                  setIsAutoPlaying(false);
                }}
                className={`player-nav-btn next ${hasRunCurrent ? 'pulse-ready' : ''}`}
              >
                <span>{language === 'my' ? 'နောက်တစ်ဆင့်' : 'Next Step'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODE B: ALL STEPS OVERVIEW (Visual Story Cards)
          ========================================================================= */}
      {viewMode === 'overview' && (
        <div className="overview-cards-grid">
          {steps.map((st, idx) => {
            const hasRunThis = executedSteps.includes(idx);
            return (
              <div
                key={st.stepNumber}
                className={`overview-step-card ${hasRunThis ? 'executed' : ''}`}
                onClick={() => {
                  setActiveStepIdx(idx);
                  setViewMode('interactive');
                  if (!executedSteps.includes(idx)) {
                    setExecutedSteps((prev) => [...prev, idx]);
                  }
                }}
                title="Click to interact with this step"
              >
                <div className="overview-card-header">
                  <span className="overview-step-num">Step {st.stepNumber}</span>
                  <span className="overview-inspect-tag">
                    {hasRunThis ? (
                      <span style={{ color: '#10b981', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <CheckCircle2 className="w-3.5 h-3.5" /> {language === 'my' ? 'စမ်းသပ်ပြီး' : 'Done'}
                      </span>
                    ) : (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <Play className="w-3 h-3" /> {language === 'my' ? 'စမ်းသပ်ရန်' : 'Try Step'}
                      </span>
                    )}
                  </span>
                </div>

                <div className="overview-code-box">
                  <code>{st.instruction}</code>
                </div>

                <div className="overview-outcome-box">
                  <span className="bulb-icon">💡</span>
                  <span>{st.outcome}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
