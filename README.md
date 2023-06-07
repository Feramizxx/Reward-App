# Reward React App

Welcome to the React App! This project is a rewards program that displays customer points.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your machine:

- Node.js
- npm

## Getting Started

Follow these steps to get the React app up and running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Feramizxx/Reward-App.git

   ```

2. **Navigate to the project directory**
   cd prize-app

3. **Install dependencies**
   npm install

4. **Start the application!!**
   npm start (This will start start react app in port 300 and json-server in port 3001,concurrently package allows us to run multiple commands concurrently.)

## Data Fetching

The React app fetches data from a json-server. It follows the (https://www.npmjs.com/package/json-server) architecture.
We are using RTK Query to fetch data. RTK Query is a powerful data fetching and caching tool(https://redux-toolkit.js.org/rtk-query/overview).