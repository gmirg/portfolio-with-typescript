import axios, { AxiosResponse } from "axios";
import { IProject } from "../interfaces/project.interface";

export const getProjects = async () => { 
  const apiUrl = "http://localhost:5000/projects/";
  try {
    const response = await axios.get<IProject[]>(apiUrl);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught higher up
  }
};