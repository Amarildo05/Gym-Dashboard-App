import { useState, useCallback } from "react";
import axios from "axios";

export const useUsers = () => {
  const [data, setData] = useState([]);

  // Fetch data from the server
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  // Create a new user
  const createUser = async (newUser) => {
    try {
      const response = await axios.post("http://localhost:3001/users", newUser);
      setData([...data, response.data]); // Append new user to the list
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // Update user details
  const updateUser = async (updatedUser) => {
    try {
      await axios.put(
        `http://localhost:3001/users/${updatedUser._id}`,
        updatedUser
      );
      // Update state with updated user
      setData(
        data.map((item) => (item._id === updatedUser._id ? updatedUser : item))
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setData(data.filter((item) => item._id !== id)); // Remove deleted user from state
    } catch (error) {
      console.error(
        "Error deleting user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return { data, fetchData, createUser, updateUser, deleteUser };
};