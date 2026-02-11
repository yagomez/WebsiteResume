import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
          <h1 style={{ fontSize: '28px', color: '#00ff00', textShadow: '3px 3px 0 #ff00ff', marginBottom: '15px' }}>
            BLOG 📝
          </h1>
          <p style={{ fontSize: '14px', color: '#e0e0e0', marginBottom: '30px', lineHeight: 1.6 }}>
            Articles and insights about data engineering, ETL, and software development.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="nes-container is-dark is-rounded"
                style={{ padding: '20px', borderLeft: `4px solid ${['#00ff00', '#00ffff', '#ff00ff'][idx % 3]}` }}
              >
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#a0a0a0' }}>
                    📅 {article.date}
                  </span>
                </div>
                <h2 style={{ 
                  fontSize: '16px', 
                  color: ['#00ff00', '#00ffff', '#ff00ff'][idx % 3], 
                  textShadow: '2px 2px 0 #212121',
                  marginBottom: '10px',
                  fontWeight: 'bold'
                }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: '12px', color: '#e0e0e0', marginBottom: '12px', lineHeight: 1.6 }}>
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="nes-btn is-primary"
                  style={{ fontSize: '10px' }}
                >
                  READ MORE →
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
