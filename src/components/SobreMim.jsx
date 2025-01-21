import React from 'react';
import Layout from './Layout.jsx';
import './SobreMim.css';

function SobreMim() {
  return (
    <Layout>
      <section className="about-me-section">
        <div className="my-avatar-section">
        <img className="my-avatar" src="/images/Licia1.jpg" alt="Licia's photo" />
        Eu sou uma desenvolvedora web full stack versátil, habilidosa em combinar criatividade com resolução de problemas para criar projetos intuitivos e amigáveis ao usuário. Com uma atenção meticulosa aos detalhes e um compromisso com a excelência, destaco-me em lidar com projetos de qualquer complexidade. Minha experiência diversificada em Fisioterapia e Estética enriquece minha perspectiva, permitindo-me trazer uma abordagem única e centrada no ser humano para cada projeto que desenvolvo. Estou constantemente aprendendo e me mantendo atualizada com as últimas tecnologias para aprimorar minhas habilidades.
        </div>
        <p className="about-me-description">
         
        </p>
      </section>
    </Layout>
  );
}

export default SobreMim;