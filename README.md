# Docker-Swarm-E-commerce

This project represents an e-commerce application designed to demonstrate the use of Docker Swarm for container orchestration. Its primary goal is to provide a scalable, reliable, and easy-to-manage environment for distributed applications.

# Key Features

### Distributed Architecture:

   - The application consists of multiple services (frontend, backend, and database), each containerized and managed by Docker Swarm.

### Automatic Scalability:

   - Supports dynamically increasing or decreasing the number of service instances based on demand.

### Data Persistence:

   - The database uses Docker volumes to ensure data retention even if containers are restarted.

### Secure Networking:

   - All services communicate through secure Docker Swarm networks.

### Ease of Deployment:

   - Quick setup and deployment using ```docker-compose.yml files```.

# Project Structure

### Frontend:

  - The user interface built for browsing and online shopping.

### Backend:

  - The API that handles the application logic and interactions with the database.

### Database:

  - A data management system for storing users, products, and orders.

# How to Run the Project?
### Prerequisites:

  - ```Docker``` and ```Docker Compose``` installed. \
  - ```Docker Swarm``` activated on your machine (```docker swarm init```).

# Clone the Project:

- ```git clone https://github.com/AlexandruEmil/Docker-Swarm-E-commerce.git``` \
- ```cd Docker-Swarm-E-commerce```

# Deploy the Docker Stack:

```docker stack deploy -c docker-compose.yml ecommerce```

# Access the Application:

   The frontend will be available on the configured port (e.g., http://localhost:3000). \
   The API will be accessible on another specified port (e.g., http://localhost:5000).

# Objectives

   Learn the basics of Docker Swarm and container orchestration.
   Build a scalable project that can be easily extended to production environments.
