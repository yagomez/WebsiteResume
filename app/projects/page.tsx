import Link from 'next/link';
import { getAssetPath } from '@/utils/assetPath';
import { ProjectCard, type Project } from '@/components/ProjectCard';
import { NostalgiaNavLink } from '@/components/NostalgiaNavLink';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'View my featured projects and work',
};

// Live job-tracker deployment (Vercel)
const JOB_TRACKER_DEMO_URL = 'https://job-tracker-five-rho.vercel.app/demo';

const projects: Project[] = [
  {
    id: 'job-tracker',
    title: 'Job Tracker',
    description: 'Full-stack app to track job applications with calendar view, analytics, search, and optional AI insights. Next.js, TypeScript, SQLite, Tailwind. Demo mode uses mock data for portfolio sharing.',
    tags: ['Next.js', 'React', 'TypeScript', 'SQLite', 'Tailwind'],
    github: 'https://github.com/yagomez/JobTracker',
    demo: JOB_TRACKER_DEMO_URL,
  },
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

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none' as const,
  fontSize: '10px',
  fontWeight: 'normal' as const,
  cursor: 'pointer' as const,
  padding: '2px 4px',
};

export default function Projects() {
  return (
    <main style={{ padding: 0, minHeight: '100vh' }}>
      {/* Same MySpace-Style Top Navigation as home */}
      <div style={{
        width: '100%',
        background: '#000',
        padding: '6px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        boxSizing: 'border-box',
        minHeight: '28px',
      }}>
        <Link href="/" style={{ display: 'flex' }}>
          <img src={getAssetPath('/images/ysicon.png')} alt="Logo" style={{ height: '120px', width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flex: 1 }}>
          <Link href="/" style={navLinkStyle}>Home</Link>
          <NostalgiaNavLink label="Profile" style={navLinkStyle} />
          <NostalgiaNavLink label="Friends" style={navLinkStyle} />
          <NostalgiaNavLink label="Music" style={navLinkStyle} />
          <NostalgiaNavLink label="Photos" style={navLinkStyle} />
          <NostalgiaNavLink label="Videos" style={navLinkStyle} />
          <Link href="/blog" style={navLinkStyle}>Blog</Link>
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <input type="text" placeholder="Search" style={{ padding: '3px 4px', fontSize: '10px', border: '1px solid #666', width: '120px', background: '#fff', color: '#000' }} />
          <button style={{ padding: '3px 8px', background: '#ffcc00', color: '#000', border: '1px solid #999', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Go</button>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto', alignItems: 'center' }}>
          <NostalgiaNavLink label="Sign Out" style={navLinkStyle} />
          <span style={{ color: '#666', fontSize: '10px' }}>|</span>
          <NostalgiaNavLink label="Help" style={navLinkStyle} />
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Projects section - same table style as home page */}
        <div style={{
          border: '2px solid',
          borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
          background: '#c0c0c0',
          marginBottom: '20px',
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #000080, #1084d7)',
            color: 'white',
            padding: '2px 2px',
            fontWeight: 'bold',
            fontSize: '11px',
          }}>
            Featured Projects
          </div>
          <div style={{ padding: '12px', background: '#c0c0c0', fontSize: '11px', color: '#000' }}>
            <p style={{ margin: '0 0 12px 0', lineHeight: 1.5 }}>
              A showcase of my recent work in data engineering, ETL, and full-stack development.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation block - same as home */}
        <div style={{
          border: '2px solid',
          borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
          background: '#c0c0c0',
          marginTop: '20px',
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #000080, #1084d7)',
            color: 'white',
            padding: '2px 2px',
            fontWeight: 'bold',
            fontSize: '11px',
          }}>
            Navigation
          </div>
          <div style={{ padding: '8px', background: '#c0c0c0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Link href="/" style={{
              padding: '4px 8px',
              background: '#c0c0c0',
              border: '2px solid',
              borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
              textDecoration: 'none',
              color: '#000080',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              cursor: 'pointer',
            }}>Home</Link>
            <Link href="/projects" style={{
              padding: '4px 8px',
              background: '#c0c0c0',
              border: '2px solid',
              borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
              textDecoration: 'none',
              color: '#000080',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              cursor: 'pointer',
            }}>Projects</Link>
            <Link href="/about" style={{
              padding: '4px 8px',
              background: '#c0c0c0',
              border: '2px solid',
              borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
              textDecoration: 'none',
              color: '#000080',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              cursor: 'pointer',
            }}>About Me</Link>
            <Link href="/blog" style={{
              padding: '4px 8px',
              background: '#c0c0c0',
              border: '2px solid',
              borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
              textDecoration: 'none',
              color: '#000080',
              fontSize: '11px',
              fontWeight: 'bold',
              textAlign: 'center',
              cursor: 'pointer',
            }}>Blog</Link>
          </div>
        </div>
      </div>

      {/* Same bottom nav as home */}
      <div style={{
        width: '100%',
        background: '#000',
        padding: '6px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        boxSizing: 'border-box',
        minHeight: '28px',
        marginTop: '20px',
      }}>
        <img src={getAssetPath('/images/ysicon.png')} alt="Logo" style={{ height: '120px', width: 'auto' }} />
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <Link href="/" style={navLinkStyle}>Home</Link>
          <NostalgiaNavLink label="Profile" style={navLinkStyle} />
        </div>
      </div>
    </main>
  );
}
