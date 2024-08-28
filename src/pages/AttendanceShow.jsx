import React, { useState } from 'react';

const AttendanceSheet = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more employees as needed
  ]);

  const [dates, setDates] = useState([
    '2024-08-26',
    '2024-08-27',
    '2024-08-28',
    // Add more dates as needed
  ]);

  const [attendance, setAttendance] = useState({});

  const toggleAttendance = (employeeId, date) => {
    setAttendance((prevAttendance) => {
      const currentStatus = prevAttendance[`${employeeId}_${date}`] || '';
      const newStatus = currentStatus === 'Present' ? 'Absent' : 'Present';
      return { ...prevAttendance, [`${employeeId}_${date}`]: newStatus };
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Present':
        return 'bg-green-200 text-green-800';
      case 'Absent':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Attendance Sheet</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee
            </th>
            {dates.map((date) => (
              <th key={date} className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="px-6 py-4 border-b border-gray-200">{employee.name}</td>
              {dates.map((date) => (
                <td
                  key={date}
                  className={`px-6 py-4 border-b border-gray-200 cursor-pointer ${getStatusClass(attendance[`${employee.id}_${date}`])}`}
                  onClick={() => toggleAttendance(employee.id, date)}
                >
                  {attendance[`${employee.id}_${date}`] || 'Mark'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceSheet;
