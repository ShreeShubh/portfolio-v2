import axios from "axios"

const API_BASE_URL = "https://portfolio-backend-gnn3.onrender.com"

export const addContact = (contact) =>
  axios.post(`${API_BASE_URL}/api/contact-us`, contact)
