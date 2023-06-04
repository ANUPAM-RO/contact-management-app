import React from 'react';
import { Link} from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-full min-h-screen flex-1 h-full">
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold">Sidebar</h1>
      </div>
      <nav className="mt-6">
        <Link to='/' className="flex items-center py-2 px-6">
          <svg
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current text-gray-500"
              d="M9 19c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-3H9v3zm-3-4h12V8H6v7zm6-11a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          Contact
        </Link>
        <Link to='/chart' className="flex items-center py-2 px-6">
          <svg
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current text-gray-500"
              d="M12 3c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1V4c0-.552.448-1 1-1zm0 4c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1zm0 4c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1zm0 4c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1zm7.399-15.756a.503.503 0 0 1 .328.756l-8 12A.5.5 0 0 1 11 19h-2a.5.5 0 0 1-.328-.756l8-12a.5.5 0 0 1 .756-.072zm-1.137 1.512L12 15.586 6.738 5.756h4.524z"
            />
          </svg>
         Chart And Maps
        </Link>
      
      </nav>
    </div>
  );
};

export default Sidebar;
