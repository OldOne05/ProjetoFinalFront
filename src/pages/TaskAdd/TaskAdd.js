import React from 'react'
import './MusicAdd.scss';
import { Api } from '../../api/api';

const TaskAdd = (props) => {
    const handleSubmit = async (evento) => {
        evento.preventDefault()
        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;

        const Tarefa = {
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            status:status
        }

        try {
            const response = await Api.fetchPost(Tarefa);
            const data = await response;
            props.history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="add">
          <form className="add-form" onSubmit={handleSubmit}>
            <div className="add-form-group">
              <label htmlFor="titulo" className="add-form-group-label">Título</label>
              <input type="text" id="titulo" name="titulo" className="add-form-group-input"/>
            </div>
            <div className="add-form-group">
              <label htmlFor="descricao" className="add-form-group-label">Descrição</label>
              <input type="text" id="descricao" name="descricao" className="add-form-group-input"/>
            </div>
            <div className="add-form-group">
              <label htmlFor="prioridade" className="add-form-group-label">Prioridade</label>
              <input type="text" id="prioridade" name="prioridade" className="add-form-group-input"/>
            </div>
            <div className="add-form-group">
              <label htmlFor="status" className="add-form-group-label">Status</label>
              <input type="text" id="status" name="status" className="add-form-group-input"/>
            </div>
            {/* <div className="add-form-group">
              <label htmlFor="letra" className="add-form-group-label">Letra</label>
              <input type="text" id="letra" name="letra" className="add-form-group-input"/>
            </div>
            <div className="add-form-group">
              <label htmlFor="duracao" className="add-form-group-label">Duracao</label>
              <input type="number"  id="duracao" name="duracao" className="add-form-group-input"/>
            </div> */}
            <div className="add-form-buttons">
              <button className="add-form-buttons-btn-cancelar">Cancelar</button>
              <button className="add-form-buttons-btn-salvar" type="submit">Enviar</button>
            </div>
          </form>
        </section>
    )
}

export default TaskAdd