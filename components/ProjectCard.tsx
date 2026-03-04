export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

const cardBorder = { border: '2px solid', borderColor: '#dfdfdf #808080 #808080 #dfdfdf' };
const btnStyle = {
  padding: '4px 8px',
  background: '#c0c0c0',
  border: '2px solid',
  borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
  textDecoration: 'none' as const,
  color: '#000080',
  fontSize: '10px',
  fontWeight: 'bold' as const,
  cursor: 'pointer' as const,
  flex: 1,
  textAlign: 'center' as const,
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      style={{
        ...cardBorder,
        background: '#c0c0c0',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(90deg, #000080, #1084d7)',
          color: 'white',
          padding: '4px 6px',
          fontWeight: 'bold',
          fontSize: '11px',
          margin: '-12px -12px 10px -12px',
        }}
      >
        🔹 {project.title}
      </div>
      <p style={{ fontSize: '11px', lineHeight: 1.5, marginBottom: '10px', color: '#000', flex: 1 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '9px',
              backgroundColor: '#e0e0e0',
              color: '#000',
              padding: '2px 5px',
              border: '1px solid #808080',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={btnStyle}>
            CODE
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={btnStyle}>
            DEMO
          </a>
        )}
      </div>
    </div>
  );
}
