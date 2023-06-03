import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";
import Sidebar from "./SideBar";

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  let id = Math.floor(Math.random() * 1000) + 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(id, fname, lname, status);
    dispatch(addContact({ id, fname, lname, status }));
    setFname("");
    setLname("");
    setStatus("");
  };

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="ml-48 mt-10 border-solid border-2 border-gray-600 h-1/2 p-10">
      <form onSubmit={handleSubmit} >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              First Name:{" "}
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
              Last Name:{" "}
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
          <div className="flex flex-col gap-4 md:w-2/3">
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
          Save Contact
        </button>
      </form>

      </div>
    </div>
  );
};

export default ContactForm;
