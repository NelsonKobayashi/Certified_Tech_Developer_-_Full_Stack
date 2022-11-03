import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

import '../styles/App.css';

function App() {

  const alunos = [
    {firstName: 'Guimarães',
     lastName: 'Reginaldo',
     naLista: true,
     tarefa: 'batata-frita'},
    {firstName: 'Doug',
     lastName: 'Funny',
     naLista: true,
     tarefa: 'batata-assada'},
    {firstName: 'Jardel',
     lastName: 'Lorde',
     naLista: true,
     tarefa: 'batata-cozida'},
    {firstName: 'Ruanito',
     lastName: 'Araújo',
     naLista: true,
     tarefa: 'batata-smile'},
    {firstName: 'Lucas',
     lastName: 'Silva e Silva',
     naLista: true,
     tarefa: 'batata-purê'},
    {firstName: 'Nerçu',
     lastName: 'da Capitinga',
     naLista: false,
     tarefa: 'batata-doce'}
  ];

 
    return (
      <>
        
      {alunos.map((aluno, index) => {
        return (
          <>
            <h3>Convidado:</h3>
            <ClassComponent key={index} nome={aluno.firstName} estaNaLista={aluno.naLista} />
            <h3>Tarefas:</h3>
            <FunctionComponent key={index} nome={aluno.firstName} tarefa={aluno.tarefa} />
          </>
        )}
      )}
      </>
    );
  
  
}

export default App;
