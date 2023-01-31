import {useState} from 'react';
import Forms from '../Components/Form';
import List from '../Components/List';
import Timer from '../Components/Timer';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] >([]);
  return (
    <div className={style.AppStyle}>
     <Forms setTarefas={setTarefas}/>
     <List tarefas={tarefas}/>
     <Timer/>
    </div>
  );
}

export default App;
