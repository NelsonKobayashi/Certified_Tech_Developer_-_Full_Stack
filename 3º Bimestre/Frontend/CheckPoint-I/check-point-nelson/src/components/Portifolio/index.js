import './style.scss'

const Portifolio = ({ linkProj, fotoProj, titleProj }) => {
    return (
        <>
            <a className="link" href={linkProj} target="_blank">
                <img className="imagem" src={fotoProj} />
                <h5 className="titulo">{titleProj}</h5>
            </a>
        </>
    )
}

export default Portifolio;