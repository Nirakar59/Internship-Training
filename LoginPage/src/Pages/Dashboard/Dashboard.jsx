import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HandleData = ({ setAcademicData, setIsPresent }) => {
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://office.lunarit.com.np/api/academicsession/getlist', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setAcademicData(data);
          setIsPresent(true);
        } else {
          setIsPresent(false);
        }
      } catch (err) {
        console.log(err);
        setIsPresent(false);
      }
    };

    fetchData();
  }, [authToken, setAcademicData, setIsPresent]);

  return null; 
};

function Dashboard() {
  const [isPresent, setIsPresent] = useState(false);  
  const [academicData, setAcademicData] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <>
      <HandleData setAcademicData={setAcademicData} setIsPresent={setIsPresent} />
      <div className="flex items-center justify-center h-50vh bg-green-100">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
      </div>
      <button className="bg-gray-400 m-3 p-4 rounded-lg" onClick={handleLogout}>
        Log Out
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {isPresent ? (
          academicData.map((item) => (
            <div key={item.SessionId} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{item.SessionName}</h3>
              <p className="text-gray-600 mt-2">Session ID: {item.SessionId}</p>
              <p className="text-gray-600">Start Date: {item.SessionStartDate}</p>
              <p className="text-gray-600">End Date: {item.SessionEndDate}</p>
            </div>
          ))
        ) : (
          <div>
            <h3>No data available yet</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
