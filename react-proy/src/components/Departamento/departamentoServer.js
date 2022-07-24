const API_URL = "http://localhost:8000/api/departamentos/";

export const listDepartamento = async () => {
  return await fetch(API_URL);
};

export const getDepartamento = async (departamentoId) => {
  return await fetch(`${API_URL}${departamentoId}`);
};

export const registerDepartamento = async (newDepartamento) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newDepartamento.name).trim,
    }),
  });
};

export const updateDepartamento = async (
  departamentoId,
  updatedDepartamento
) => {
  return await fetch(`${API_URL}${departamentoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(updatedDepartamento.name).trim,
    }),
  });
};

export const DeleteDepartamento = async (departamentoId) => {
  return await fetch(`${API_URL}${departamentoId}`, {
    method: "DELETE",
  });
};
