import Layout from './Layout.jsx';
import Project from './Project.jsx';
import './Portifolio.css';

function Portifolio() {
  return (
    <Layout>
      <section className="portfolio-section">
        <Project />
      </section>
    </Layout>
  );
}

export default Portifolio;