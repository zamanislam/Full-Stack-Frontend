import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../styles/Drawer.css'
import { Link, useNavigate } from 'react-router-dom';

const Drawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate('/product');
  }
  return (
    <div
      className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 bg-gray-800 bg-opacity-50`}
    >
      <div className="w-72 h-full bg-white shadow-md">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Menu</h2>
          <FaTimes className="text-xl cursor-pointer" onClick={onClose} />
        </div>

        <div className="p-4 space-y-4">
          <button onClick={handleNavigate}
          className="w-full text-left p-2 bg-gray-100 rounded">Furniture</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Outdoor</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Bedding & Bath</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Rugs</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Decor & Pillows</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Lighting</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Organization</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Kitchen</button>
          <button className="w-full text-left p-2 bg-gray-100 rounded">Baby & Kids</button>
          
        </div>

        <div className="p-4">
          <button onClick={onClose} id='but' className="w-full p-2 text-white rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
