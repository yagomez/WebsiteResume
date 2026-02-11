export interface Skill {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'SQL', 'Java', 'JavaScript'],
  },
  {
    category: 'Data & ETL',
    items: ['Apache Airflow', 'Spark', 'Kafka', 'dbt', 'Snowflake'],
  },
  {
    category: 'Web',
    items: ['React', 'Next.js', 'Node.js', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
  },
];

export function Skills({ skills = defaultSkills }: SkillsProps) {
  const colors = ['#00ff00', '#00ffff', '#ffff00', '#ff00ff'];
  
  return (
    <section style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <h2 style={{ fontSize: '18px', color: '#00ff00', textShadow: '3px 3px 0 #ff00ff', marginBottom: '15px' }}>
        ▶ SKILLS & EXPERTISE
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        {skills.map((skillGroup, idx) => (
          <div
            key={skillGroup.category}
            className="nes-container is-dark is-rounded"
            style={{ padding: '12px' }}
          >
            <h3 style={{ 
              color: colors[idx % 4],
              textShadow: '2px 2px 0 #212121',
              marginBottom: '8px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {skillGroup.category}
            </h3>
            <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '10px' }}>
              {skillGroup.items.map((item) => (
                <li
                  key={item}
                  style={{
                    color: '#e0e0e0',
                    marginBottom: '4px',
                    listStyleType: 'none'
                  }}
                >
                  <span style={{ color: colors[idx % 4], marginRight: '5px' }}>{'▸'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

