// ContactList.tsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteContact, updateContact } from '../redux/actions';
import Sidebar from './SideBar';
import { Link} from 'react-router-dom';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const [editingContactId, setEditingContactId] = useState<number | null>(null);
  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const dispatch = useDispatch();

  console.log(contacts)

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id: number) => {

    setEditingContactId(id);
    setFname('');
    setLname('');
    setStatus('');
  };

  const handleSave = (id: number) => {
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
          <div className="grid grid-cols-3 gap-4">

        {contacts.map((contact) => (
          <div key={contact.id}>
            {editingContactId === contact.id ? (
              <>
                <label>First Name: </label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <label>Last Name: </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <label>Staus: </label>
                <label> Active </label>
                <input
                  type="radio"
                  value="active"
                  checked={status === "active"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label> Inactive </label>
                <input
                  type="radio"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                />
  
                <button onClick={() => handleSave(contact.id)}>Save Editted Contact </button>
              </>
            ) : (
                <div >
                  <div className="border-solid border-2 border-gray-600 p-10 mb-5">
                  <div className='text-blue-500 text-2xl'>First Name -
                  <span className='text-green-500 font-bold text-2xl'> {contact.fname}</span>  
                  </div>
                  <div className='text-blue-500 text-2xl'>Last Name -
                  <span className='text-green-500 font-bold text-2xl'> {contact.lname}</span>  
                  </div>
                  <div className='text-blue-500 text-2xl'>Status -
                  <span className='text-green-500 font-bold text-2xl'> {contact.status}</span>  
                  </div>

                  </div>
                  <div className='flex flex-col gap-5'>

                <button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(contact.id)}>Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(contact.id)}>Delete</button>
                  </div>
              </div>
            )}
          </div>
        ))}
            </div>
      </div> :
        <div className='w-full flex items-center flex-col gap-10 pt-10'>
          <Link to="/add-contact">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Contact </button>
          </Link>
          <div className="border-solid border-2 border-gray-600 w-1/3">
            <p className="font-bold text-orange-400">No contact Found Please add contact from create contact Button</p>
            </div>
        </div>
      }
    </div>
  );
};

export default ContactList;
