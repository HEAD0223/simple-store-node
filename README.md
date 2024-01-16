# Simple Store (**Server**) · Telegram Bot

![Server](https://img.shields.io/badge/Server-Simple_Store-brightgreen)
![Self Development](https://img.shields.io/badge/Project-Self_Development-red)
![License](https://img.shields.io/badge/License-MIT-yellow)

A Node.js application serving as a Telegram Bot for Simple Store, providing basic mechanics.

## Table of Contents

-  [Folder Structure](#folder-structure)
-  [Usage](#usage)
-  [Contributing](#contributing)
-  [Dependencies](#dependencies)

## Folder Structure

-  **index.js:** Main server file responsible for handling the Telegram bot functionality and serving the Simple Store.

## Usage

1. Clone the repository:

```bash
git clone https://github.com/HEAD0223/simple-store-node.git
cd simple-store-node
```

2. Install dependencies:

```bash
npm install
```

3. Add .env:

```bash
TOKEN='TOKEN'
WebAppUrl='LINK'
PORT=8000
```

4. Start the Node.js server:

```bash
npm start
```

5. The server should be running on the specified port (default is 8000).

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## Dependencies

-  **cors:** Middleware for enabling CORS in the server.
-  **dotenv:** Loads environment variables from a .env file.
-  **express:** Web application framework for Node.js.
-  **node-telegram-bot-api:** Telegram Bot API library for Node.js, providing an interface for interacting with the Telegram Bot API.
-  **nodemon:** A tool that helps in the development of Node.js-based applications by automatically restarting the server.

Make sure to include these dependencies in your project.
