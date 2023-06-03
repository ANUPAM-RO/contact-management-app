import React from 'react';
import './App.css';
import Sidebar from './components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  return (
   <div className='App'>
      <Router>
        <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add-contact" element={<ContactForm />} />
            <Route path="/edit-contact/:id" element={<ContactList />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
