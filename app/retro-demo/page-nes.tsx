'use client';

export default function DemoNES() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#212121', minHeight: '100vh' }}>
      <div className="nes-container is-dark is-rounded" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 className="title" style={{ fontSize: '28px', marginBottom: '10px' }}>
            👾 PORTFOLIO.NES
          </h1>
          <p style={{ color: '#888', fontSize: '12px' }}>A 8-BIT RETRO EXPERIENCE</p>
        </div>

        <div className="nes-container is-rounded" style={{ marginBottom: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 className="title">WELCOME PLAYER 1</h2>
            <p>
              📊 ETL Engineer<br />
              💻 Full Stack Developer<br />
              🚀 Data Pipeline Architect
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>SELECT YOUR SKILL CLASS:</h3>
            <div className="nes-field">
              <label>
                <input type="radio" name="class" value="backend" defaultChecked />
                <span>⚙️ BACKEND ENGINEER</span>
              </label>
            </div>
            <div className="nes-field">
              <label>
                <input type="radio" name="class" value="frontend" />
                <span>🎨 FRONTEND WIZARD</span>
              </label>
            </div>
            <div className="nes-field">
              <label>
                <input type="radio" name="class" value="devops" />
                <span>🔧 DEVOPS MASTER</span>
              </label>
            </div>
          </div>
        </div>

        <div className="nes-container is-dark is-rounded" style={{ marginBottom: '30px' }}>
          <h3>POWER-UPS UNLOCKED:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <label className="nes-checkbox">
              <input type="checkbox" defaultChecked />
              <span>🐍 PYTHON</span>
            </label>
            <label className="nes-checkbox">
              <input type="checkbox" defaultChecked />
              <span>🏗️ APACHE SPARK</span>
            </label>
            <label className="nes-checkbox">
              <input type="checkbox" defaultChecked />
              <span>⚛️ REACT</span>
            </label>
            <label className="nes-checkbox">
              <input type="checkbox" defaultChecked />
              <span>☁️ AWS</span>
            </label>
            <label className="nes-checkbox">
              <input type="checkbox" defaultChecked />
              <span>📦 DOCKER</span>
            </label>
            <label className="nes-checkbox">
              <input type="checkbox" defaultChecked />
              <span>🗄️ SNOWFLAKE</span>
            </label>
          </div>
        </div>

        <div className="nes-container is-dark is-rounded" style={{ marginBottom: '30px' }}>
          <h3>ACTIVE QUESTS:</h3>
          <div className="nes-balloon from-left is-dark" style={{ marginBottom: '20px' }}>
            <p>
              🎯 <strong>MISSION 1:</strong> Build scalable ETL pipelines with real-time data processing
            </p>
          </div>
          <div className="nes-balloon from-left is-dark" style={{ marginBottom: '20px' }}>
            <p>
              🎯 <strong>MISSION 2:</strong> Create responsive web applications with modern frameworks
            </p>
          </div>
          <div className="nes-balloon from-left is-dark">
            <p>
              🎯 <strong>MISSION 3:</strong> Deploy and manage cloud infrastructure with DevOps best practices
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button type="button" className="nes-btn is-primary">
            📁 VIEW PROJECTS
          </button>
          <button type="button" className="nes-btn is-success">
            💬 MESSAGE ME
          </button>
          <button type="button" className="nes-btn is-warning">
            ⬅️ BACK
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '11px', color: '#888' }}>
          <p>TRY VISITING: /retro-demo/page98 TO SEE THE WINDOWS 98 VERSION!</p>
          <p style={{ marginTop: '10px' }}>
            <span style={{ color: '#4CAF50' }}>▮▮▮▮▮▮▮▮▮▮</span> LOADING...
          </p>
        </div>
      </div>
    </div>
  );
}
