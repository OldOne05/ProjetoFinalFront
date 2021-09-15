import React, { useEffect, useState } from 'react';
import TaskCard from '../Card/TaskCard';
import './TaskList.scss';
import { Api } from '../../../api/api';

const TaskList = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(()=> {
    getTask();
  }, [])

  const getTask = async () => {
    const response = await Api.fetchGet();
    const data = await response.json();
    setTarefas(data);
  }

  return (
    <div className="list">
      {tarefas.map((tarefa, index) => (
        <TaskCard musica={tarefa} key={tarefa._id}/>
      ))}
    </div>
  )
}

export default TaskList