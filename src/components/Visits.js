import React from "react";
import { useState, useEffect } from "react";
import "./Visits.css";
import api from "../services/api";

let Visits = () => {
    const [visitas, setVisitas] = useState([]);
  
    useEffect(() => {
      async function loadVisitas() {
        const response = await api.get("api/");
        console.log(response.data);
        setVisitas(response.data);
      }
      loadVisitas();
    }, []);
  
    return (
          <div className="visitas-container">
            <h1 className="visitas-title">Visitas: </h1>
            <h1 className="visitas-p">
              {visitas.map((res) => {
                return res.id;
              })}
            </h1>
          </div>
    );
  };
  
  export default Visits;
  