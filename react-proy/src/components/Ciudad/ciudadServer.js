const API_URL = "http://localhost:8000/api/ciudad/";

export const listCiudades = async () => {
  return await fetch(API_URL);
};

export const getCiudad = async (ciudadId) => {
  return await fetch(`${API_URL}${ciudadId}`);
};

export const registerCiudad = async (newCiudad) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newCiudad.name).trim,
      departamento: parseInt(newCiudad.departamento),
    }),
  });
};

export const updateCiudad = async (ciudadId, updatedCiudad) => {
  return await fetch(`${API_URL}${ciudadId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(updatedCiudad.name).trim,
      departamento: parseInt(updatedCiudad.departamento),
    }),
  });
};

export const DeleteLocalidad = async (ciudadId) => {
  return await fetch(`${API_URL}${ciudadId}`, {
    method: "DELETE",
  });
};
