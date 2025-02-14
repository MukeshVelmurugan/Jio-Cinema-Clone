# JioCinema Clone

A simple JioCinema Home page clone built using Vite + React.js for the frontend and Express.js for the backend. The project allows users to browse and search for movies using a JSON-based movie database.

## Live Demo

https://jio-cinema-clone-site.netlify.app/

## Features

### 🎬 Movie Listings: 
Displays a list of movies fetched from a JSON file.

### 🔍 Search Functionality: 
Users can search for movies by title.

### 🌐 Hosted Online:

Frontend on Netlify

Backend on Render

## Tech Stack

### Frontend

| Vite + React.js | CSS (for styling) | React Router |
|----------|----------|----------|

### Backend

| Express.js | Node.js | JSON (as a data source) |
|----------|----------|----------|


## Installation & Setup

### Prerequisites

#### Make sure you have the following installed:

``` js
Node.js

npm or yarn
``` 

#### Clone the Repository

```
git clone https://github.com/MukeshVelmurugan/Jio-Clone.git
```
```
cd Jio-Clone
```

### Backend Setup

#### Navigate to the backend folder:

```
cd API
```

#### Install dependencies:

``` js
npm install
```

#### Start the server:

``` js
npm run start
```

##### Open http://localhost:3000/movies in your browser. (For backend)
### Frontend Setup

#### Navigate to the frontend folder:

```
cd frontend
```

#### Install dependencies:
``` js
npm install
``` 
#### Start the development server:
``` js
npm run dev
``` 
##### Open http://localhost:5173/ in your browser. (For frontend)

## Folder Structure
```
Jio-Clone/
│-- API/
│   │-- index.js  # Express server
│   │-- movies.json # Movie data
│-- frontend/
│   │-- src/
│   │   │-- components/
│   │   │-- App.jsx
│   │   │-- index.jsx
```

## Future Improvements

🔹 Improved search functionality with filters (genre, year, etc.)

🔹 User authentication & favorites list

🔹 Movie trailers & details page

## Contributing

Feel free to fork this repository and make improvements.

