import { useState } from 'react';
import { chapters, sections } from '../data/chapters';

const LEVEL_ICONS = {
  beginner: '🌱',
  intermediate: '🔥',
  advanced: '🚀',
  project: '⚡',
};

export default function Sidebar({ currentId, completed, onNavigate, isOpen, onClose }) {
  const [search, setSearch] = useState('');

  const filtered = chapters.filter(ch =>
    ch.title.toLowerCase().includes(search.toLowerCase()) ||
    ch.section.toLowerCase().includes(search.toLowerCase())
  );

  const progress = Math.round((completed.size / chapters.length) * 100);

  return (
    <>
      <div
        className={`sidebar-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar${isOpen ? ' open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-badge">⚛️</div>
          <div className="logo-text">
            <span className="logo-title">React বাংলা</span>
            <span className="logo-sub">শিক্ষানবিস থেকে বিশেষজ্ঞ</span>
          </div>
        </div>

        {/* Search */}
        <div className="sidebar-search">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="বিষয় খুঁজুন..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {sections.map(section => {
            const sectionChapters = filtered.filter(ch => ch.section === section);
            if (sectionChapters.length === 0) return null;

            return (
              <div key={section} className="nav-section">
                <div className="nav-section-label">{section}</div>
                {sectionChapters.map(ch => (
                  <div
                    key={ch.id}
                    className={`nav-item${ch.id === currentId ? ' active' : ''}`}
                    onClick={() => { onNavigate(ch.id); onClose(); }}
                  >
                    <span style={{ fontSize: '14px' }}>{LEVEL_ICONS[ch.level]}</span>
                    <span style={{ flex: 1, fontSize: '13.5px' }}>{ch.title}</span>
                    {completed.has(ch.id) && ch.id !== currentId && (
                      <div className="nav-done-check">✓</div>
                    )}
                    {!completed.has(ch.id) && (
                      <span className={`nav-badge badge-${ch.level}`}>
                        {ch.level === 'beginner' ? 'সহজ' :
                          ch.level === 'intermediate' ? 'মধ্যম' :
                            ch.level === 'advanced' ? 'উন্নত' : 'প্রজেক্ট'}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </nav>

        {/* Progress */}
        <div className="sidebar-progress">
          <div className="progress-label">
            <span>অগ্রগতি</span>
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{progress}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '6px' }}>
            {completed.size}/{chapters.length} অধ্যায় সম্পন্ন
          </p>
        </div>
      </aside>
    </>
  );
}
