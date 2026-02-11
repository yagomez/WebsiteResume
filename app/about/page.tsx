import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Skills, type Skill } from '@/components/Skills';

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
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
          <h1 style={{ fontSize: '28px', color: '#00ff00', textShadow: '3px 3px 0 #ff00ff', marginBottom: '30px' }}>
            ABOUT ME 👾
          </h1>

          <div style={{ marginBottom: '30px' }}>
            <div className="nes-container is-dark is-rounded" style={{ padding: '20px', marginBottom: '15px' }}>
              <p style={{ fontSize: '12px', color: '#e0e0e0', lineHeight: 1.8, marginBottom: '15px' }}>
                I&apos;m a passionate software engineer with a focus on data engineering and ETL pipelines. With expertise in building scalable data systems, I help organizations transform raw data into actionable insights.
              </p>

              <p style={{ fontSize: '12px', color: '#e0e0e0', lineHeight: 1.8 }}>
                Throughout my career, I&apos;ve worked on projects ranging from real-time data streaming to complex warehouse transformations. I&apos;m particularly interested in the intersection of data engineering and full-stack development.
              </p>
            </div>

            <div className="nes-container is-dark is-rounded" style={{ padding: '20px', marginBottom: '15px', borderLeft: '4px solid #00ffff' }}>
              <h2 style={{ fontSize: '16px', color: '#00ffff', textShadow: '2px 2px 0 #212121', marginBottom: '10px' }}>
                ▶ MY JOURNEY
              </h2>

              <p style={{ fontSize: '12px', color: '#e0e0e0', lineHeight: 1.8 }}>
                Started with a passion for building things, I quickly gravitated towards the data side of software engineering. The ability to design systems that process millions of records efficiently is what drives me to keep learning and improving.
              </p>
            </div>

            <div className="nes-container is-dark is-rounded" style={{ padding: '20px', borderLeft: '4px solid #ffff00' }}>
              <h2 style={{ fontSize: '16px', color: '#ffff00', textShadow: '2px 2px 0 #212121', marginBottom: '10px' }}>
                ▶ WHAT I&apos;M CURRENTLY DOING
              </h2>

              <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '12px' }}>
                {[
                  'Building ETL pipelines with Apache Airflow and Spark',
                  'Designing scalable data architectures on cloud platforms',
                  'Contributing to open-source data engineering projects',
                  'Learning about emerging data technologies like dbt and Kafka'
                ].map((item, idx) => (
                  <li key={idx} style={{ color: '#e0e0e0', marginBottom: '6px', listStyleType: 'none' }}>
                    <span style={{ color: '#ffff00', marginRight: '8px' }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Skills skills={skills} />

          <section style={{ marginTop: '30px', paddingTop: '30px', borderTop: '3px solid #ff00ff' }}>
            <h2 style={{ fontSize: '18px', color: '#ff00ff', textShadow: '2px 2px 0 #212121', marginBottom: '20px' }}>
              ▶ EDUCATION & CERTIFICATIONS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="nes-container is-dark is-rounded" style={{ paddingLeft: '15px', borderLeft: '4px solid #00ff00' }}>
                <h3 style={{ color: '#00ff00', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
                  Bachelor of Science in Computer Science
                </h3>
                <p style={{ color: '#a0a0a0', fontSize: '11px' }}>Your University • Graduated 20XX</p>
              </div>
              <div className="nes-container is-dark is-rounded" style={{ paddingLeft: '15px', borderLeft: '4px solid #00ffff' }}>
                <h3 style={{ color: '#00ffff', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
                  AWS Certified Solutions Architect
                </h3>
                <p style={{ color: '#a0a0a0', fontSize: '11px' }}>AWS • 20XX</p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
