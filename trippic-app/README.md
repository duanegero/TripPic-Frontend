# TripPic Frontend React + Vite App

This is a web application built with react + vite. It will allow users to send requests to backend API with GET, POST, PUT and DELETE requests.

- [Features](#features)
- [Installation](#installation)
- [Backend Repository](#backend)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User-friendly interface for uploading, managing and viewing images.
- Intergration with TripPic API for seamless data synchronization.
- Real-time updates and responsive design.

## Installation

1. Clone Repository<br>
   `git clone https://github.com/duanegero/TripPic-Frontend.git`
2. Navigate to the Project Directory
3. Install Dependencies:<br>
   `npm install`
4. Start Server<br>
   `npm run dev`
5. Open app in browser<br>
   `http://localhost:5173/`

## Backend

### TripPic API

https://github.com/duanegero/TripPicAPI.git

## API Endpoints

The application intteracts with endpoints hosted by the backend api.

- GET `imageRoute/:key` - Get a single image from s3 bucket and image details from database.
- POST `usersRoute/` - Post a new user.
- PUT `usersRoute/:id` - Put new user details to database by ID.
- DELETE `userRoute/:id` - Delete user from database.

Visit the [TripPic API Docs](https://github.com/duanegero/TripPicAPI.git) for more details.

## License

This project is licensed under the MIT License.
