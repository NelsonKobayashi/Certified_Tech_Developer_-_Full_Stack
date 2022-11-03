import "./style.scss";


const Banner = ({ imagem }) => {
  return (
    <section >
      <div id="banner" className="d-grid align-items-center">
        <div className="img-dev">
          <img src={imagem} />
        </div>
        <div className="banner-text">
          <h2>Nelson Kobayashi</h2>
          <p>
            Desenvolvedor Fullstack Jr.
          </p>
          <p>
            Profissional engajado em fazer a diferença, ótimo relacionamento, comunicativo e sempre pronto para somar em qualquer tipo de atividade, tomando iniciativa e propondo soluções.
          </p>
          <p>
            Desde sempre apaixonado pela tecnologia e focado para conseguir a partir de agora o tão sonhado trabalho na área de TI.
          </p>
        </div>
      </div>
    </section>
  )
}




export default Banner;
