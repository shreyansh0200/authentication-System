# 🔐 Authentication System (MERN Stack)

A full-stack Authentication System built using the MERN stack. The application allows users to register, log in securely using JWT authentication, and access a protected dashboard. Passwords are encrypted using bcrypt, and user data is stored in MongoDB Atlas.


## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://authentication-system-ten-rosy.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://authentication-system-q5t5.onrender.com)

---

## 🚀 Features

- 👤 User Registration
- 🔑 User Login
- 🔒 JWT Authentication
- 🔐 Password Hashing using bcrypt
- 🍪 HTTP-Only Cookie Authentication
- 🛡️ Protected Dashboard Route
- ☁️ MongoDB Atlas Database
- 📱 Responsive UI with Tailwind CSS
- 🌐 REST API using Express.js

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cookie-parser
- dotenv
- cors

---

## 📂 Project Structure

```
authenticationSystem
│
├── backend
│   ├── config
│   ├── controller
│   ├── middleware
│   ├── model
│   ├── router
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Register.js
│   │   │   ├── Login.js
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## 📸 Screenshots

### Register Page

<img width="1740" height="727" alt="image" src="https://github.com/user-attachments/assets/3be266d7-db6a-4286-a366-f4751075c53a" />


### Login Page

<img width="1593" height="661" alt="image" src="https://github.com/user-attachments/assets/77ada32e-6cfd-482e-a601-00eb0a0b1cb3" />


### Dashboard

(<img width="1100" height="520" alt="image" src="https://github.com/user-attachments/assets/d9007a9f-5def-4ee2-b7df-4af6153ad09d" />
)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/shreyansh0200/authentication-System.git
```

Move into project directory

```bash
cd authentication-System
```

---

## Backend Setup

Move to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend

```bash
npm start
```

---

## Frontend Setup

Move to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start React application

```bash
npm start
```

---

## API Endpoints

### Register User

```
POST /register
```

Body

```json
{
    "firstname":"shreyansh",
    "lastname":"kandu",
    "email":"shreyansh@gmail.com",
    "password":"123456"
}
```

---

### Login User

```
POST /login
```

Body

```json
{
    "email":"shreyansh@gmail.com",
    "password":"123456"
}
```

---

### Protected Dashboard

```
GET /dashboard
```

Requires JWT Authentication.

---

## Security Features

- Passwords are hashed using bcrypt.
- JWT tokens are generated after successful login.
- Protected routes require a valid JWT.
- Cookies are HTTP-only for improved security.
- MongoDB Atlas securely stores user data.

---

## Deployment

### Frontend

Deployed on **Vercel**

### Backend

Deployed on **Render**

### Database

Hosted on **MongoDB Atlas**

---

## Future Improvements

- Email Verification
- Forgot Password
- Reset Password
- User Profile Page
- Change Password
- Remember Me Feature
- Refresh Tokens
- Role-Based Authentication (Admin/User)
- Google OAuth Login
- GitHub OAuth Login

---

## Author

**Shreyansh Kandu**

GitHub: https://github.com/shreyansh0200

LinkedIn: https://www.linkedin.com/in/shreyansh-kandu-002331280/

---

## License

This project is licensed under the MIT License.
