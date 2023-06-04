import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../redux/actions";
import Sidebar from "./SideBar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {useParams } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();
  let {contactId} = useParams();
  const editableContact =  contacts?.filter((data)=> data.id === contactId)
  const [fname, setFname] = useState<string>(editableContact[0]?.fname || "");
  const [lname, setLname] = useState<string>(editableContact[0]?.lname || "");
  const [status, setStatus] = useState<string>(editableContact[0]?.status ||"");
  let newId = Math.floor(Math.random() * 1000) + 1;
 
  console.log(contacts)
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactId) {
     const id =  contactId;
      dispatch(updateContact({id , fname, lname, status}));
    } else {
       let id = newId.toString();
      dispatch(addContact({ id, fname, lname, status }));
    }
    setFname("");
    setLname("");
    setStatus("");
  };

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="h-full w-full flex flex-col items-center mt-12">
        <span className="text-2xl p-5">{editableContact.length ? 'Update Contact Page' : 'Create Contact Page'}</span>
      <form onSubmit={handleSubmit} className="border-solid border-2 border-gray-600 h-1/2 p-10">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              First Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Last Name:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 md:w-1/3">
            Staus:
          </div>
          <div className="flex flex-col items-start gap-4 md:w-2/3">
            <div>
              <input
                type="radio"
                value="Active"
                checked={status === "Active"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label> Active </label>
            </div>
            <div>
              <input
                type="radio"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label> Inactive </label>
            </div>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          >
            {editableContact.length ? 'Save Editted Contact' : ' Save Contact'}
         
        </button>
      </form>

      </div>
    </div>
  );
};

export default ContactForm;
