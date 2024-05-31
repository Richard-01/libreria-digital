<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Digital Library API
## Description
This API provides functionalities for managing a digital library, allowing CRUD operations on books, authors, and sales. It also includes capabilities for pagination, filtering, and sorting, as well as data validations and appropriate response codes.

## Table of Contents
- [Description](#description)
- [Installation and Setup](#installation-and-setup)
- [Running the App](#running-the-app)
- [Usage](#usage)
  - [Available Endpoints](#available-endpoints)
  - [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contribution](#contribution)
- [Author](#author)

## Installation and Setup
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/Richard-01/libreria-digital.git
    cd libreria-digital
    ```
2. Install dependencies using the command:
    ```bash
    npm install
    ```
3. Create a `.env` file based on the `.env.example` file and fill in the required environment variables.

- `DB_USER`: Default database user.
- `DB_HOST`: Hostname or IP address of the database server.
- `DB_PASSWORD`: Password for the database user.
- `DB_NAME`: Name of the database.
- `DB_PORT`: Port number for the database server.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Installation and Setup
1. Clone this repository to your local machine.
2. Install dependencies using the command `npm install`.
3. Configure your PostgreSQL or MySQL database and update the configuration in the `config.ts` file.
4. Start the application using the command `npm run start`.

## Usage
### Available Endpoints
- `GET /books`: Get all available books.
- `GET /books/:id`: Get a specific book by its ID.
- `POST /books`: Create a new book.
- `PUT /books/:id`: Update an existing book.
- `DELETE /books/:id`: Delete a book by its ID.
- `GET /authors`: Get all available authors.
- `GET /authors/:id`: Get a specific author by its ID.
- `POST /authors`: Create a new author.
- `PUT /authors/:id`: Update an existing author.
- `DELETE /authors/:id`: Delete an author by its ID.
- `GET /sales`: Get all available sales.
- `GET /sales/:id`: Get a specific sale by its ID.
- `POST /sales`: Register a new sale.
- `PUT /sales/:id`: Update an existing sale.
- `DELETE /sales/:id`: Delete a sale by its ID.

### API Documentation
The API documentation is available in Swagger. After running the application, visit `http://localhost:3000/api-docs` in your browser to access the documentation.

## Project Structure
```
src/
|-- author/
|   |-- dto/                       
|   |   |-- create-author.dto.ts     # DTO for creating an author
|   |   |-- update-author.dto.ts     # DTO for updating an author
|   |-- entities/                   
|   |   |-- author.entity.ts         # Author entity definition
|   |-- controllers/
|   |   |-- author.controller.ts     # Controller for author operations
|   |-- services/
|   |   |-- author.service.ts        # Service for author operations
|   |-- author.module.ts             # Module for author-related functionalities
|
|-- book/
|   |-- dto/                       
|   |   |-- create-book.dto.ts       # DTO for creating a book
|   |   |-- update-book.dto.ts       # DTO for updating a book
|   |-- entities/                   
|   |   |-- book.entity.ts           # Book entity definition
|   |-- controllers/
|   |   |-- book.controller.ts       # Controller for book operations
|   |-- services/
|   |   |-- book.service.ts          # Service for book operations
|   |-- book.module.ts               # Module for book-related functionalities
|
|-- sales/
|   |-- dto/                       
|   |   |-- create-sale.dto.ts       # DTO for creating a sale
|   |   |-- update-sale.dto.ts       # DTO for updating a sale
|   |-- entities/                   
|   |   |-- sale.entity.ts           # Sale entity definition
|   |-- controllers/
|   |   |-- sale.controller.ts       # Controller for sales operations
|   |-- services/
|   |   |-- sale.service.ts          # Service for sale operations
|   |-- sale.module.ts               # Module for sale-related functionalities
|
|-- common/
|   |-- guards/
|   |   |-- time.guard.ts            # Guard for time-based route protection
|
|-- config/
|   |-- configDB.ts                  # Configuration file for database and other settings
|
|-- app.module.ts                    # Main application module
|-- main.ts                          # Application entry point
|-- ...                              # Other files and folders

```

## Contribution
To contribute to this project, follow these steps:
1. Fork this repository.
2. Create a new branch with the prefix `Feature/` followed by your feature name.
3. Make your changes and tests.
4. Make a pull request to the `Develop` branch of this repository.

- Author - [Richard Montoya](https://github.com/Richard-01)


