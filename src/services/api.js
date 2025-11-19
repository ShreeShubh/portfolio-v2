// import axios from "axios"

// const API_BASE_URL = "https://portfolio-backend-gnn3.onrender.com"

// export const addContact = (contact) =>
//   axios.post(`${API_BASE_URL}/api/contact-us`, contact)

export const addContact = async (formData) => {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbx1prZW0zKHZRCxqgaeAMHgfiU6vxSQUdGLndqlt1FcshPG-Vk8o_TJYYQxIGg6qgTI/exec'

  const response = await fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })

  return response // <-- optional
}
