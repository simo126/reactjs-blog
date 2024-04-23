# React-Blog-JSON-Server

Welcome to the repository for My Blog, a simple blogging platform built with React and utilizing a locally hosted JSON server for data storage!

<img src="/public/HomePage.png" alt="HomePage - Sbaiti Mohammed" >
<img src="/public/Blog.png" alt="Blog - Sbaiti Mohammed">
<img src="/public/ModifyBlog.png" alt="ModifyBlog - Sbaiti Mohammed">
<img src="/public/AddBlog.png" alt="Addblog - Sbaiti Mohammed">
<img src="/public/BlogAdded.png" alt="blogAdded - Sbaiti Mohammed">

## Description

My Blog is a simple blogging platform built with React.js, a JavaScript library for building user interfaces. Users can create, delete, and modify blog posts. The application utilizes a locally hosted JSON server to manage and store blog data.

## Setup Instructions

1. **Run JSON Server**: First, ensure you have the JSON server package installed globally. If not, you can install it using:

   ```bash
   npm install -g json-server
   ```

   Then, navigate to your project directory and start the JSON server with the following command:

   ```bash
   json-server --watch data/db.json --port 8000
   ```

   You can specify any available port, ensuring it does not conflict with existing services.

2. **Install Node Modules**: After starting the JSON server, install the required Node modules by running:

   ```bash
   npm install
   ```

3. **Start the Application**: Once the Node modules are installed, start the application using:

   ```bash
   npm start
   ```

4. **Enjoy My Blog**: You're all set! You can now access My Blog locally. Feel free to create, delete, or modify blog posts on the locally hosted JSON server.

## Additional Notes

- If you encounter any issues or have any questions, please don't hesitate to reach out.
