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
  return (
    <section style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div
        style={{
          border: '2px solid',
          borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
          background: '#c0c0c0',
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
          Skills &amp; Expertise
        </div>
        <div
          style={{
            padding: '12px',
            background: '#c0c0c0',
            fontFamily: "'MS Sans Serif', Arial, sans-serif",
            fontSize: '11px',
            color: '#000',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '10px',
            }}
          >
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            style={{
              border: '1px solid #808080',
              background: '#e0e0e0',
              padding: '8px 10px',
              fontFamily: "'MS Sans Serif', Arial, sans-serif",
            }}
          >
            <div
              style={{
                color: '#000080',
                marginBottom: '8px',
                fontSize: '11px',
                fontWeight: 'bold',
                fontFamily: "'MS Sans Serif', Arial, sans-serif",
                textShadow: 'none',
              }}
            >
              {skillGroup.category}
            </div>
            <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '11px', color: '#000', fontFamily: "'MS Sans Serif', Arial, sans-serif" }}>
              {skillGroup.items.map((item) => (
                <li
                  key={item}
                  style={{
                    color: '#000',
                    marginBottom: '4px',
                    listStyleType: 'disc',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
}

