import { useState, useCallback } from "react";
import axios from "axios";

export const useUsers = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

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
        `http://localhost:3001/users/${updatedUser._id}`,
        updatedUser
      );
      setData(
        data.map((item) => (item._id === updatedUser._id ? updatedUser : item))
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error(
        "Error deleting user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return { data, fetchData, createUser, updateUser, deleteUser };
};