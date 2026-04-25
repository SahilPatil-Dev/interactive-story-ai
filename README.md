# 📰 Interactive Story AI

Interactive Story AI is a full-stack web application that generates dynamic, branching “choose-your-own-adventure” stories using large language models. It combines modern backend architecture with AI-driven content generation to deliver an interactive storytelling experience.

---

## 🌟 Overview

This project demonstrates how to integrate LLM-based content generation into a scalable web application. Users can create stories based on a theme, and the system asynchronously generates a structured story tree with multiple paths and endings.

The application is designed with a clear separation of concerns across backend services, database models, and frontend components.

---

## ✨ Key Features

* **AI-Generated Stories**: Generates structured, multi-path stories using Google Gemini via LangChain.
* **Asynchronous Processing**: Story creation runs in the background with job tracking and status polling.
* **Authentication System**: Secure user registration and login using JWT-based authentication.
* **Interactive Story Flow**: Stories are stored as tree structures, allowing users to navigate choices dynamically.
* **Full-Stack Architecture**: Clean separation between API, services, and frontend logic.

---

## ⚙️ Tech Stack

### Backend
* **FastAPI**
* **SQLAlchemy ORM**
* **PostgreSQL**
* **LangChain + Google Gemini API**
* **JWT Authentication**

### Frontend
* **React (Vite)**
* **Custom Hooks**
* **REST API integration**

---

## 🏗️ Architecture

The backend follows a layered architecture:
* `api/` → HTTP routes
* `services/` → business logic
* `models/` → database models
* `schemas/` → request/response validation
* `core/` → config, auth, security
* `db/` → database setup

The frontend is organized by features:
* `api/` → API client
* `auth/` → authentication logic
* `components/` → reusable UI
* `hooks/` → custom hooks
* `pages/` → application screens

---

## 🧩 How It Works

1.  User submits a story theme.
2.  Backend creates a story job.
3.  Background task invokes the LLM.
4.  Response is parsed into a structured format.
5.  Story is stored as nodes in the database.
6.  Frontend polls job status and renders the story.

---

## 🚀 Getting Started

### Prerequisites
* Python 3.10+
* Node.js 18+
* PostgreSQL
* Google API Key (Gemini)

---

**Create a .env file:**

DATABASE_URL=postgresql://user:password@localhost/db_name
SECRET_KEY=your_secret_key
GOOGLE_API_KEY=your_google_api_key

---

## 📡 API Endpoints
### Authentication
 * POST /auth/register
 * POST /auth/login
### Stories
 * POST /stories/create
 * GET /stories/{story_id}/complete
### Jobs
 * GET /jobs/{job_id}

---

## 🔧 Design Highlights
 * Decoupled business logic via service layer
 * Schema validation using Pydantic
 * Tree-based data modeling for story branching
 * Background job pattern for AI tasks
 * Reusable frontend hooks for state management

---

## 🔮 Future Improvements
 * Introduce **Celery + Redis** for distributed task processing.
 * Add refresh token flow for authentication.
 * Implement rate limiting and quotas.
 * Add real-time updates (**WebSockets**).
 * Improve UI/UX and story visualization.

---

## 👨‍💻 Author
Developed by Sahil Patil as a full-stack AI project showcasing backend architecture, async processing, and LLM integration.

---

## 📜 Acknowledgments
 * FastAPI
 * React
 * LangChain
 * Google Generative AI

---

## ⭐ Support
If you like this project, consider giving it a star ⭐ on GitHub!
