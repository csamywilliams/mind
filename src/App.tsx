import React from 'react';
import { ThemeProvider } from "styled-components";
import './App.css';

import Dashboard from "./components/pages/dashboard"

import { theme } from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
