import { Skills, type Skill } from '@/components/Skills';
import { PortfolioChrome } from '@/components/PortfolioChrome';

export const metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about my background and expertise',
};

const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'SQL', 'C#', 'JavaScript', 'Bash'],
  },
  {
    category: 'Data & ETL',
    items: ['Azure SQL', 'dbt', 'Snowflake', 'Apache Airflow', 'Apache Spark', 'Kafka', 'Azure Data Factory', 'Event Hub'],
  },
  {
    category: 'Web & APIs',
    items: ['React', 'Next.js', 'REST APIs', 'ASP.NET', 'Node.js'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'Docker', 'Terraform', 'CI/CD', 'GitHub Actions'],
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
            I am a Staff-level Data Engineer and Data Platform Architect with ownership of production systems at scale. My work centers on schema governance, platform reliability, and architectural decision-making—not just implementation. I design and operate data infrastructure that serves downstream services and users with clear accountability for availability, performance, and long-term maintainability.
          </p>
          <p style={{ margin: '0 0 12px 0', lineHeight: 1.6 }}>
            I focus on distributed systems, warehouse modeling, ingestion pipelines, and cross-team technical authority. This portfolio reflects both that systems-oriented background and a fondness for the early web aesthetic that got me into building software.
          </p>
        </div>
      </div>

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
          Experience
        </div>
        <div style={{ padding: '12px', background: '#c0c0c0', fontSize: '11px', color: '#000' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Microsoft (Full-Time) — Data Platform / Backend</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px' }}>
            <li style={{ marginBottom: '4px' }}>Own a 4TB Azure SQL production database supporting 300M–1.5B rows and powering 10–15 downstream services; serve as required schema reviewer and governance authority.</li>
            <li style={{ marginBottom: '4px' }}>Schema governance and change control; performance tuning (indexing, partitioning); high availability and backup strategy.</li>
            <li style={{ marginBottom: '4px' }}>Legacy modernization: moved a 20+ year system to DacPac-based CI/CD. Ingestion pipeline design with Azure Data Factory and Data Lake; event-driven updates via Azure Event Hub.</li>
            <li style={{ marginBottom: '4px' }}>Production incident resolution. Built and maintained hundreds of ASP.NET API endpoints supporting millions of monthly Microsoft Learn users with 0.48–0.68s average latency.</li>
            <li style={{ marginBottom: '4px' }}>Implemented RBAC and least-privilege security. Cross-team platform ownership and long-term system reliability; architectural decision-making authority.</li>
          </ul>

          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Data Warehouse &amp; dbt (Snowflake)</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px' }}>
            <li style={{ marginBottom: '4px' }}>Analytics platform design with bronze/silver/gold transformation modeling; incremental models and snapshots.</li>
            <li style={{ marginBottom: '4px' }}>Automated testing and data quality validation; reusable macros and documentation generation.</li>
          </ul>

          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Luxury Marketplace Data Platform</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px' }}>
            <li style={{ marginBottom: '4px' }}>Modular, scalable data system: multi-source ingestion (scrapers and APIs), normalization, validation, and ETL.</li>
            <li style={{ marginBottom: '4px' }}>Relational schema design; fuzzy deduplication logic; time-series price tracking. Algorithm layer for price variance and trend analysis exposed via APIs.</li>
          </ul>

          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>PersonalGPT Platform</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px' }}>
            <li style={{ marginBottom: '4px' }}>Full-stack AI infrastructure: PostgreSQL, pgvector, Redis; vector search and semantic retrieval.</li>
            <li style={{ marginBottom: '4px' }}>Secure authentication (OAuth + JWT); privacy-first design; containerization and CI/CD.</li>
          </ul>

          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Job Tracker Application</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px' }}>
            <li style={{ marginBottom: '4px' }}>Full-stack engineering: RESTful API design, relational modeling, structured schema, CRUD endpoints, deployment-ready workflow. Optional AI-powered analytics for application insights.</li>
          </ul>

          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>T-Mobile — Cybersecurity Internship</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px' }}>
            <li style={{ marginBottom: '4px' }}>Security tooling development; web app development; Unity-based gamified security education platform. Access control auditing and vulnerability awareness.</li>
          </ul>

          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Microsoft — iOS Internship</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px' }}>
            <li style={{ marginBottom: '4px' }}>Ethnographic research and product ideation for a Seattle civic problem; iOS app development for parking availability reporting. Foundation in product thinking and user-centered design.</li>
          </ul>
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
          Education &amp; Certifications
        </div>
        <div style={{ padding: '12px', background: '#c0c0c0', fontSize: '11px', color: '#000' }}>
          <ul style={{ margin: 0, paddingLeft: '18px' }}>
            <li>
              <strong>Bachelors of Science in Computer Science, Interactive Media Design</strong> – University of Washington
            </li>
          </ul>
        </div>
      </div>
    </PortfolioChrome>
  );
}
