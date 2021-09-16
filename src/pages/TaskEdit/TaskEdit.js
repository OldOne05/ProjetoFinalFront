import React, { useEffect, useState } from "react";
import { Api } from '../../api/api';

const TaskEdit = (props) => {
    const id = props.match.params.id;
    const [fields, setFields] = useState({});

    useEffect(() => {
        getTaskById();
    },[])

    const getTaskById = async () => {
        const response = await Api.fetchGetById(id)
        const data = await response.json();
        setFields(data);
    }

    const handleFieldsChange = (evento) => {
        const auxFields = { ...fields };
        auxFields[evento.target.name] = evento.target.value;
        setFields(auxFields);
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const dados = { ...fields };
        const result = await Api.fetchPut(dados, id);
        const response = await result.json();
    }

    return (
        <section className="add">
          <h1>Editar</h1>
          <form className="add-form" onSubmit={handleSubmit}>
            <div className="add-form-group">
              <label htmlFor="titulo" className="add-form-group-label">
                Título
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={fields.titulo}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="add-form-group">
              <label htmlFor="descricao" className="add-form-group-label">
                Descrição
              </label>
              <input
                type="text"
                id="descricao"
                name="autor"
                value={fields.descricao}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="add-form-group">
              <label htmlFor="prioridade" className="add-form-group-label">
                Prioridade
              </label>
              <input
                type="text"
                id="prioridade"
                name="prioridade"
                value={fields.prioridade}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="add-form-group">
              <label htmlFor="status" className="add-form-group-label">
                Status
              </label>
              <input
                type="text"
                id="status"
                name="status"
                value={fields.status}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="add-form-group">
              <label htmlFor="prazo" className="add-form-group-label">
                Prazo
              </label>
              <input
                type="text"
                id="prazo"
                name="prazo"
                value={fields.prazo}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="add-form-buttons">
              <button className="add-form-buttons-btn-cancelar">Cancelar</button>
              <button className="add-form-buttons-btn-salvar" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </section>
      );
    };
    
export default TaskEdit;