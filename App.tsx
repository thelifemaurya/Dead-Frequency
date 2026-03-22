import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href') || '');
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="app">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#story" className="nav-link">Story</a>
        <a href="#characters" className="nav-link">Characters</a>
        <a href="#gameplay" className="nav-link">Gameplay</a>
        <a href="#features" className="nav-link">Features</a>
      </nav>

      <section id="home" className="landing">
        <div className="glitch-wrapper">
          <h1 className="title glitch" data-text="PROJECT NIGHTMARE">
            PROJECT NIGHTMARE
          </h1>
        </div>
        <p className="tagline">Face your deepest fears</p>
        <div className="cta-container">
          <button className="cta-button">
            <span>Coming Soon</span>
          </button>
        </div>
        <div className="scroll-indicator" style={{ opacity: scrollY > 100 ? 0 : 1 }}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      <section id="story" className="section story-section">
        <div className="container">
          <h2 className="section-title">The Beginning</h2>
          <div className="story-content">
            <p className="story-text">
              In the summer of 1997, seven people disappeared without a trace in a small town.
              The police investigation led nowhere. The case went cold. The files were buried.
            </p>
            <p className="story-text">
              Twenty-five years later, you receive a package. Inside, a phone—old, damaged, still working.
              On its screen, a single message: "They're still here. Find us."
            </p>
            <p className="story-text">
              As you unlock the phone's secrets, reality begins to fracture. The line between past and present
              blurs. What you discover will change everything you thought you knew about that summer.
            </p>
            <p className="story-text glow-text">
              Some nightmares are based on true events.
            </p>
          </div>
        </div>
      </section>

      <section id="characters" className="section characters-section">
        <div className="container">
          <h2 className="section-title">Lost Souls</h2>
          <div className="characters-grid">
            <div className="character-card">
              <div className="character-icon">?</div>
              <h3 className="character-name">Sarah Mitchell</h3>
              <p className="character-trait">The Witness</p>
              <p className="character-desc">
                Last seen leaving the county library. Known for her photographic memory and
                obsession with local urban legends. Her diary was never found.
              </p>
              <div className="character-status">Missing: July 12, 1997</div>
            </div>

            <div className="character-card">
              <div className="character-icon">?</div>
              <h3 className="character-name">David Chen</h3>
              <p className="character-trait">The Skeptic</p>
              <p className="character-desc">
                Physics student who refused to believe in anything supernatural. His last voicemail
                to his sister: "I was wrong about everything."
              </p>
              <div className="character-status">Missing: July 15, 1997</div>
            </div>

            <div className="character-card">
              <div className="character-icon">?</div>
              <h3 className="character-name">Emma Rodriguez</h3>
              <p className="character-trait">The Detective</p>
              <p className="character-desc">
                Young detective assigned to the case. Her investigation notes suggest she discovered
                something impossible. She vanished before filing her final report.
              </p>
              <div className="character-status">Missing: August 3, 1997</div>
            </div>
          </div>
        </div>
      </section>

      <section id="gameplay" className="section gameplay-section">
        <div className="container">
          <h2 className="section-title">How To Play</h2>
          <div className="gameplay-grid">
            <div className="gameplay-item">
              <div className="gameplay-number">01</div>
              <h3 className="gameplay-title">Explore</h3>
              <p className="gameplay-desc">
                Navigate through abandoned locations, each holding fragments of the truth.
                Every room tells a story. Every shadow hides a secret.
              </p>
            </div>

            <div className="gameplay-item">
              <div className="gameplay-number">02</div>
              <h3 className="gameplay-title">Solve</h3>
              <p className="gameplay-desc">
                Decrypt messages, solve environmental puzzles, and piece together the mystery
                from scattered clues. Logic and intuition are your only weapons.
              </p>
            </div>

            <div className="gameplay-item">
              <div className="gameplay-number">03</div>
              <h3 className="gameplay-title">Survive</h3>
              <p className="gameplay-desc">
                Face psychological horror that plays with your perception. Reality is not what
                it seems. Trust nothing. Question everything.
              </p>
            </div>

            <div className="gameplay-item">
              <div className="gameplay-number">04</div>
              <h3 className="gameplay-title">Uncover</h3>
              <p className="gameplay-desc">
                Multiple endings based on your choices. The truth you discover depends on how
                deep you're willing to go. Some answers come at a cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Fully Offline</h3>
              <p>Play anywhere, anytime. No internet connection required.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📖</div>
              <h3>Story Driven</h3>
              <p>Deep narrative inspired by true events. Every detail matters.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🧠</div>
              <h3>Psychological Horror</h3>
              <p>No cheap jumpscares. Pure atmospheric dread and mental terror.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Minimal Graphics</h3>
              <p>Low-poly aesthetic that runs smoothly on any Android device.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎧</div>
              <h3>Immersive Audio</h3>
              <p>3D sound design that amplifies the tension. Headphones recommended.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔀</div>
              <h3>Multiple Endings</h3>
              <p>Your choices shape the outcome. Replay to discover all truths.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">Made by Your Name</p>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Discord</a>
          </div>
          <p className="footer-note">© 2024 Project Nightmare. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: #000;
          color: #fff;
          overflow-x: hidden;
        }

        .app {
          position: relative;
          min-height: 100vh;
        }

        .stars, .stars2, .stars3 {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .stars {
          background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==') repeat;
          animation: starsMove 100s linear infinite;
          opacity: 0.3;
        }

        .stars2 {
          background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==') repeat;
          animation: starsMove 150s linear infinite;
          opacity: 0.2;
        }

        .stars3 {
          background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==') repeat;
          animation: starsMove 200s linear infinite;
          opacity: 0.1;
        }

        @keyframes starsMove {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 0, 0, 0.2);
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s;
          position: relative;
        }

        .nav-link:hover {
          color: #ff0000;
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
        }

        .landing {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
          position: relative;
          background: radial-gradient(ellipse at center, rgba(20, 0, 0, 0.8) 0%, rgba(0, 0, 0, 1) 70%);
        }

        .glitch-wrapper {
          margin-bottom: 2rem;
        }

        .title {
          font-size: clamp(2rem, 8vw, 5rem);
          font-weight: 900;
          letter-spacing: 0.3rem;
          color: #fff;
          text-shadow:
            0 0 10px rgba(255, 0, 0, 0.8),
            0 0 20px rgba(255, 0, 0, 0.6),
            0 0 30px rgba(255, 0, 0, 0.4);
          position: relative;
          animation: titlePulse 3s ease-in-out infinite;
        }

        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff0000;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00ff00;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
          0% { clip: rect(36px, 9999px, 89px, 0); }
          25% { clip: rect(90px, 9999px, 120px, 0); }
          50% { clip: rect(12px, 9999px, 56px, 0); }
          75% { clip: rect(67px, 9999px, 145px, 0); }
          100% { clip: rect(23px, 9999px, 78px, 0); }
        }

        @keyframes glitch-anim-2 {
          0% { clip: rect(65px, 9999px, 119px, 0); }
          25% { clip: rect(32px, 9999px, 78px, 0); }
          50% { clip: rect(90px, 9999px, 134px, 0); }
          75% { clip: rect(15px, 9999px, 67px, 0); }
          100% { clip: rect(45px, 9999px, 98px, 0); }
        }

        @keyframes titlePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .tagline {
          font-size: clamp(1rem, 3vw, 1.5rem);
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          margin-bottom: 3rem;
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cta-container {
          animation: fadeInUp 1s ease-out 1s both;
        }

        .cta-button {
          padding: 1rem 3rem;
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fff;
          background: transparent;
          border: 2px solid #ff0000;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #ff0000;
          transition: left 0.3s;
          z-index: -1;
        }

        .cta-button:hover::before {
          left: 0;
        }

        .cta-button:hover {
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          transition: opacity 0.3s;
        }

        .mouse {
          width: 26px;
          height: 40px;
          border: 2px solid #ff0000;
          border-radius: 13px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }

        .wheel {
          width: 3px;
          height: 8px;
          background: #ff0000;
          border-radius: 2px;
          animation: scrollWheel 1.5s ease-in-out infinite;
        }

        @keyframes scrollWheel {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(8px); }
        }

        .section {
          min-height: 100vh;
          padding: 6rem 2rem;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          text-align: center;
          margin-bottom: 4rem;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff0000, transparent);
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
        }

        .story-section {
          background: linear-gradient(180deg, rgba(10, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%);
        }

        .story-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .story-text {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          text-align: justify;
        }

        .glow-text {
          color: #ff0000;
          text-align: center;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
          margin-top: 3rem;
        }

        .characters-section {
          background: rgba(0, 0, 0, 0.95);
        }

        .characters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .character-card {
          background: linear-gradient(135deg, rgba(20, 0, 0, 0.8), rgba(10, 0, 0, 0.9));
          border: 1px solid rgba(255, 0, 0, 0.3);
          padding: 2rem;
          border-radius: 10px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .character-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .character-card:hover::before {
          opacity: 1;
        }

        .character-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 0, 0, 0.8);
          box-shadow: 0 10px 30px rgba(255, 0, 0, 0.3);
        }

        .character-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 0, 0, 0.2);
          border: 2px solid #ff0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #ff0000;
          margin: 0 auto 1.5rem;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
        }

        .character-name {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .character-trait {
          color: #ff0000;
          text-align: center;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .character-desc {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .character-status {
          color: rgba(255, 0, 0, 0.8);
          font-size: 0.85rem;
          font-style: italic;
          text-align: center;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 0, 0, 0.2);
        }

        .gameplay-section {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 0, 0, 0.9) 100%);
        }

        .gameplay-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .gameplay-item {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 0, 0, 0.2);
          border-radius: 10px;
          transition: all 0.3s;
        }

        .gameplay-item:hover {
          border-color: rgba(255, 0, 0, 0.6);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.2);
        }

        .gameplay-number {
          font-size: 3rem;
          font-weight: 900;
          color: #ff0000;
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
          margin-bottom: 1rem;
        }

        .gameplay-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .gameplay-desc {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .features-section {
          background: rgba(0, 0, 0, 0.98);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(20, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
          border: 1px solid rgba(255, 0, 0, 0.2);
          border-radius: 10px;
          transition: all 0.3s;
        }

        .feature-item:hover {
          transform: scale(1.05);
          border-color: rgba(255, 0, 0, 0.6);
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: grayscale(100%);
        }

        .feature-item h3 {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .feature-item p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .footer {
          background: rgba(0, 0, 0, 0.95);
          border-top: 1px solid rgba(255, 0, 0, 0.3);
          padding: 3rem 2rem;
          text-align: center;
        }

        .footer-text {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .social-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .social-link:hover {
          color: #ff0000;
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
        }

        .footer-note {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .nav {
            gap: 1rem;
            padding: 1rem;
            flex-wrap: wrap;
          }

          .nav-link {
            font-size: 0.75rem;
          }

          .title {
            letter-spacing: 0.1rem;
          }

          .tagline {
            letter-spacing: 0.1rem;
          }

          .section {
            padding: 4rem 1rem;
          }

          .characters-grid,
          .gameplay-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
