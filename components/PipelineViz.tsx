'use client';

interface PipelineStage {
  name: string;
  description: string;
  icon?: string;
}

interface PipelineVizProps {
  stages?: PipelineStage[];
  title?: string;
}

const defaultStages: PipelineStage[] = [
  {
    name: 'Extract',
    description: 'Data from multiple sources',
    icon: '📥',
  },
  {
    name: 'Transform',
    description: 'Clean, validate, and structure',
    icon: '⚙️',
  },
  {
    name: 'Load',
    description: 'Store in data warehouse',
    icon: '💾',
  },
  {
    name: 'Analyze',
    description: 'Generate insights and reports',
    icon: '📊',
  },
];

export function PipelineViz({ stages = defaultStages, title = 'ETL Pipeline' }: PipelineVizProps) {
  const colors = ['#00ff00', '#00ffff', '#ffff00', '#ff00ff'];
  
  return (
    <section style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <h2 style={{ fontSize: '18px', color: '#00ff00', textShadow: '3px 3px 0 #ff00ff', marginBottom: '20px', textAlign: 'center' }}>
        ▶ {title.toUpperCase()}
      </h2>
      
      <div className="hidden lg:block">
        {/* Desktop: Horizontal Pipeline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          {stages.map((stage, index) => (
            <div key={stage.name} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              {/* Stage Card */}
              <div 
                className="nes-container is-dark is-rounded"
                style={{ 
                  flex: 1,
                  padding: '15px',
                  border: `3px solid ${colors[index % 4]}`
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{stage.icon}</div>
                <h3 style={{ fontSize: '14px', color: colors[index % 4], fontWeight: 'bold', marginBottom: '5px' }}>
                  {stage.name}
                </h3>
                <p style={{ fontSize: '11px', color: '#e0e0e0' }}>{stage.description}</p>
              </div>
              
              {/* Arrow */}
              {index < stages.length - 1 && (
                <div style={{ paddingLeft: '12px', paddingRight: '12px', fontSize: '20px', color: colors[index % 4] }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile: Vertical Pipeline */}
      <div className="lg:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {stages.map((stage, index) => (
          <div key={stage.name}>
            <div 
              className="nes-container is-dark is-rounded"
              style={{ 
                padding: '15px',
                border: `3px solid ${colors[index % 4]}`
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{stage.icon}</div>
              <h3 style={{ fontSize: '14px', color: colors[index % 4], fontWeight: 'bold', marginBottom: '5px' }}>
                {stage.name}
              </h3>
              <p style={{ fontSize: '11px', color: '#e0e0e0' }}>{stage.description}</p>
            </div>
            
            {/* Arrow */}
            {index < stages.length - 1 && (
              <div style={{ textAlign: 'center', paddingTop: '8px', paddingBottom: '8px', fontSize: '20px', color: colors[index % 4] }}>
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
