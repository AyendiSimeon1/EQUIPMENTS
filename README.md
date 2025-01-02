# Technical Assesment Task

## Equipment Management  Backend API 

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

## Figma Screen Implementation (Client)

### 1. Clone the Repository  
Run the following command to clone the repository:  
```bash  
git clone <repository-url>  
```  
Replace `<repository-url>` with the HTTPS or SSH URL of the repository.  

### 2. Navigate to the Project Directory  
```bash  
cd <project-directory-name>  
```  
Replace `<project-directory-name>` with the name of the cloned project folder.  
```bash  
cd <my-next-app>  
```  

### 3. Install Dependencies  
Install the required packages using one of the following commands:  

Using npm:  
```bash  
npm install  
```  
Using yarn:  
```bash  
yarn install  
```  

### 4. Start the Development Server  
To start the development server, run:  

Using npm:  
```bash  
npm run dev  
```  
Using yarn:  
```bash  
yarn dev  
```  

### 5. Access the Application  
Once the server is running, open your browser and navigate to:  
```
http://localhost:3000  

