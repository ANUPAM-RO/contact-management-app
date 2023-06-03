import React from 'react';
import './App.css';
import Sidebar from './components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import WorldWideCases from './components/WorldWideCases';
import CountryWiseCases from './components/CountryWiseCases';
import CovidCases from './components/CovidCases';

function App() {
  return (
   <div className='App'>
      <Router>
        <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add-contact" element={<ContactForm />} />
            <Route path="/edit-contact/:id" element={<ContactList />} />
            <Route path="/chart" element={<CovidCases />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
