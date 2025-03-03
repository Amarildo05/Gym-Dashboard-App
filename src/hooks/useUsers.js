import { useState } from "react";
import axios from "axios";

export const useUsers = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const createUser = async (newUser) => {
    try {
      const response = await axios.post("http://localhost:3001/users", newUser);
      setData([...data, response.data]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      await axios.put(
        `http://localhost:3001/users/${updatedUser.id}`,
        updatedUser
      );
      setData(
        data.map((item) => (item.id === updatedUser.id ? updatedUser : item))
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return { data, fetchData, createUser, updateUser, deleteUser };
};