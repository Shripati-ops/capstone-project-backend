# Backend Service README

Welcome to our backend service documentation. This service provides functionality for managing users and campaigns.

## Users Module

### Overview

The users module handles user registration, login, and generation of access tokens for authentication.

### Features

1. **Registration:**
   - Allows users to create a new account by providing necessary details.
2. **Login:**
   - Provides authentication for registered users by verifying credentials.
3. **Generation of New Access Token:**
   - Generates a new access token for authenticated users to access protected routes.

## Campaign Module

### Overview

The campaign module manages campaigns and associated functionalities.

### Features

1. **Route Protection using Guards:**
   - Ensures that only authenticated users can access campaign-related routes.
2. **Listing of All Campaigns:**
   - Provides a list of all existing campaigns for easy reference and management.
3. **Creation of Campaigns:**
   - Enables users to create new campaigns with relevant details.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd <project_directory>`
3. Install dependencies: `npm install`

### Configuration

1. Set up environment variables:
   - Create a `.env` file based on the `.env.example` template.
   - Update the variables with appropriate values, such as database connection URI and JWT secret.

### Running the Service

1. Start the server: `npm run start:dev`
2. The service will be accessible at the configured port (default: 3000).
