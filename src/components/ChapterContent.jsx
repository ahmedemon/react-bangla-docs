import CodeBlock from './CodeBlock';

function Callout({ variant, icon, title, text }) {
  return (
    <div className={`callout callout-${variant}`}>
      <span className="callout-icon">{icon}</span>
      <div className="callout-body">
        <strong>{title}</strong>
        {text}
      </div>
    </div>
  );
}

function CardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map((card, i) => (
        <div key={i} className="info-card">
          <div className="info-card-icon">{card.icon}</div>
          <h4>{card.title}</h4>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}

function CompareTable({ headers, rows }) {
  return (
    <div style={{ overflowX: 'auto', margin: '16px 0 24px' }}>
      <table className="compare-table">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}><code style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', fontSize: '13px', fontFamily: 'var(--font-code)' }}>{cell}</code></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ChapterContent({ blocks }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={i}>{block.text}</h2>;
          case 'h3':
            return <h3 key={i}>{block.text}</h3>;
          case 'p':
            return <p key={i}>{block.text}</p>;
          case 'ul':
            return (
              <ul key={i}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
          case 'code':
            return <CodeBlock key={i} lang={block.lang} code={block.code} />;
          case 'callout':
            return <Callout key={i} {...block} />;
          case 'cards':
            return <CardGrid key={i} items={block.items} />;
          case 'table':
            return <CompareTable key={i} headers={block.headers} rows={block.rows} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
