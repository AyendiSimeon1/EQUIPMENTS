# Backend Technical Assesment

# Equipment Management Backend

---

## **Project Overview**
This backend application provides an API to manage equipment. It allows users to create, read, update, and delete (CRUD) equipment records stored in a MongoDB database. The application is built with Node.js and Express, utilizing MongoDB for data persistence.

---

## **Setting Up the Project**

### Link to postman documentation
https://www.postman.com/interstellar-meadow-464220/equipments/collection/86xa15y/main

### **Prerequisites**
Ensure you have the following tools installed:
- **Node.js**
- **MongoDB**
- **Postman**

### **Steps to Set Up**
1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   cd <server>
   ```

2. **Install Dependencies**:
   Run the following command to install required dependencies:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and define the following variables:
   ```env
   MONGO_URI=mongodb+srv://simeon:19Ana156@cluster0.golqhml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   ```

4. **Run the Application**:
   Start the development server with:
   ```bash
   npm run dev
   ```
   The server will start on the port specified in the `.env` file.

---

## **Tools and Their Use**
1. **Express**: A web framework for building RESTful APIs.
2. **Mongoose**: An ODM (Object Data Modeling) library for MongoDB to manage schema and data validation.
3. **dotenv**: Loads environment variables from a `.env` file into `process.env`.
4. **cors**: Middleware to enable Cross-Origin Resource Sharing.
5. **morgan**: HTTP request logger for debugging.
6. **nodemon**: Monitors changes in the source code and automatically restarts the server during development.

---

## **API Endpoints**

### **Base URL**: `http://localhost:<PORT>`

| Method | Endpoint                 | Description                    | Request Body Example                                                                                          |
|--------|--------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------|
| POST   | `/create-equipment`      | Create a new equipment entry. | `{ "name": "Bulldozer", "type": "Heavy", "status": "Available", "leasePrice": 1200 }`                        |
| GET    | `/equipments`            | Fetch all equipment.           | N/A                                                                                                          |
| GET    | `/equipment/:id`         | Fetch equipment by ID.         | N/A                                                                                                          |
| PUT    | `/equipment/:id`         | Update equipment details.      | `{ "name": "Excavator", "status": "In Use" }`                                                               |
| DELETE | `/equipment/:id`         | Delete equipment by ID.        | N/A                                                                                                          |

---

### **Endpoint Details**

1. **POST `/create-equipment`**
   - **Description**: Adds a new equipment entry to the database.
   - **Response**:
     - `201 Created`: Returns the created equipment record.
     - `400 Bad Request`: Error if validation fails.

2. **GET `/equipments`**
   - **Description**: Retrieves all equipment records.
   - **Response**:
     - `200 OK`: Returns an array of equipment records.
     - `500 Internal Server Error`: Error fetching data.

3. **GET `/equipment/:id`**
   - **Description**: Fetches a specific equipment record by its ID.
   - **Response**:
     - `200 OK`: Returns the equipment record.
     - `404 Not Found`: Error if the equipment doesn't exist.

4. **PUT `/equipment/:id`**
   - **Description**: Updates specific fields of an equipment record.
   - **Response**:
     - `200 OK`: Returns the updated equipment record.
     - `400 Bad Request`: Error for invalid updates.
     - `404 Not Found`: Error if the equipment doesn't exist.

5. **DELETE `/equipment/:id`**
   - **Description**: Deletes an equipment record.
   - **Response**:
     - `200 OK`: Returns the deleted equipment record.
     - `404 Not Found`: Error if the equipment doesn't exist.

---

## **Testing the API**

1. **Using Postman**:
   - Import the provided [Postman Collection](#) (replace `#` with a link to the collection file).
   - Update the base URL and test all endpoints.

2. **Sample cURL Commands**:
   ```bash
   # Create Equipment
   curl -X POST http://localhost:4000/create-equipment \
   -H "Content-Type: application/json" \
   -d '{"name": "Crane", "type": "Heavy", "status": "Available", "leasePrice": 1500}'

   # Get All Equipments
   curl -X GET http://localhost:5000/equipments
   ```

---


