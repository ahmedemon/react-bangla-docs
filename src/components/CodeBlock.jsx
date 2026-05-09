import { useState } from 'react';

const KEYWORDS = /\b(import|export|default|from|function|const|let|var|return|if|else|switch|case|break|class|extends|new|this|async|await|try|catch|finally|throw|typeof|null|undefined|true|false|void)\b/g;
const STRINGS = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g;
const COMMENTS = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
const FUNCTIONS = /\b([A-Z][a-zA-Z]*|[a-z][a-zA-Z]*(?=\s*\())/g;
const NUMBERS = /\b(\d+\.?\d*)\b/g;
const JSX_TAGS = /(<\/?[A-Za-z][A-Za-z0-9.]*)/g;
const JSX_ATTRS = /\s([a-zA-Z]+(?:=[{"])?)/g;

function highlight(code) {
  // Simple tokenization approach
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/(\/\/.*$)/gm, '<span class="cm">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, '<span class="str">$1</span>')
    .replace(/\b(import|export|default|from|function|const|let|var|return|if|else|switch|case|break|class|extends|new|this|async|await|try|catch|finally|throw|typeof|null|undefined|true|false|void)\b/g, '<span class="kw">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');
}

export default function CodeBlock({ lang, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const dotColors = ['#ff5f57', '#febc2e', '#28c840'];

  return (
    <div className="code-block">
      <div className="code-header">
        <div className="code-dots">
          {dotColors.map((c, i) => (
            <div key={i} className="code-dot" style={{ background: c }} />
          ))}
        </div>
        <span className="code-lang">{lang}</span>
        <button
          className={`code-copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? '✓ কপি হয়েছে' : '⎘ কপি'}
        </button>
      </div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
    </div>
  );
}
