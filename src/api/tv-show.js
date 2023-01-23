import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

// RECORDAR EN LAS AYUDANTIAS QUE LES VEAN POO

export class TVShowAPI {
  
  // AXIOS
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      console.log(response.data.results);
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }
}
