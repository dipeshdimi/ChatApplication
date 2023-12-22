# Chat Application

A chat application built using React, Firebase (Firestore database), SCSS, and EmailJS (for OTP verification).

## Table of Contents

- [Chat Application](#chat-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Authentication](#authentication)
  - [Conversations](#conversations)
  - [Message Types](#message-types)
  - [Logout](#logout)
  - [License](#license)

## Introduction

This is a real-time chat application that enables users to register, authenticate, and engage in conversations with other registered users. It supports various message types, including text, pictures, videos, and voicemails.

## Features

- User registration with username, email, password, and picture (optional)
- User authentication using Firebase
- User-to-user conversations
- Message types: text, picture, video, and voicemail
- Conversation deletion
- Logout functionality

## Getting Started

Follow these steps to set up and run this Chat App locally.

### Prerequisites

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Firebase account with Firestore enabled

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/dipeshdimi/ChatApplication.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Firebase:**

   - Create a Firebase project and enable Firestore.
   - Obtain your Firebase configuration and update the app accordingly.

4. **Start the app:**

    ```bash
    npm start
    ```

## Usage

Once the app is running, open it in your web browser and follow the on-screen instructions for registration and login. Explore the various features and functionalities of the College Chat App.

## Authentication

User authentication is handled securely using Firebase. Users can register with their email, username, password, and picture (optional). An OTP will be shared (via EmailJS to the registered email address which would be required for further verification. Subsequent logins require the user's email and password.

## Conversations

Users can search for other registered users and initiate conversations with them. Conversations can be deleted entirely from the user's side.

## Message Types

The app supports different message types:

- **Text**: Send and receive text messages.
- **Picture**: Share images with other users.
- **Video**: Send and view video messages.
- **Voicemail**: Record and send voice messages.

## Logout

Users can log out of the app securely, ensuring the privacy of their data.

## License

This project is licensed under the [MIT License](LICENSE).
