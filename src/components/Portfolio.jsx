import Layout from './Layout.jsx';
import Project from './Project.jsx';
import './Portfolio.css';

function Portfolio() {
  return (
    <Layout>
      <section className="portfolio-section">
        <Project />
      </section>
    </Layout>
  );
}

export default Portfolio;