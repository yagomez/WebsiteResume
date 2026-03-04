import { Skills, type Skill } from '@/components/Skills';
import { PortfolioChrome } from '@/components/PortfolioChrome';

export const metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about my background and expertise',
};

const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'SQL', 'Java', 'JavaScript', 'Bash'],
  },
  {
    category: 'Data & ETL',
    items: ['Apache Airflow', 'Apache Spark', 'Kafka', 'dbt', 'Snowflake', 'BigQuery'],
  },
  {
    category: 'Web',
    items: ['React', 'Next.js', 'Node.js', 'REST APIs', 'GraphQL', 'Tailwind CSS'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions'],
  },
];

export default function About() {
  return (
    <PortfolioChrome>
      <div
        style={{
          border: '2px solid',
          borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
          background: '#c0c0c0',
          marginBottom: '20px',
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
          About Me
        </div>
        <div style={{ padding: '12px', background: '#c0c0c0', fontSize: '11px', color: '#000' }}>
          <p style={{ margin: '0 0 12px 0', lineHeight: 1.6 }}>
            I&apos;m a passionate software engineer with a focus on data engineering and ETL pipelines. I love
            designing systems that reliably move, transform, and surface data so that people can make better
            decisions.
          </p>
          <p style={{ margin: '0 0 12px 0', lineHeight: 1.6 }}>
            My experience spans real-time streaming, batch processing, and full-stack development. I enjoy working
            close to the data model while still caring deeply about the user experience of the tools and dashboards
            that sit on top.
          </p>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            This portfolio mixes that practical, data-first mindset with a playful nod to the early web era that got
            me into coding in the first place.
          </p>
        </div>
      </div>

      <Skills skills={skills} />

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
          Education & Certifications
        </div>
        <div style={{ padding: '12px', background: '#c0c0c0', fontSize: '11px', color: '#000' }}>
          <ul style={{ margin: 0, paddingLeft: '18px' }}>
            <li style={{ marginBottom: '6px' }}>
              <strong>Bachelor of Science in Computer Science</strong> – Your University
            </li>
            <li>
              <strong>AWS Certified Solutions Architect</strong> – AWS
            </li>
          </ul>
        </div>
      </div>
    </PortfolioChrome>
  );
}
