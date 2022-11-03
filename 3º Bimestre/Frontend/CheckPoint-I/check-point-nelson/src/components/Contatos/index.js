import './style.scss';

const Contatos = ({ icone, linkProj }) => {


    return (
        <div id="contatos">
            <a href={linkProj} target="blank">
                <img src={icone} />
            </a>
        </div>
    )
}

export default Contatos;