const API_URL = "http://localhost:8000/api/localidad/";

export const listLocalidades = async () => {
  return await fetch(API_URL);
};

export const getLocalidad = async (localidadId) => {
  return await fetch(`${API_URL}${localidadId}`);
};

export const registerLocalidad = async (newLocalidad) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newLocalidad.name).trim,
      ciudad: parseInt(newLocalidad.ciudad),
    }),
  });
};

export const updateLocalidad = async (localidadId, updatedLocalidad) => {
  return await fetch(`${API_URL}${localidadId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(updatedLocalidad.name).trim,
      ciudad: parseInt(updatedLocalidad.ciudad),
    }),
  });
};

export const DeleteLocalidad = async (localidadId) => {
  return await fetch(`${API_URL}${localidadId}`, {
    method: "DELETE",
  });
};
