'use client';

export default function Demo98() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#c0c0c0', minHeight: '100vh', fontFamily: 'MS Sans Serif' }}>
      <div className="window" style={{ width: '600px', margin: '20px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">Portfolio.exe - Windows 98</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <h1 style={{ marginTop: 0, fontSize: '16px' }}>👨‍💻 Portfolio Application</h1>
          <p>Welcome to the retro Windows 98 portfolio experience!</p>

          <fieldset>
            <legend>Developer Info</legend>
            <div className="field-row-stacked">
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" value="Your Name" readOnly />
            </div>
            <div className="field-row-stacked">
              <label htmlFor="role">Role:</label>
              <input
                id="role"
                type="text"
                value="ETL Engineer & Full Stack Developer"
                readOnly
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Skills</legend>
            <div className="field-row">
              <input id="check1" type="checkbox" defaultChecked />
              <label htmlFor="check1">Python & SQL</label>
            </div>
            <div className="field-row">
              <input id="check2" type="checkbox" defaultChecked />
              <label htmlFor="check2">Apache Airflow</label>
            </div>
            <div className="field-row">
              <input id="check3" type="checkbox" defaultChecked />
              <label htmlFor="check3">React & Next.js</label>
            </div>
            <div className="field-row">
              <input id="check4" type="checkbox" defaultChecked />
              <label htmlFor="check4">Cloud & DevOps</label>
            </div>
          </fieldset>

          <div style={{ marginTop: '20px' }}>
            <button>📁 View Projects</button>
            <button style={{ marginLeft: '10px' }}>📧 Contact</button>
            <button style={{ marginLeft: '10px' }}>❌ Exit</button>
          </div>
        </div>
        <div className="status-bar">
          <div className="status-bar-field">Ready</div>
          <div className="status-bar-field">100%</div>
        </div>
      </div>

      <div className="window" style={{ width: '600px', margin: '20px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">Recent Projects</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="sunken-panel" style={{ padding: '10px' }}>
            <ul className="tree-view">
              <li>
                📊 Data Pipeline Project
                <ul>
                  <li>✅ Apache Spark</li>
                  <li>✅ Kafka Streaming</li>
                  <li>✅ Snowflake Warehouse</li>
                </ul>
              </li>
              <li>
                🎨 Web Applications
                <ul>
                  <li>✅ React Dashboard</li>
                  <li>✅ Next.js Portfolio</li>
                  <li>✅ REST APIs</li>
                </ul>
              </li>
              <li>
                🔧 DevOps & Infrastructure
                <ul>
                  <li>✅ Docker Containerization</li>
                  <li>✅ AWS Cloud</li>
                  <li>✅ CI/CD Pipelines</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#000080' }}>
        <p>Try visiting: /retro-demo/page-nes to see the NES.css version!</p>
      </div>
    </div>
  );
}
