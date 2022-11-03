
import { Fragment } from 'react';
import Portifolio from '../Portifolio';
import Img1 from '../../img/projeto-amazon.jpg'
import Img2 from '../../img/projeto-fofoca.jpg'
import Img3 from '../../img/projeto-todo.jpg'
import './style.scss';




const Galeria = () => {

    const galeria = [
        { id: 0, linkProj: "https://nelsonkobayashi.github.io/AvaliacaoFront21jun21/", fotoProj: `${Img1}`, titleProj: "Site Promocional" },
        { id: 1, linkProj: "https://nelsonkobayashi.github.io/Checkpoint1_Frontend2/", fotoProj: `${Img2}`, titleProj: "Projeto Cards" },
        { id: 2, linkProj: "https://nelsonkobayashi.github.io/AvaliacaoFront21jun21/", fotoProj: `${Img3}`, titleProj: "List Todo" },
        { id: 3, linkProj: "https://nelsonkobayashi.github.io/AvaliacaoFront21jun21/", fotoProj: `${Img1}`, titleProj: "Site Promocional" },
        { id: 4, linkProj: "https://nelsonkobayashi.github.io/Checkpoint1_Frontend2/", fotoProj: `${Img2}`, titleProj: "Projeto Cards" },
        { id: 5, linkProj: "https://nelsonkobayashi.github.io/AvaliacaoFront21jun21/", fotoProj: `${Img3}`, titleProj: "List Todo" }
    ]


    return (

        <div id="projetinhos">
            <h3>Projetinhos</h3>
            <div id="grid">
                {galeria.map((projeto) => {
                    return (
                        <section className="galeria">
                            <Fragment key={projeto.id}>

                                <Portifolio linkProj={projeto.linkProj} fotoProj={projeto.fotoProj} titleProj={projeto.titleProj} />



                            </Fragment>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Galeria;

