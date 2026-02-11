import Image from 'next/image';

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

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="nes-container is-dark is-rounded" style={{ 
      padding: '15px', 
      marginBottom: '15px',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {project.image && (
        <div style={{ position: 'relative', width: '100%', height: '150px', marginBottom: '10px' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="pixelated"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      
      <h3 style={{ color: '#00ff00', textShadow: '2px 2px 0 #ff00ff', marginBottom: '8px', fontSize: '14px' }}>
        🎮 {project.title}
      </h3>
      
      <p style={{ fontSize: '11px', lineHeight: '1.5', marginBottom: '10px', color: '#e0e0e0', flex: 1 }}>
        {project.description}
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="nes-badge"
            style={{ 
              fontSize: '10px',
              backgroundColor: '#ff00ff',
              color: '#000',
              padding: '3px 6px',
              border: '2px solid #ff00ff'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn"
            style={{ fontSize: '10px', flex: 1 }}
          >
            CODE
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-primary"
            style={{ fontSize: '10px', flex: 1 }}
          >
            DEMO
          </a>
        )}
      </div>
    </div>
  );
}
