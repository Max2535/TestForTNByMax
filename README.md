# Trip Search Web Application

This project is a React-based web application that allows users to search for trips using keywords. The app displays the trips fetched from an API Gateway, with results shown in a card format, featuring trip details such as title, description, images, and tags. It uses **Tailwind CSS** for styling and responsiveness.

## Features

- Search for trips by keywords (e.g., title, description, tags).
- Display trip details in a responsive grid layout.
- Clickable tags that can be used as filters.
- Links to the full trip details.
- Styled using **Tailwind CSS**.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: For making HTTP requests to the API Gateway.
- **JSON Server**: Used as a mock API for development.

## Installation

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

- **Node.js** (version 14.x or higher)
- **npm** (comes with Node.js)
  
### Steps

1. **Clone the repository**:

   ```bash
   git clone [Trip search](https://github.com/Max2535/TestForTNByMax.git)

2. **Run Project**:

   ```bash
   api-gateway/node index.js
   data/json-server --watch db.json --port 9000
   trip-search/npm start
