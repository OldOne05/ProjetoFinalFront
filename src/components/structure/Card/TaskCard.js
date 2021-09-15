import React from 'react';
import { Link } from 'react-router-dom';
import './TaskCard.scss';

const TaskCard = (props) => {
  const tarefa = props.tarefa;

  return (
    <Link to={`/view/${tarefa._id}`} className="card">
      <div>
        <p className="card-text">{tarefa.titulo}</p>
        <span className="card-info">{tarefa.prioridade}</span>
      </div>
    </Link>
  )
}

export default TaskCard