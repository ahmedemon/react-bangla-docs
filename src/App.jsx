import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChapterContent from './components/ChapterContent';
import HomePage from './components/HomePage';
import { chapters } from './data/chapters';

const LEVEL_LABELS = {
  beginner: '🌱 শিক্ষানবিস',
  intermediate: '🔥 মধ্যম',
  advanced: '🚀 উন্নত',
  project: '⚡ প্রজেক্ট',
};

export default function App() {
  const [currentId, setCurrentId] = useState(null); // null = home
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('rbn-completed');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Save progress
  useEffect(() => {
    localStorage.setItem('rbn-completed', JSON.stringify([...completed]));
  }, [completed]);

  const navigate = (id) => {
    setCurrentId(id);
    setCompleted(prev => new Set([...prev, id]));
    window.scrollTo(0, 0);
  };

  const handleStart = (level) => {
    const first = chapters.find(c => c.level === level);
    if (first) navigate(first.id);
  };

  const currentChapter = chapters.find(c => c.id === currentId);
  const currentIndex = chapters.findIndex(c => c.id === currentId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="app-shell">
      <Sidebar
        currentId={currentId}
        completed={completed}
        onNavigate={navigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main">
        {/* Topbar */}
        <div className="topbar">
          <button className="hamburger" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <div className="topbar-breadcrumb">
            <span
              style={{ cursor: 'pointer', color: 'var(--accent)' }}
              onClick={() => setCurrentId(null)}
            >
              React বাংলা
            </span>
            {currentChapter && (
              <>
                <span style={{ color: 'var(--text3)' }}>›</span>
                <span>{currentChapter.section}</span>
                <span style={{ color: 'var(--text3)' }}>›</span>
                <span className="crumb-current">{currentChapter.title}</span>
              </>
            )}
          </div>
          <div className="topbar-actions">
            {currentId && (
              <button className="topbar-btn" onClick={() => setCurrentId(null)}>
                🏠 হোম
              </button>
            )}
            {nextChapter && (
              <button className="topbar-btn primary" onClick={() => navigate(nextChapter.id)}>
                পরবর্তী →
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        {currentId === null ? (
          <HomePage onStart={handleStart} />
        ) : currentChapter ? (
          <div className="content-area">
            <div className="chapter-content">
              {/* Eyebrow */}
              <div className="chapter-eyebrow">
                <span className={`chapter-level-tag ${currentChapter.level}`}>
                  {LEVEL_LABELS[currentChapter.level]}
                </span>
                <span className="chapter-read-time">
                  ⏱ {currentChapter.readTime} পড়া
                </span>
                {completed.has(currentId) && (
                  <span style={{ fontSize: '12px', color: '#34d399' }}>✓ সম্পন্ন</span>
                )}
              </div>

              {/* Title */}
              <h1 className="chapter-title">{currentChapter.title}</h1>
              <p className="chapter-intro">{currentChapter.intro}</p>

              {/* Content blocks */}
              <ChapterContent blocks={currentChapter.content} />

              {/* Navigation */}
              <div className="chapter-nav">
                {prevChapter ? (
                  <button className="nav-btn" onClick={() => navigate(prevChapter.id)}>
                    <div>
                      <span className="nav-btn-label">← পূর্ববর্তী</span>
                      <span className="nav-btn-title">{prevChapter.title}</span>
                    </div>
                  </button>
                ) : <div />}

                {nextChapter ? (
                  <button className="nav-btn next" onClick={() => navigate(nextChapter.id)}>
                    <div>
                      <span className="nav-btn-label">পরবর্তী →</span>
                      <span className="nav-btn-title">{nextChapter.title}</span>
                    </div>
                  </button>
                ) : (
                  <div className="completion-banner">
                    <h3>🎉 অভিনন্দন!</h3>
                    <p>আপনি সম্পূর্ণ React বাংলা কোর্স শেষ করেছেন!</p>
                    <button className="start-btn" onClick={() => setCurrentId(null)}>
                      হোমে ফিরে যান
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
