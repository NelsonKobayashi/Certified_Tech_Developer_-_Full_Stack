import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Contatos from './components/Contatos';
import Img from '../src/img/img.png';
import Ico1 from '../src/img/icones/html5.png';
import Ico2 from '../src/img/icones/css3.png';
import Ico3 from '../src/img/icones/js.png';
import Ico4 from '../src/img/icones/java.png';
import Ico5 from '../src/img/icones/mysql.png';
import Ico6 from '../src/img/icones/git.png';
import Ico7 from '../src/img/icones/robot.png'
import Ico8 from '../src/img/icones/linkedin.png';
import Ico9 from '../src/img/icones/github.png';
import Ico10 from '../src/img/icones/email.png';


import './App.scss';

function App() {

  const nome = 'Nelson Kobayashi'

  return (
    <>
      <Header empresa={nome} />
      <main>
        <Banner imagem={Img} />

        <h3> Skills </h3>
        <div className="icones">
          <Skill icone={Ico1} />
          <Skill icone={Ico2} />
          <Skill icone={Ico3} />
          <Skill icone={Ico4} />
          <Skill icone={Ico5} />
          <Skill icone={Ico6} />
          <Skill icone={Ico7} />
        </div>
        <Galeria />
        <div id="contato" className="contatos">
          <Contatos linkProj="https://www.linkedin.com/in/nelsonkobayashi/" icone={Ico8} />
          <Contatos linkProj="https://github.com/NelsonKobayashi" icone={Ico9} />
          <Contatos linkProj="mailto:koba.nelson@gmail.com" icone={Ico10} />

        </div>
      </main>
      <Footer empresa={nome} />

    </>
  );
}

export default App;

