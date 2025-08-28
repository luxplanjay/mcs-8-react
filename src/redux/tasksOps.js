import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async () => {
  const response = await axios.get("/tasks");
  return response.data;
});

export const addTask = createAsyncThunk("tasks/addTask", async newTask => {
  const response = await axios.post("/tasks", newTask);
  return response.data;
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async taskId => {
  const response = await axios.delete(`/tasks/${taskId}`);
  return response.data;
});
