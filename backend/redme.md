# Authentication System

A simple Node.js authentication system built with Express, MongoDB, JWT, and bcrypt. It supports user registration, login, and a protected dashboard route using cookie-based authentication.

## Features

- User registration with hashed passwords
- User login with JWT issuance
- Protected dashboard route requiring valid authentication cookie
- MongoDB persistence with Mongoose

## Technologies

- Node.js
- Express
- MongoDB / Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- cookie-parser
- dotenv

## Prerequisites

- Node.js installed
- MongoDB server running or MongoDB Atlas connection string

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with the following values:

```env
PORT=3000
MONGODB_URL=mongodb://localhost:27017/authsystem     Or another
```

3. Start the app:

```bash
npm start
```

The server will start on the port defined in `PORT`.

## API Endpoints

### `GET /`

Returns a simple welcome message.

### `POST /register`

Create a new user.

Request body:

```json
{
  "firstname": "shreyansh",
  "lastname": "kandu",
  "email": "shreyansh@example.com",
  "password": "yourPassword"
}
```

Successful response returns the created user data and a JWT token.

### `POST /login`

Authenticate a user and receive a token cookie.

Request body:

```json
{
  "email": "shreyansh@example.com",
  "password": "yourPassword"
}
```

Successful response returns:

- `success: true`
- `token`
- `user`

It also sets an authentication cookie named `token`.

### `GET /dashboard`

Protected route. Requires a valid `token` cookie.

Response:

- `Welcome to dashboard`

## Project Structure

- `index.js` - starts the Express server
- `app.js` - app configuration and route definitions
- `config/database.js` - MongoDB connection helper
- `middleware/auth.js` - JWT cookie authentication middleware
- `model/user.js` - Mongoose user model

## Notes

- The JWT secret is currently hardcoded as `shhhhh` in the app. For production, move the secret to the `.env` file and use a strong secret value.
- Ensure `MONGODB_URL` is a valid MongoDB connection string.
- The authentication cookie expires after 3 days.
