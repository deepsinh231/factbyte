// src/components/PhoneSearch.js

import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhoneNumber } from '../Store/PhoneReducer';

const PhoneSearch = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.phone);

  const handleSearch = () => {
    if (phoneNumber.length === 10) {
      dispatch(searchPhoneNumber(phoneNumber));
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl mb-4">Search Phone Number</h1>
      <div className="flex">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter 10-digit phone number"
          className="border p-2 rounded"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <div className="mt-4">
          <h2 className="text-xl">Search Result:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PhoneSearch;
