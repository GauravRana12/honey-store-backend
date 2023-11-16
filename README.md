**Honey Store: A Web Application for Managing Honey Sales**

Welcome to the Honey Store, a web application built using Express.js, MongoDB, Mongoose, Google OAuth, and bcrypt. This application allows users to create accounts, browse and purchase honey products, and manage their orders.

**Key Features:**

* **User Authentication:** Users can create accounts and securely log in using Google OAuth.
* **Product Management:** Admins can add, edit, and delete honey products, including their descriptions, prices, and images.
* **Order Management:** Users can place orders for honey products, track their order status, and view their order history.

**Technologies Used:**

* **Express.js:** A Node.js framework for building web applications.
* **MongoDB:** A NoSQL database for storing application data.
* **Mongoose:** An object data modeling (ODM) library for MongoDB.
* **Google OAuth:** An authentication protocol for securely logging in users using their Google accounts.
* **bcrypt:** A password hashing library for secure password storage.

**Installation:**

1. Clone the project repository:

```bash
git clone https://github.com/YOUR_USERNAME/honey-store-web-app.git
```

2. Install project dependencies:

```bash
npm install
```

3. Create a `.env` file and add the following environment variables:

```
DB_URI=<your MongoDB connection URI>
GOOGLE_OAUTH_CLIENT_ID=<your Google OAuth client ID>
GOOGLE_OAUTH_CLIENT_SECRET=<your Google OAuth client secret>
```

4. Start the application:

```bash
npm start
```

**Usage:**

1. Open the application in your web browser:

```
http://localhost:3000
```

2. Create a user account using Google OAuth.
3. Browse and purchase honey products.
4. Manage your orders from your account dashboard.


