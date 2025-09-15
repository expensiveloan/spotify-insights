# Spotify Insights

## Overview
Spotify Insights is a web application that allows users to connect their Spotify accounts and view their listening statistics, including minutes listened, top artists, top albums, and top genres. The application features a modern black and yellow user interface and provides an easy way to access your Spotify data.

## Features
- Connect your Spotify account
- View total minutes listened
- Discover your top artists, albums, and genres
- Modern black and yellow UI
- Contact page with a link to our Discord server

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)
- A Spotify Developer account to create an application and obtain your API credentials.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/spotify-insights.git
   ```
2. Navigate to the project directory:
   ```
   cd spotify-insights
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env.local` file in the root directory and add your Spotify API credentials:
   ```
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:3000/api/callback
   ```
2. Replace `your_client_id` and `your_client_secret` with the credentials from your Spotify Developer application.

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

### Deployment
To deploy the application on Vercel:
1. Push your code to a GitHub repository.
2. Sign in to Vercel and import your GitHub repository.
3. Set up the environment variables in the Vercel dashboard.
4. Deploy the application.

## Contact
For any questions or support, please join our Discord server: [Join Discord](https://discord.gg/yourdiscordlink)

## License
This project is licensed under the MIT License. See the LICENSE file for details.