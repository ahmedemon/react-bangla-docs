import { chapters } from '../data/chapters';

const PATHS = [
  {
    level: 'beginner',
    icon: '🌱',
    label: 'শিক্ষানবিস',
    title: 'শুরু থেকে শেখা',
    desc: 'React-এর মূল ধারণা, JSX, Component, State, Events — সব কিছু ধাপে ধাপে।',
    color: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.3)',
    textColor: '#34d399',
  },
  {
    level: 'intermediate',
    icon: '🔥',
    label: 'মধ্যম',
    title: 'গভীরে যাওয়া',
    desc: 'Hooks, Context API, Custom Hooks, React Router — intermediate দক্ষতা।',
    color: 'rgba(251,146,60,0.15)',
    border: 'rgba(251,146,60,0.3)',
    textColor: '#fb923c',
  },
  {
    level: 'advanced',
    icon: '🚀',
    label: 'উন্নত',
    title: 'বিশেষজ্ঞ পর্যায়',
    desc: 'Performance, Advanced Patterns, useReducer — প্রফেশনাল React ডেভেলপমেন্ট।',
    color: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.3)',
    textColor: '#a78bfa',
  },
];

export default function HomePage({ onStart }) {
  return (
    <div className="content-area">
      <div className="home-hero">
        <span className="home-logo">⚛️</span>
        <h1>React শিখুন বাংলায়</h1>
        <p>
          শিক্ষানবিস থেকে বিশেষজ্ঞ পর্যন্ত — সম্পূর্ণ বাংলা ভাষায় React.js শেখার
          সবচেয়ে সম্পূর্ণ গাইড। কোড উদাহরণ সহ।
        </p>

        <div className="home-stats">
          <div className="stat">
            <span className="stat-num">{chapters.length}+</span>
            <span className="stat-label">অধ্যায়</span>
          </div>
          <div className="stat">
            <span className="stat-num">৫০+</span>
            <span className="stat-label">কোড উদাহরণ</span>
          </div>
          <div className="stat">
            <span className="stat-num">১টি</span>
            <span className="stat-label">সম্পূর্ণ প্রজেক্ট</span>
          </div>
          <div className="stat">
            <span className="stat-num">৩</span>
            <span className="stat-label">স্তর</span>
          </div>
        </div>

        <div className="home-path">
          {PATHS.map(path => {
            const count = chapters.filter(c => c.level === path.level).length;
            return (
              <div
                key={path.level}
                className="path-card"
                style={{ borderColor: path.border }}
                onClick={() => onStart(path.level)}
              >
                <div className="path-card-icon">{path.icon}</div>
                <h3>{path.title}</h3>
                <p>{path.desc}</p>
                <span
                  className="path-card-count"
                  style={{ background: path.color, color: path.textColor }}
                >
                  {count}টি অধ্যায়
                </span>
              </div>
            );
          })}
        </div>

        <button className="start-btn" onClick={() => onStart('beginner')}>
          শুরু করুন →
        </button>
      </div>
    </div>
  );
}
