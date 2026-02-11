import Link from 'next/link';

export const metadata = {
  title: 'Retro Design Demo | Portfolio',
  description: 'Compare retro CSS frameworks for your portfolio',
};

export default function RetroDemoIndex() {
  return (
    <div style={{ 
      padding: '40px 20px', 
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
          🕹️ Retro Portfolio Design Demos
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
          Explore different retro aesthetics for your portfolio
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
          {/* 98.css Demo Card */}
          <div style={{
            backgroundColor: '#c0c0c0',
            border: '2px solid #dfdfdf',
            borderRight: '2px solid #808080',
            borderBottom: '2px solid #808080',
            padding: '20px',
            boxShadow: '1px 1px 0 #ffffff inset, 1px 1px 0 #808080',
          }}>
            <h2 style={{ 
              marginTop: 0, 
              fontSize: '14px',
              backgroundColor: '#000080',
              color: '#ffffff',
              padding: '2px 4px',
              marginBottom: '15px'
            }}>
              📁 WINDOWS 98.CSS
            </h2>
            
            <p style={{ fontSize: '12px', lineHeight: '1.6', marginBottom: '15px' }}>
              <strong>Aesthetic:</strong> Classic Windows 98 interface with iconic raised/sunken borders<br />
              <strong>Vibe:</strong> Professional, nostalgic, app-like<br />
              <strong>Best For:</strong> Clean, organized portfolios with window-based layouts<br />
              <strong>Size:</strong> ~10KB
            </p>

            <div style={{
              backgroundColor: '#c0c0c0',
              border: '2px inset #dfdfdf',
              padding: '10px',
              marginBottom: '15px',
              fontSize: '11px',
              fontFamily: 'MS Sans Serif',
            }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#000080' }}>📊</span> Native Windows feel
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#000080' }}>📁</span> File manager vibes
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#000080' }}>🪟</span> Title bars & windows
              </div>
              <div>
                <span style={{ color: '#000080' }}>✅</span> Great accessibility
              </div>
            </div>

            <Link href="/retro-demo/page98">
              <button style={{
                backgroundColor: '#c0c0c0',
                border: '2px outset #dfdfdf',
                borderRight: '2px solid #808080',
                borderBottom: '2px solid #808080',
                padding: '4px 12px',
                cursor: 'pointer',
                fontSize: '11px',
                fontFamily: 'MS Sans Serif',
                width: '100%',
              }}>
                🚀 View 98.css Demo
              </button>
            </Link>
          </div>

          {/* NES.css Demo Card */}
          <div style={{
            backgroundColor: '#1a1a1a',
            border: '4px solid #333',
            padding: '20px',
            position: 'relative',
          }}>
            <h2 style={{ 
              marginTop: 0, 
              fontSize: '14px',
              backgroundColor: '#000',
              color: '#00ff00',
              padding: '8px',
              marginBottom: '15px',
              fontFamily: 'monospace',
              textShadow: '2px 2px #ff00ff',
            }}>
              👾 NES.CSS 8-BIT
            </h2>
            
            <p style={{ 
              fontSize: '12px', 
              lineHeight: '1.6', 
              marginBottom: '15px',
              color: '#e0e0e0'
            }}>
              <strong>Aesthetic:</strong> Classic 8-bit Nintendo NES game UI<br />
              <strong>Vibe:</strong> Fun, playful, retro gaming<br />
              <strong>Best For:</strong> Creative portfolios with personality<br />
              <strong>Size:</strong> Small footprint
            </p>

            <div style={{
              backgroundColor: '#000',
              border: '2px solid #00ff00',
              padding: '10px',
              marginBottom: '15px',
              fontSize: '11px',
              fontFamily: 'monospace',
              color: '#00ff00',
            }}>
              <div style={{ marginBottom: '8px' }}>👾 Pixelated charm</div>
              <div style={{ marginBottom: '8px' }}>🎮 Game UI vibes</div>
              <div style={{ marginBottom: '8px' }}>🌈 8-bit color palette</div>
              <div>✨ Maximum personality</div>
            </div>

            <Link href="/retro-demo/page-nes">
              <button style={{
                backgroundColor: '#00ff00',
                border: '2px outset #333',
                color: '#000',
                padding: '6px 12px',
                cursor: 'pointer',
                fontSize: '11px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                width: '100%',
              }}>
                🎮 View NES.css Demo
              </button>
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div style={{ 
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          padding: '20px',
          marginBottom: '40px',
          borderRadius: '4px'
        }}>
          <h3 style={{ marginTop: 0 }}>📊 Framework Comparison</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Feature</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>98.css</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>NES.css</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>OS Theme</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>Windows 98</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>NES Gaming</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>Personality Level</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>Subtle 😊</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>High 🎉</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>Professional Vibe</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>✅ Yes</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>⚡ Quirky</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>Mobile Friendly</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>Good</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>Good</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>JS Required</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>❌ No</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>❌ No</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px' }}>Best Use Case</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>App-like UI</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>Creative Twist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Next Steps */}
        <div style={{
          backgroundColor: '#e3f2fd',
          border: '1px solid #90caf9',
          borderRadius: '4px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{ marginTop: 0 }}>💡 Next Steps</h3>
          <p>
            Once you decide on a style, we can integrate it into your main portfolio and 
            adjust your components to match the retro aesthetic!
          </p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Current approach: Keep modern design • Alternative: Full retro redesign • Hybrid: Mix & match elements
          </p>
        </div>
      </div>
    </div>
  );
}
