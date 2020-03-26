import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Seja o Heroi" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso. Quanto mais detalhado, mais chances de encontrar um
            heroi para resolver.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form action="">
          <input type="text" placeholder="Titulo do caso" />
          <textarea type="text" placeholder="Descricao" />
          <input type="text" placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
