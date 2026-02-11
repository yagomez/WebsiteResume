import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nes-container is-dark" style={{ marginTop: '40px', borderTop: '4px solid #ff00ff' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div>
            <h3 style={{ color: '#00ff00', textShadow: '2px 2px 0 #ff00ff', marginBottom: '10px', fontSize: '14px' }}>
              PORTFOLIO
            </h3>
            <p style={{ fontSize: '11px', lineHeight: '1.6' }}>
              🎮 An 8-bit style portfolio showcasing ETL and full-stack development.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#00ffff', textShadow: '2px 2px 0 #ff00ff', marginBottom: '10px', fontSize: '14px' }}>
              QUICK LINKS
            </h3>
            <ul style={{ listStyle: 'none', fontSize: '11px' }}>
              <li style={{ marginBottom: '5px' }}>
                <Link href="/about" style={{ color: '#00ff00' }}>
                  &gt; About Me
                </Link>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <Link href="/projects" style={{ color: '#00ff00' }}>
                  &gt; Projects
                </Link>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <Link href="#contact" style={{ color: '#00ff00' }}>
                  &gt; Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: '#ffff00', textShadow: '2px 2px 0 #ff00ff', marginBottom: '10px', fontSize: '14px' }}>
              CONNECT
            </h3>
            <ul style={{ listStyle: 'none', fontSize: '11px' }}>
              <li style={{ marginBottom: '5px' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00ff00' }}>
                  &gt; GitHub
                </a>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00ff00' }}>
                  &gt; LinkedIn
                </a>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <a href="mailto:your-email@example.com" style={{ color: '#00ff00' }}>
                  &gt; Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '2px solid #333', paddingTop: '15px', fontSize: '10px', color: '#888', textAlign: 'center' }}>
          <p style={{ margin: '5px 0' }}>
            © {currentYear} YAREL GOMEZ • ALL RIGHTS RESERVED
          </p>
          <p style={{ margin: '5px 0' }}>
            BUILT WITH NEXT.JS • TYPESCRIPT • NES.CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
