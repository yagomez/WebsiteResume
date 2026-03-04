import Link from 'next/link';
import { getAssetPath } from '@/utils/assetPath';

type PortfolioChromeProps = {
  children: React.ReactNode;
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none' as const,
  fontSize: '10px',
  fontWeight: 'normal' as const,
  cursor: 'pointer' as const,
  padding: '2px 4px',
};

const navBtnStyle = {
  padding: '4px 8px',
  background: '#c0c0c0',
  border: '2px solid',
  borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
  textDecoration: 'none' as const,
  color: '#000080',
  fontSize: '11px',
  fontWeight: 'bold' as const,
  textAlign: 'center' as const,
  cursor: 'pointer' as const,
};

export function PortfolioChrome({ children }: PortfolioChromeProps) {
  return (
    <main style={{ padding: 0, minHeight: '100vh' }}>
      {/* Top nav - shared across pages */}
      <div
        style={{
          width: '100%',
          background: '#000',
          padding: '6px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          paddingLeft: '15px',
          paddingRight: '15px',
          boxSizing: 'border-box',
          minHeight: '28px',
        }}
      >
        <Link href="/" style={{ display: 'flex' }}>
          <img
            src={getAssetPath('/images/ysicon.png')}
            alt="Logo"
            style={{ height: '120px', width: 'auto' }}
          />
        </Link>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flex: 1 }}>
          <Link href="/" style={navLinkStyle}>
            Home
          </Link>
          <Link href="/about" style={navLinkStyle}>
            About
          </Link>
          <Link href="/projects" style={navLinkStyle}>
            Projects
          </Link>
          <Link href="/blog" style={navLinkStyle}>
            Blog
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: '3px 4px',
              fontSize: '10px',
              border: '1px solid #666',
              width: '120px',
              background: '#fff',
              color: '#000',
            }}
          />
          <button
            style={{
              padding: '3px 8px',
              background: '#ffcc00',
              color: '#000',
              border: '1px solid #999',
              fontSize: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Go
          </button>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto' }}>
          <Link href="/" style={navLinkStyle}>
            Sign Out
          </Link>
          <span style={{ color: '#666', fontSize: '10px' }}>|</span>
          <Link href="/" style={navLinkStyle}>
            Help
          </Link>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {children}

        {/* Navigation block */}
        <div
          style={{
            border: '2px solid',
            borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
            background: '#c0c0c0',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(90deg, #000080, #1084d7)',
              color: 'white',
              padding: '2px 2px',
              fontWeight: 'bold',
              fontSize: '11px',
            }}
          >
            Navigation
          </div>
          <div
            style={{
              padding: '8px',
              background: '#c0c0c0',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <Link href="/" style={navBtnStyle}>
              Home
            </Link>
            <Link href="/projects" style={navBtnStyle}>
              Projects
            </Link>
            <Link href="/about" style={navBtnStyle}>
              About Me
            </Link>
            <Link href="/blog" style={navBtnStyle}>
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div
        style={{
          width: '100%',
          background: '#000',
          padding: '6px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          paddingLeft: '15px',
          paddingRight: '15px',
          boxSizing: 'border-box',
          minHeight: '28px',
          marginTop: '20px',
        }}
      >
        <img
          src={getAssetPath('/images/ysicon.png')}
          alt="Logo"
          style={{ height: '120px', width: 'auto' }}
        />
        <div
          style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Link href="/" style={navLinkStyle}>
            Home
          </Link>
          <Link href="/" style={navLinkStyle}>
            Profile
          </Link>
        </div>
      </div>
    </main>
  );
}

