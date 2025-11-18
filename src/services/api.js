// import axios from "axios"

// const API_BASE_URL = "https://portfolio-backend-gnn3.onrender.com"

// export const addContact = (contact) =>
//   axios.post(`${API_BASE_URL}/api/contact-us`, contact)

export const addContact = async (formData) => {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzgcRpicjLZzXS4qNfDaAm7aTW_LWuKzyrnssUfIYFHFbmN_mTglwI73coalDRsD1AH/exec'

  const response = await fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  return response.json() // <-- optional
}
