# Movie Rental API

The Movie Rental API is a robust and scalable API built using Node.js, Express, and Mongoose. This API is designed to support a movie rental application with various features for managing users and movie rentals.

## Key Features

- **User Authentication**: Allows users to log in and manage their profiles securely.
- **Movie Rental**: Enables users to rent movies with ease.
- **Movie Categories and Genres**: Provides endpoints to fetch and manage movie categories and genres.
- **Middleware Integration**: Utilizes middleware for enhanced functionality, such as authentication checks and request logging.

## Technology Stack

- **Node.js**: Server-side JavaScript runtime environment.
- **Express**: Web framework for building the API endpoints.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## API Endpoints

### Authentication

- `POST /login`: User login.
- `POST /register`: User registration.

### Movie Management

- `GET /movies`: List all movies.
- `POST /rent`: Rent a movie.
- `GET /categories`: Fetch movie categories.
- `GET /genres`: Fetch movie genres.

