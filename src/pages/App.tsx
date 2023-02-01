import {useState} from 'react';
import Forms from '../Components/Form';
import List from '../Components/List';
import Timer from '../Components/Timer';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] >([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  return (
    <div className={style.AppStyle}>
     <Forms setTarefas={setTarefas}/>
     <List 
     tarefas={tarefas}
     selecionaTarefa={selecionaTarefa}/>
     <Timer selecionado={selecionado}/>
    </div>
  );
}

export default App;
