# Smart Expense Tracker

A React + Vite expense tracker app for managing budgets, tracking income and expenses, and visualizing spending with charts.

## 🚀 Project Overview

This repository contains the frontend for the Smart Expense Tracker application built with:

- React 19
- Vite
- Axios
- Chart.js / react-chartjs-2
- ESLint for code quality

The backend lives in the `backend/` folder and uses Express, Mongoose, and CORS.

## ✨ Features

- Add income and expense transactions
- View total balance, income, and expenses
- See expense breakdown in a doughnut chart
- Delete transactions instantly
- Light / dark theme support
- Responsive UI with distinct panel styles

## 📁 Repository Structure

- `frontend/` - React client application
- `backend/` - Express API server

## 🛠️ Prerequisites

- Node.js v18 or newer
- npm
- MongoDB running locally or MongoDB Atlas connection

## ⚙️ Setup and Run

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend server runs at `http://localhost:5000` by default.

If using MongoDB Atlas, add a `.env` file in `backend/` with:

```env
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the provided Vite URL (usually `http://localhost:5173`).

## 🧪 Available Scripts

In the `frontend/` folder:

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint across the project

## 💡 Notes

- Frontend calls the backend API at `http://localhost:5000/api/transactions`.
- Update the API URL in `frontend/src/App.jsx` if the backend is hosted elsewhere.

## 🙌 Contributing

Feel free to fork the repository and submit improvements for UI enhancements, feature additions, or backend API support.

## 📄 License

This project is open for educational use and can be adapted for college projects or personal demos.
