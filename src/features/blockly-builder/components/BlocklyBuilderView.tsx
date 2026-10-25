import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { useProgress } from '../../../context/ProgressContext';
import { useTranslation } from '../../../i18n/LanguageContext';
import { AudioService } from '../../../services/audio/AudioService';

// Define custom child-friendly Blockly blocks
Blockly.defineBlocksWithJsonArray([
  {
    type: 'move_right',
    message0: '➡️ %1',
    args0: [
      {
        type: 'field_label_serializable',
        name: 'LABEL',
        text: 'Move right',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: 'Move your robot one step rightward',
  },
  {
    type: 'jump_up',
    message0: '⬆️ %1',
    args0: [
      {
        type: 'field_label_serializable',
        name: 'LABEL',
        text: 'Jump',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: 'Make your robot jump up and down',
  },
  {
    type: 'repeat_steps',
    message0: '🔁 Repeat %1 times %2 %3',
    args0: [
      {
        type: 'field_number',
        name: 'TIMES',
        value: 2,
        min: 1,
        max: 5,
      },
      {
        type: 'input_dummy',
      },
      {
        type: 'input_statement',
        name: 'DO',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 35,
    tooltip: 'Repeat instructions multiple times',
  },
]);

// Custom code generators
javascriptGenerator.forBlock['move_right'] = () => {
  return 'commands.push("right");\n';
};

javascriptGenerator.forBlock['jump_up'] = () => {
  return 'commands.push("jump");\n';
};

javascriptGenerator.forBlock['repeat_steps'] = (block) => {
  const times = block.getFieldValue('TIMES') || 2;
  const branch = javascriptGenerator.statementToCode(block, 'DO');
  return `for (let i = 0; i < ${times}; i++) {\n${branch}}\n`;
};

export const BlocklyBuilderView: React.FC = () => {
  const { lang, t } = useTranslation();
  const { progress, award } = useProgress();

  const blocklyDivRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  const [robotLeft, setRobotLeft] = useState(20);
  const [isJumping, setIsJumping] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [outputMessage, setOutputMessage] = useState(
    lang === 'my'
      ? 'Block များကို စီစဉ်ပြီး Program ကို Run ကြည့်ပါ။'
      : 'Assemble blocks in the workspace and hit Run!'
  );

  // Mount Blockly Workspace
  useEffect(() => {
    if (!blocklyDivRef.current) return;

    const toolboxXml = `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="move_right"></block>
        <block type="jump_up"></block>
        <block type="repeat_steps"></block>
      </xml>
    `;

    const ws = Blockly.inject(blocklyDivRef.current, {
      toolbox: toolboxXml,
      scrollbars: true,
      trashcan: true,
      media: 'https://unpkg.com/blockly/media/',
      zoom: {
        controls: true,
        wheel: false,
        startScale: 0.9,
      },
    });

    workspaceRef.current = ws;

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  const runProgram = async () => {
    if (isRunning || !workspaceRef.current) return;

    // Generate code array from workspace
    const code = javascriptGenerator.workspaceToCode(workspaceRef.current);

    const commands: string[] = [];
    try {
      const executeFn = new Function('commands', code);
      executeFn(commands);
    } catch (e) {
      console.warn('Execution note:', e);
    }

    if (commands.length === 0) {
      setOutputMessage(lang === 'my' ? 'အရင်ဆုံး Block များကို Workspace ထဲ ထည့်သွင်းပေးပါ။' : 'Please connect some blocks in the workspace first!');
      return;
    }

    setIsRunning(true);
    setRobotLeft(20);
    setIsJumping(false);
    AudioService.play('step');
    await new Promise(r => setTimeout(r, 200));

    let currentPos = 20;
    let rightMoves = 0;
    let jumps = 0;

    for (const cmd of commands) {
      if (cmd === 'right') {
        rightMoves++;
        currentPos = Math.min(currentPos + 55, 320);
        setRobotLeft(currentPos);
        AudioService.play('step');
        await new Promise(r => setTimeout(r, 380));
      } else if (cmd === 'jump') {
        jumps++;
        setIsJumping(true);
        AudioService.play('jump');
        await new Promise(r => setTimeout(r, 220));
        setIsJumping(false);
        await new Promise(r => setTimeout(r, 220));
      }
    }

    if (currentPos >= 260) {
      AudioService.play('star');
    }

    const total = rightMoves + jumps;
    setOutputMessage(
      lang === 'my'
        ? `🎉 Program အလုပ်လုပ်ပါပြီ! ညာဘက်ရွှေ့မှု ${rightMoves} ကြိမ်၊ ခုန်မှု ${jumps} ကြိမ်။ စုစုပေါင်း: ${total} ခု!`
        : `🎉 Program executed! Moves: ${rightMoves}, Jumps: ${jumps}. Total actions: ${total}!`
    );

    if (!progress.builderDone) {
      award(10, 'builder');
    }

    setIsRunning(false);
  };

  const clearWorkspace = () => {
    if (workspaceRef.current) {
      workspaceRef.current.clear();
      setRobotLeft(20);
      setIsJumping(false);
      AudioService.play('step');
      setOutputMessage(lang === 'my' ? 'Block များကို ရှင်းလင်းပြီးပါပြီ။' : 'Workspace cleared.');
    }
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h2 className="panel-title">{t('builder.title')}</h2>
        <p className="panel-desc">{t('builder.desc')}</p>
      </div>

      {/* Mini Interactive Character Stage */}
      <div className="stage-container" style={{ position: 'relative', height: '140px', marginBottom: '16px' }}>
        <div className="stage-clouds">
          <span>☁️</span>
          <span>☀️</span>
          <span>☁️</span>
        </div>

        {/* Robot Sprite */}
        <div
          className="stage-robot"
          style={{
            position: 'absolute',
            bottom: '22px',
            left: `${robotLeft}px`,
            fontSize: '38px',
            transition: 'left 0.35s ease, transform 0.22s ease',
            transform: isJumping ? 'translateY(-40px)' : 'translateY(0)',
            userSelect: 'none',
          }}
        >
          🤖
        </div>

        {/* Goal Star */}
        <div className="stage-goal" style={{ position: 'absolute', bottom: '24px', right: '24px', fontSize: '32px' }}>
          ⭐
        </div>
      </div>

      {/* Action Controls */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={runProgram} disabled={isRunning}>
          {t('builder.run')}
        </button>
        <button className="btn-secondary" onClick={clearWorkspace} disabled={isRunning}>
          {t('builder.clear')}
        </button>
      </div>

      {/* Google Blockly Workspace Canvas */}
      <div
        ref={blocklyDivRef}
        style={{
          width: '100%',
          height: '320px',
          borderRadius: 'var(--radius-md)',
          border: '2px solid var(--border-line)',
          background: '#faf9ff',
          marginBottom: '16px',
        }}
      />

      {/* Live Feedback Box */}
      <div className="callout-box" aria-live="polite">
        <strong>💡 {lang === 'my' ? 'Program ရလဒ်:' : 'Program Output:'}</strong>
        <span>{outputMessage}</span>
      </div>
    </div>
  );
};
