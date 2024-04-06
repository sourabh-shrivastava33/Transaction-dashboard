# MERN Stack Coding Challenge: Product Transactions

This project implements a MERN stack application to manage product transaction data.

## Backend API

- Fetches seed data from a third-party API.
- Provides APIs for:
  - Database initialization
  - Listing transactions with search and pagination
  - Transaction statistics
  - Bar chart data by price range
  - Pie chart data by category
  - Combined API data

## Frontend Application

- Single page application with:
  - Transactions table with search, pagination, and filtering
  - Transactions statistics for selected month
  - Bar chart displaying price ranges and item counts

## Setup Instructions

1. **Prerequisites:**
   - Node.js (version 14+) and npm
2. **Clone Repository:**
   ```bash
   git clone [https://your-github-username/mern-transaction-challenge.git](https://github.com/sourabh-shrivastava33/Transaction-dashboard.git)
   ```
3. **Install Dependencies:**

   ```bash
   npm run setup
   ```

4. **Configure Environment Variables:**

- **Create a `.env` file to the root folder:**
  - In the project root directory, create a file named `.env`.
  - **Do not commit this file to version control** to protect sensitive information.
- **Add MongoDB connection string:**
  - Within the `.env` file, add the following line, replacing `<your_mongo_uri>` with your actual connection string:
  ```
  MONGO_URL=<your_mongo_uri>
  ```
- **Obtain MongoDB connection string:**
  - Refer to your MongoDB provider's documentation for instructions on how to obtain your connection string.

5. **Navigate to the `backend` directory:**

   - Open your terminal and navigate to the directory where the `populate.js` file is located (e.g., `cd backend`).

6. **Run the script:**

   - Execute the following command:
     ```bash
     node populate.js
     ```

   This will fetch data from the API, populate your database, and log a success message if everything goes well.

7. **Run the application:**

   ```bash
   npm run dev
   ```
