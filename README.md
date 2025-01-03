# Node js (user registration and log in Exercise)

This is a simple APIs Exercise for user registration and log in built with **Node.js**, **Express**, and **MongoDB**.

## Project Structure

### Folder Structure

- `.env`: Environment variables for the application.
- `config/`: Contains configuration files.
  - `db.js`: Database connection configuration.
- `controllers/`: Contains controller files.
  - `authController.js`: Controller for authentication logic.
- `models/`: Contains Mongoose models.
  - `User.js`: Mongoose model for the User.
- `routes/`: Contains route files.
  - `auth.js`: Authentication routes.
- `services/`: Contains service files.
  - `authService.js`: Service for authentication logic.
- `server.js`: The main entry point of the application.
- `package.json`: Contains project metadata and dependencies.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (https://nodejs.org)
- **MongoDB** (https://www.mongodb.com)

### Installation

1. **Clone the repository:**

   ```sh
   git clone git@github.com:kashishGadhiya-aub/nodeJS_-Exercise.git
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```env
     MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING
     ```

---

## Running the Application

To start the server in development mode, run:

```sh
npm run dev
```

---

## API Endpoints

### 1. **Register a New User**

- **Endpoint:** `POST /api/auth/register`
- **Validations:**
  - Username must be unique.
  - Username must not contain spaces or special characters.
- **Request Body:**
  ```json
  {
    "username": "exampleuser",
    "email": "user@example.com"
  }
  ```
- **Responses:**
  - **Success:** Returns a success message.
  - **Failure:** Returns an error status and message.

---

### 2. **Login a User**

- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  { "username": "exampleuser", "email": "user@example.com" }
  ```
- **Responses:**
  - **Success:** Returns a login status and message.
  - **Failure:** Returns an error status and message.

---

## Project Files

### **Key Files Overview**

1. **server.js:**

   - The main entry point of the application. Sets up the Express server and connects to MongoDB.

2. **db.js:**

   - Configures and establishes the MongoDB connection.

3. **User.js:**

   - Defines the Mongoose schema and model for the User.

4. **auth.js:**

   - Contains authentication routes and logic for user registration and login.

5. **authController.js:**

   - Contains controller logic for handling authentication requests.

6. **authService.js:**

   - Contains service logic for authentication operations.

---

