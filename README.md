# Bolttedex

Welcome to the **Bolttedex** project! This README provides a detailed guide for running, exploring, and evaluating the project. Whether you're testing the application as a developer or assessing its technical structure, you'll find everything you need here.

---

## 🛠 Project Overview
The **Bolttedex** is a simple web application built for demonstration purposes. It includes both a frontend interface and a backend API, showcasing core functionality that can be expanded for larger applications.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following tools installed:
- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)  

### Clone the Repository using SSH
```bash
git clone git@github.com:ArthurRF/bolttedex.git
cd bolttedex
```

### Or Clone the Repository using HTTPS
```bash
git clone https://github.com/ArthurRF/bolttedex.git
cd bolttedex
```

### Run the Project
Start the application using Docker Compose:
```bash
docker-compose up -d
```
This command will spin up both the frontend and backend services.

### Accessing the Application
- **Frontend:** Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
- **API:** The backend API is available at [http://localhost:4000/api](http://localhost:4000/api)

---

## 📦 Project Structure
- **Frontend:** A React application served at port `3000`  
- **Backend:** A Node.js/Express API exposed at port `4000`  
- **Docker:** Contains `docker-compose.yml` and Dockerfiles for containerization  

---

## 🔧 API Testing
If you'd like to run the API tests:
1. Open the `api` directory by running `cd api`.
2. Create a `.env` file in the `api` directory.
3. Copy the environment variables from `.env.example` to `.env` using the command `cp .env.example .env`.
4. Run `npm install`
5. Run the tests using `npm test`.

---

## 🔧 WEB Unit Tests
If you'd like to run the WEB unit tests:
1. Open the `web` directory by running `cd web`.
2. Copy the environment variables from `.env.example` to `.env` using the command `cp .env.example .env`.
3. Run `npm install`
4. Run the tests using `npm test`.

---

## 🌟 Improvement Suggestions
Below are some technical enhancements that would make this project more robust and production-ready but I was not able to implement in the time I had:

1. **API State Management:**
   - Implement [React Query](https://react-query.tanstack.com/) for efficient data fetching and caching.

2. **Production-Ready Docker Configuration:**
   - Optimize Dockerfiles and Docker Compose for production environments by:  
     - Multi-stage builds for smaller image sizes  
     - Environment variable configuration  
     - Enhanced security settings

3. **Adding DTOs using class-validator to validate the inputs:**
	 - This would allow for better error handling and input validation.

---

## 🧑‍💻 Technical Notes
- The current setup is designed for local development only.
- Performance optimizations are pending.

Feel free to explore, test, and tell me what you think!