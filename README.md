# Spotify API App

This application allows users to log in to their Spotify account using the **Spotify API**. Once logged in, users can view their playlists, select a playlist, and explore the songs within it. Built using **React** and styled with **TailwindCSS**, the app provides a sleek and responsive interface for interacting with Spotify data.

---

## Features

- **Spotify Login**: Authenticate users using their Spotify account via the Spotify Web API.
- **Playlist Details**: Fetch and display playlists from the user's Spotify account.
- **Songs in Playlist**: List songs from the selected playlist with relevant details.
- **Responsive Design**: Modern UI created with TailwindCSS, ensuring compatibility across devices.

---

## Technologies Used

- **React**: For building the user interface.
- **TailwindCSS**: For styling and layout.
- **Spotify Web API**: For authentication and data fetching.

---

## Prerequisites

To run this application locally, ensure you have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn**

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mouleshleo/spotify-api-app.git
   cd spotify-api-app
   ``` 

2. **Install Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Navigate to the `auth-server/authorization/authorization_code` and run this command**
   ```bash
   npm install
   npm start
   ```
   - it will start listening in `http://localhost:8888/`

4. **Then go to the client directory to start the project**


5. **Start the Application**
   ```bash
   npm start
   ```
   - Open your browser and navigate to `http://localhost:3000/`.

---

## Usage

1. **Login**: Click the login button to authenticate with your Spotify account.
2. **View Playlists**: After logging in, your Spotify playlists will be displayed.
3. **Explore Songs**: Select a playlist to view the songs it contains.

---

## Screenshots



---


## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

