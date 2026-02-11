import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard, type Project } from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'View my featured projects and work',
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Real-Time Data Pipeline',
    description: 'Built a real-time ETL pipeline using Apache Kafka and Spark that processes millions of events daily for a financial services company.',
    tags: ['Apache Spark', 'Kafka', 'Python', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '2',
    title: 'Data Warehouse Migration',
    description: 'Designed and implemented a complete migration from legacy databases to Snowflake, optimizing queries and reducing costs by 40%.',
    tags: ['Snowflake', 'SQL', 'dbt', 'Data Engineering'],
    github: 'https://github.com',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Developed a full-stack analytics dashboard using Next.js and React, connecting to data lakes and displaying real-time metrics.',
    tags: ['Next.js', 'React', 'TypeScript', 'API Design'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '4',
    title: 'Airflow Orchestration Framework',
    description: 'Created a reusable Apache Airflow framework for orchestrating complex data workflows with monitoring and alerting capabilities.',
    tags: ['Apache Airflow', 'Python', 'DevOps', 'Monitoring'],
    github: 'https://github.com',
  },
  {
    id: '5',
    title: 'Data Quality Validation Tool',
    description: 'Built an automated data quality validation system that monitors data pipelines and alerts on anomalies in real-time.',
    tags: ['Python', 'Great Expectations', 'Monitoring', 'Testing'],
    github: 'https://github.com',
  },
  {
    id: '6',
    title: 'Open Source Contribution',
    description: 'Active contributor to Apache projects with focus on ETL optimization and performance improvements.',
    tags: ['Open Source', 'Apache', 'Python', 'Community'],
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ marginBottom: '30px' }}>
            <h1 style={{ fontSize: '28px', color: '#00ff00', textShadow: '3px 3px 0 #ff00ff', marginBottom: '15px' }}>
              PROJECTS 🎮
            </h1>
            <p style={{ fontSize: '14px', color: '#e0e0e0', lineHeight: 1.6 }}>
              A showcase of my recent work in data engineering, ETL, and full-stack development.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
