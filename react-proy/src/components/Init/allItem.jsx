import React, { useState } from "react";

import * as CiudadServer from "../Ciudad/ciudadServer";
import * as LocalidadServer from "../Localidad/localidadServer";
import * as DepartamentoServer from "../Departamento/departamentoServer";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AllItem = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [ciudadesAct, setCiudadesAct] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [localidadesAct, setLocalidadesAct] = useState([]);

  const listDepartamentos = async () => {
    try {
      const res = await DepartamentoServer.listDepartamento();
      const data = await res.json();
      setDepartamentos(data.departamento);
    } catch (error) {
      console.log(error);
    }
  };

  const listCiudades = async () => {
    try {
      const res = await CiudadServer.listCiudades();
      const data = await res.json();
      setCiudades(data.ciudades);
    } catch (error) {
      console.log(error);
    }
  };
  const listLocalidades = async () => {
    try {
      const res = await LocalidadServer.listLocalidades();
      const data = await res.json();
      setLocalidades(data.localidades);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listDepartamentos();
    listCiudades();
    listLocalidades();
  }, []);

  const navigate = useNavigate();
  const handleDepDelete = async (departamentoId) => {
    await DepartamentoServer.DeleteDepartamento(departamentoId);
    listDepartamentos();
  };
  const handleCiuDelete = async (ciudadId) => {
    await DepartamentoServer.DeleteDepartamento(ciudadId);
    listCiudades();
  };
  const handleLocDelete = async (localidadId) => {
    await DepartamentoServer.DeleteDepartamento(localidadId);
    listLocalidades();
  };

  const handleDepChange = (name) => {
    console.log(name);
    let depa = [];
    departamentos.forEach((element) => {
      if (element.name == name) {
        depa = element;
      }
    });
    setCiudadesAct(() => {
      let ciudadesAct = [];
      ciudades.forEach((element) => {
        if (element.departamento_id == depa.id) {
          ciudadesAct.push(element);
        }
      });
      return ciudadesAct;
    });
    console.log(depa);
    setSelectedOptionDep(name);
  };

  const handleCiuChange = (name) => {
    console.log(name);
    let ciu = [];
    ciudades.forEach((element) => {
      if (element.name == name) {
        ciu = element;
      }
    });
    setLocalidadesAct(() => {
      let localidadesAct = [];
      localidades.forEach((element) => {
        if (element.ciudad_id == ciu.id) {
          localidadesAct.push(element);
        }
      });
      return localidadesAct;
    });
    console.log(ciu);
    setSelectedOptionCiu(name);
  };

  const [selectedOptionDep, setSelectedOptionDep] = useState([]);
  const [selectedOptionCiu, setSelectedOptionCiu] = useState([]);
  const [selectedOptionLoc, setSelectedOptionLoc] = useState([]);

  console.log(selectedOptionDep);
  console.log(selectedOptionCiu);
  return (
    <div className="container">
      <div className="card-group col-md-8 mb-6 mx-auto text-center">
        <div className="card card-body">
          <h3 className="card-title text-center">Departamento</h3>
          <select
            value={selectedOptionDep}
            onChange={(e) => handleDepChange(e.target.value)}
            class="form-select" aria-label="Default select example"
          >
            <option>Seleccione Departamento ----</option>
            {departamentos.map((departamento) => (
              <option key={departamento.id} value={departamento.name}>
                {departamento.name}
              </option>
            ))}
          </select>
        </div>
        <div className="card card-body">
          <h3 className="card-title text-center">Ciudad</h3>
          <select
            value={selectedOptionCiu}
            onChange={(e) => handleCiuChange(e.target.value)}
            class="form-select" aria-label="Default select example"
          >
            <option>Seleccione Ciudad ----</option>
            {ciudadesAct.map((ciudad) => (
              <option key={ciudad.id} value={ciudad.name}>
                {ciudad.name}
              </option>
            ))}
          </select>
        </div>
        <div className="card card-body">
          <h3 className="card-title text-center">Localidad</h3>
          <select
            value={selectedOptionLoc}
            onChange={(e) => setSelectedOptionLoc(e.target.value)}
            class="form-select" aria-label="Default select example"
          >
            <option>Seleccione Localidad ----</option>
            {localidadesAct.map((localidad) => (
              <option key={localidad.id} value={localidad.name}>
                {localidad.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllItem;
