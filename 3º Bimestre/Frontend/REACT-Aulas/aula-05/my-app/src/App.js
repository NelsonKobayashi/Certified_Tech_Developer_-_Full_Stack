
import './App.css';
import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';


const nomeEmpresa = "Empresa de um Homem só";


function App() {
  
  return (
    <>
      
      <Header />
      <Banner> 
        <p>Este é um Banner interativo!!!</p>
        <button>Botão</button>
      </Banner>
      <Footer empresa={nomeEmpresa} />
    </>
  );
}

export default App;
