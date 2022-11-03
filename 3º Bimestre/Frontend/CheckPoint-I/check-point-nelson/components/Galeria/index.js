import Portifolio from '../Portifolio';
import Img1 from '../../img/projeto-amazon.jpg'
import Img2 from '../../img/projeto-fofoca.jpg'
import Img3 from '../../img/projeto-todo.jpg'


import './style.css';

const Galeria = () => {
    return (
        <section id="galeria">
            <h3>Projetinhos</h3>
            <div className="grid">
                <Portifolio linkProj="https://nelsonkobayashi.github.io/AvaliacaoFront21jun21/" fotoProj={Img1} titleProj="Projeto Site Promocional" />
                <Portifolio linkProj="https://nelsonkobayashi.github.io/Checkpoint1_Frontend2/" fotoProj={Img2} titleProj="Projeto Cards" />
                <Portifolio linkProj="https://nelsonkobayashi.github.io/Checkpoint2_Frontend2/" fotoProj={Img3} titleProj="Projeto List Todo" />
                <Portifolio linkProj="https://nelsonkobayashi.github.io/AvaliacaoFront21jun21/" fotoProj={Img1} titleProj="Projeto Site Promocional" />
                <Portifolio linkProj="https://nelsonkobayashi.github.io/Checkpoint1_Frontend2/" fotoProj={Img2} titleProj="Projeto Cards" />
                <Portifolio linkProj="https://nelsonkobayashi.github.io/Checkpoint2_Frontend2/" fotoProj={Img3} titleProj="Projeto List Todo" />
            </div>
        </section>
    )
}

export default Galeria;