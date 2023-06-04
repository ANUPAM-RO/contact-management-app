import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteContact, updateContact } from '../redux/actions';
import Sidebar from './SideBar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id: string) => {
    navigate(`/edit-contact/${id}`)
  };

  const handleSave = (id: string) => {
    dispatch(updateContact({id, fname, lname, status}));
    setEditingContactId(null);
     setFname('');
    setLname('');
    setStatus('');
  };

  return (
    <div className='flex'>
      <div >
        <Sidebar />
      </div>
      {contacts?.length ?
        <div className='w-full flex items-center flex-col gap-10 pt-10'>
          <Link to="/add-contact">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Contact </button>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {contacts.map((contact) => (
          <div key={contact.id}>
                <div >
                  <div className="border-solid border-2 border-gray-600 p-10 mb-5">
                  <div className='text-blue-500 md:text-2xl'>First Name -
                  <span className='text-green-500 font-bold md:text-2xl'> {contact.fname}</span>  
                  </div>
                  <div className='text-blue-500 md:text-2xl'>Last Name -
                  <span className='text-green-500 font-bold md:text-2xl'> {contact.lname}</span>  
                  </div>
                  <div className='text-blue-500 md:text-2xl'>Status -
                  <span className='text-green-500 font-bold md:text-2xl'> {contact.status}</span>  
                  </div>

                  </div>
                  <div className='flex flex-col gap-5 items-center'>
                    <button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-32" onClick={() => handleEdit(contact.id)}>Edit</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-32" onClick={() => handleDelete(contact.id)}>Delete</button>
                  </div>
              </div>
          </div>
        ))}
            </div>
      </div> :
        <div className='w-full flex items-center flex-col gap-10 pt-10'>
          <Link to="/add-contact">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Contact </button>
          </Link>
          <div className="border-solid border-2 border-gray-600 w-1/3 p-5 flex justify-center items-center">
            <div>
              <img src='./cross.png' alt='' />
            </div>
            <p className="font-bold text-orange-400 text-xl">No contact Found Please add contact from create contact Button</p>
            </div>
        </div>
      }
    </div>
  );
};

export default ContactList;
