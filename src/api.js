import axios from "axios";

const API_URL = "http://localhost:3001/users";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createUser = async (user) => {
  const res = await axios.post(API_URL, user);
  return res.data;
};

export const updateUser = async (user) => {
  const res = await axios.put(`${API_URL}/${user.id}`, user);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
