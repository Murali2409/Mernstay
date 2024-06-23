# Mernstay

# Overview
Mernstay is a hotel room booking platform developed using the MERN stack (MongoDB, Express.js, React, Node.js). This README provides instructions on setting up the backend environment locally using MongoDB Compass, Mailtrap for email testing, Stripe for payment testing, and Cloudinary for fast image loading.

# Prerequisites
1. Node.js and npm
2. MongoDB Compass
3. Mailtrap account
4. Stripe account
5. Cloudinary account

# Installation
1. Clone the Repository: git clone

2. Install dependencies: npm install

3. Configure Environment Variables:

        PORT=5000  
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret 
        MAILTRAP_USER=your_mailtrap_username 
        MAILTRAP_PASS=your_mailtrap_password 
        STRIPE_SECRET_KEY=your_stripe_secret_key 
        CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name 
        CLOUDINARY_API_KEY=your_cloudinary_api_key 
        CLOUDINARY_API_SECRET=your_cloudinary_api_secret 

4. MongoDB Setup:
       
       - Open MongoDB Compass. 
       - Connect to your MongoDB server using the connection string provided in the .env file. 
       - Create a database named mernstay and the necessary collections. 

5. Run the server:

         npm start


**Using Mailtrap for Email Testing:**

Sign up for a Mailtrap account.
Create an inbox in Mailtrap.
Copy the SMTP credentials (username and password) to the MAILTRAP_USER and MAILTRAP_PASS variables in the .env file.
Emails sent from the application will appear in your Mailtrap inbox.

**Using Stripe for Payment Testing:**

Sign up for a Stripe account.
Obtain your Stripe secret key from the dashboard.
Set the STRIPE_SECRET_KEY variable in the .env file.
Use Stripe's test card numbers to simulate transactions.

**Using Cloudinary for Fast Image Loading:**

Sign up for a Cloudinary account.
Get your Cloudinary credentials (cloud name, API key, and API secret).
Set the CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET variables in the .env file.
Uploaded images will be managed and delivered by Cloudinary.

**API Documentation:**

API endpoints and their functionalities will be documented here. Include routes for user authentication, property listings, bookings, etc.
