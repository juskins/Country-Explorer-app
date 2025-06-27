# Country Explorer - React Web App

![Country Explorer Screenshot](./screenshot.png)

A responsive React application that fetches and displays country data from the REST Countries API with filtering, sorting, and pagination capabilities.

## Features

- 🌍 Browse all countries with key information (name, capital, region, population, flag)
- 🔍 Search countries by name
- 🗺️ Filter by region (Africa, Americas, Asia, Europe, Oceania)
- 📊 Sort by population (ascending or descending)
- 📱 Responsive design for all devices
- 🔢 Pagination for easy navigation
- ⏳ Loading state while fetching data

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/country-explorer.git
cd country-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
run dev```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Reference

This project uses the [REST Countries API](https://restcountries.com/).

Endpoint used:
```
GET https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── CountryCard.js    # Individual country card component
│   ├── Filters.js        # Search and filter controls
│   └── Loading.js        # Loading spinner component
├── App.js                # Main application component
├── App.css               # Main styles
└── index.js              # Entry point
```



## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
