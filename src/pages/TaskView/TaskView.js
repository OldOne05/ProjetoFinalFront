import React, { useEffect, useState } from "react";
import "./TaskView.scss";
import { Api } from "../../api/api";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const TaskView = (props) => {
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getTaskById();
  }, []);

  const id = props.match.params.id;

  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setTarefa(data);
  };

  const handleDelete = async (evento) => {
    evento.preventDefault();
    const response = await Api.fetchDelete(id);
    const data = response;
    props.history.push("/");
  };

  return (
    <section className="view">
      <div className="view-info">
        <p className="view-info-text">
          <b>Título:</b> {tarefa.titulo}
        </p>
        <p className="view-info-text">
          <b>Descrição:</b> {tarefa.descricao}
        </p>
        <p className="view-info-text">
          <b>Prioridade:</b> {tarefa.prioridade}
        </p>
        <p className="view-info-text">
          <b>Status:</b> {tarefa.status}
        </p>
        <p className="view-info-text">
          <b>Prazo:</b> {tarefa.prazo}
        </p>
        <Link to={`/edit/${tarefa._id}`}>
          <button className="btn btn-success">Editar</button>
        </Link>
        <button className="btn btn-danger" onClick={onOpenModal}>
          Excluir
        </button>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
      >
        <h2>Deseja realmente Excluir ?</h2>
        <button onClick={handleDelete} className="buttons">
          SIM
        </button>
        <button onClick={onCloseModal} className="buttons">
          NAO
        </button>
      </Modal>
    </section>
  );
};

export default TaskView;
