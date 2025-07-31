import { useState, useCallback } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // NEW State

  const fetchData = useCallback(async () => {
    setLoading(true); // start loading
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // stop loading
    }
  }, []);

  const createUser = async (newUser) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, newUser);
      setData([...data, response.data]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      await axios.put(`${API_BASE_URL}/users/${updatedUser._id}`, updatedUser);
      setData(
        data.map((item) => (item._id === updatedUser._id ? updatedUser : item))
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return { data, loading, fetchData, createUser, updateUser, deleteUser }; // New State
};