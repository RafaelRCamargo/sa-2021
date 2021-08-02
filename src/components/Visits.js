import React from "react";
import { useState, useEffect } from "react";
import "./Visits.css";
import api from "../services/api";

let Visits = () => {
  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    async function saveVisita() {
      await api
        .post("api/", { day: Date.now() })
    }
    async function loadVisitas() {
      await api
        .get("api/")
        .then((response) => setVisitas(Object.keys(response.data).length));
    }

    loadVisitas();
    saveVisita();
  }, []);

  return (
    <div className="visitas-container">
      <h1 className="visitas-title">Visitas: </h1>
      <h1 className="visitas-p">{visitas}</h1>
    </div>
  );
};

export default Visits;
