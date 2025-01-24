import axios from "axios"

const API_BASE_URL = "http://localhost:8001"

export const addContact = (contact) =>
  axios.post(`${API_BASE_URL}/api/contact-us`, contact)
