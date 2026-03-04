import Link from 'next/link';
import { PortfolioChrome } from '@/components/PortfolioChrome';

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Articles about data engineering, ETL, and web development',
};

export default function BlogIndex() {
  const articles = [
    {
      date: 'February 10, 2026',
      title: 'Getting Started with Apache Airflow',
      description: 'A comprehensive guide to setting up and managing data pipelines with Apache Airflow, including best practices and common pitfalls...',
      link: '/blog/getting-started-with-airflow',
    },
    {
      date: 'January 28, 2026',
      title: 'Optimizing Your Spark Jobs',
      description: 'Tips and tricks for improving Spark job performance, from partitioning strategies to memory optimization...',
      link: '/blog/optimizing-spark-jobs',
    },
    {
      date: 'January 15, 2026',
      title: 'Building Modern Data Architectures',
      description: 'Exploring the components of a modern data stack and how to architect systems for scalability and maintainability...',
      link: '/blog/modern-data-architectures',
    },
  ];

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
          Blog
        </div>
        <div style={{ padding: '12px', background: '#c0c0c0', fontSize: '11px', color: '#000' }}>
          <p style={{ margin: '0 0 12px 0', lineHeight: 1.6 }}>
            Short notes and longer-form write-ups about data engineering, ETL, and software craftsmanship.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {articles.map((article) => (
              <div
                key={article.title}
                style={{
                  border: '1px solid #808080',
                  background: '#e0e0e0',
                  padding: '8px 10px',
                }}
              >
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ fontSize: '10px', color: '#555' }}>📅 {article.date}</span>
                </div>
                <h2
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    margin: '0 0 4px 0',
                    color: '#000080',
                  }}
                >
                  {article.title}
                </h2>
                <p style={{ fontSize: '11px', margin: '0 0 6px 0', lineHeight: 1.4 }}>
                  {article.description}
                </p>
                <Link
                  href={article.link}
                  style={{
                    ...{
                      padding: '4px 8px',
                      background: '#c0c0c0',
                      border: '2px solid',
                      borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                      textDecoration: 'none',
                      color: '#000080',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    },
                  }}
                >
                  READ MORE →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioChrome>
  );
}
