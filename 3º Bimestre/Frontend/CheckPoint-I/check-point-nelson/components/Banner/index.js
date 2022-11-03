import "./style.css";


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
        </div>
      </div>
    </section>
  )
}




export default Banner;
