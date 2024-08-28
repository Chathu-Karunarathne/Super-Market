import React, { useState, useEffect } from "react";

const AttendanceRecords = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Saman" },
    { id: 2, name: "Samantha" },
  ]);

  const [attendance, setAttendance] = useState({
    1: {
      "2024-08": { "2024-08-01": "Present", "2024-08-02": "Absent" },
      "2024-09": { "2024-09-01": "Present", "2024-09-02": "Leave" },
    },
    2: {
      "2024-08": { "2024-08-01": "Leave", "2024-08-02": "Present" },
      "2024-09": { "2024-09-01": "Absent", "2024-09-02": "Present" },
    },
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("2024-08");
  const [selectedYear, setSelectedYear] = useState("2024");
  const handleSearch = () => {
    const employee = employees.find(
      (emp) => emp.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSelectedEmployee(employee);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const renderMonthlyAttendance = () => {
    if (!selectedEmployee) return null;

    const monthlyAttendance =
      attendance[selectedEmployee.id]?.[selectedMonth] || {};
    return (
      <div>
        <h3 className="text-xl font-bold mb-2">
          Monthly Attendance for {selectedMonth}
        </h3>
        <ul>
          {Object.entries(monthlyAttendance).map(([date, status]) => (
            <li key={date} className="mb-1">
              {date}:{" "}
              <span className={`font-semibold ${getStatusClass(status)}`}>
                {status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderYearlyAttendance = () => {
    if (!selectedEmployee) return null;

    const yearlyAttendance = Object.entries(
      attendance[selectedEmployee.id] || {}
    )
      .filter(([key]) => key.startsWith(selectedYear))
      .map(([month, days]) => (
        <div key={month}>
          <h4 className="text-lg font-semibold">{month}</h4>
          <ul>
            {Object.entries(days).map(([date, status]) => (
              <li key={date} className="mb-1">
                {date}:{" "}
                <span className={`font-semibold ${getStatusClass(status)}`}>
                  {status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ));

    return (
      <div>
        <h3 className="text-xl font-bold mb-2">
          Yearly Attendance for {selectedYear}
        </h3>
        {yearlyAttendance}
      </div>
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Present":
        return "text-green-600";
      case "Absent":
        return "text-red-600";
      case "Leave":
        return "text-yellow-600";
      default:
        return "";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Attendance Records</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search employee by name"
          className="border px-4 py-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {selectedEmployee && (
        <div>
          <h3 className="text-xl font-bold mb-2">
            Attendance for {selectedEmployee.name}
          </h3>
          <div className="mb-4">
            <label htmlFor="month" className="mr-2">
              Select Month:
            </label>
            <select
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border px-2 py-1 rounded"
            >
              <option value="2024-08">August 2024</option>
              <option value="2024-09">September 2024</option>
              {}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="mr-2">
              Select Year:
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
              className="border px-2 py-1 rounded"
            >
              <option value="2024">2024</option>
              {}
            </select>
          </div>

          {renderMonthlyAttendance()}
          {renderYearlyAttendance()}
        </div>
      )}
    </div>
  );
};

export default AttendanceRecords;
