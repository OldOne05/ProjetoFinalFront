import React from 'react';
import TaskList from '../../components/structure/List/TaskList';
import './Home.scss';

const Home = () => {
  return (
    <section className="content">
      <h1 className="content-title">Tarefas</h1>
      <div className="content-list">
        <h1>Lista de Tarefas</h1>
        <TaskList />
      </div>
    </section>
  )
}

export default Home