# 🚀 Interactive Story AI

An end-to-end full-stack application that generates **interactive "Choose Your Own Adventure" stories** using an asynchronous backend architecture and a modern React frontend.

---

## 🌟 Overview

Interactive Story AI allows users to:

* 🔐 Register & authenticate securely (JWT-based auth)
* 🎮 Generate dynamic AI-powered stories
* 🔄 Experience asynchronous story generation (job queue pattern)
* 🌳 Navigate story paths through interactive decision trees
* ⚡ Enjoy a smooth, modern UI with Apple-inspired glass design

---

## 🧠 Architecture

This project follows a **production-level architecture**:

```text
Frontend (React + Vite + Tailwind)
        ↓
Backend API (FastAPI)
        ↓
PostgreSQL Database
        ↓
Async Job Processing (Polling-based)
```

---

## ⚙️ Tech Stack

### 🔹 Frontend

* React (Vite)
* Tailwind CSS (Glass UI Design)
* React Router
* Axios

### 🔹 Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* JWT Authentication
* Async Job Processing (Polling)

### 🔹 Deployment

* Backend: Render
* Frontend: Vercel

---

## 🔐 Features

### ✅ Authentication

* User registration & login
* JWT-based authentication
* Protected routes

### 🎮 Story Engine

* Dynamic story generation via API
* Tree-based story structure
* Multiple endings (winning / losing)

### 🔄 Async Processing

* Story creation runs as background job
* Job polling system for status tracking
* Prevents blocking API calls

### 🎨 UI/UX

* Apple-style glassmorphism design
* Smooth transitions & animations
* Typewriter text effect
* Responsive layout

### ⚠️ Error Handling

* 422 validation error handling
* 404 "Not Found" animation UI
* Global API error normalization

---

## 📦 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📖 Stories

* `POST /api/stories/create`
* `GET /api/stories/{id}/complete`

### 🔄 Jobs

* `GET /api/jobs/{job_id}`

---

## 📁 Project Structure

backend/
  ├── api/
  ├── core/
  ├── db/
  ├── models/
  ├── schemas/
  ├── services/
  └── main.py

frontend/
  ├── components/
  ├── hooks/
  ├── pages/
  ├── api/
  └── auth/
  └── app.jsx


---

## 🔥 Key Concepts Demonstrated

* Clean Architecture (Separation of Concerns)
* Async Processing with Job Queue Pattern
* JWT Authentication Flow
* API Error Normalization
* React Custom Hooks for Logic Isolation
* Component-Based UI System
* Production Deployment Pipeline

---

## 🧪 Future Improvements

* Replace polling with WebSockets or Redis queue
* Add Lottie animations for UI polish
* Implement user story history dashboard
* Add caching (Redis)
* AI model customization

---

## 👨‍💻 Author

**Sahil Patil**

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to fork!
