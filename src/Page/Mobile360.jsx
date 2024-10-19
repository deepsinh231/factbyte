// src/components/PhoneSearch.js

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TBSelector, Mobile360 } from '../Store/Reducers/TBSlice';

const PhoneSearch = () => {
  const [searchNumber, setsearchNumber] = useState('');
  const dispatch = useDispatch();
  const { Mobile360Data } = useSelector(TBSelector);
  useEffect(() => {
    console.log("UsersigninData>>>",Mobile360Data);

  }, [Mobile360Data])

  const handleSearch = () => {
    if (searchNumber.length === 10) {
      dispatch(Mobile360(searchNumber));
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
          value={searchNumber}
          onChange={(e) => setsearchNumber(e.target.value)}
          placeholder="Enter 10-digit phone number"
          className="border p-2 rounded"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>

      {/* {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <div className="mt-4">
          <h2 className="text-xl">Search Result:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default PhoneSearch;
