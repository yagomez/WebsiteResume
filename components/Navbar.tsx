import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="nes-container is-dark" style={{ marginBottom: '20px', borderBottom: '4px solid #00ff00' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '20px', margin: 0, color: '#00ff00', textShadow: '2px 2px 0 #ff00ff' }}>
            ➜ PORTFOLIO
          </h1>
        </Link>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link 
            href="/" 
            style={{ color: '#00ff00', fontSize: '12px', fontWeight: 'bold' }}
          >
            HOME
          </Link>
          <Link 
            href="/about" 
            style={{ color: '#00ff00', fontSize: '12px', fontWeight: 'bold' }}
          >
            ABOUT
          </Link>
          <Link 
            href="/projects" 
            style={{ color: '#00ff00', fontSize: '12px', fontWeight: 'bold' }}
          >
            PROJECTS
          </Link>
          <Link 
            href="#contact" 
            style={{ color: '#00ff00', fontSize: '12px', fontWeight: 'bold' }}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
