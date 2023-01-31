import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from  "./List.module.scss"



function List({tarefas}: {tarefas: ITarefa[]}) {
    // const [tarefas, setTarefas] = useState([{
    //     tarefa:'React',
    //     tempo:'02:00:00'
    // }, {
    //     tarefa:'TypeScript',
    //     tempo:'01:00:00'
    // }, {
    //     tarefa:'JavaScript',
    //     tempo:'00:30:00'
    // }]);
    return(
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
            {/* onClick={() => {
               setTarefas( [...tarefas, {tarefa: "Estudar estado", tempo:"05:00:00"}]
               )}} */}
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                    {...item} />
                ))}
                
            </ul>
        </aside>
    )
}

export default List;