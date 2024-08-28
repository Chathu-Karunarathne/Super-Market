import React, { useState } from 'react';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        nic: '',
        name: '',
        address: '',
        gender: '',
        phoneNumber: '',
        dateOfBirth: '',
        position: '',
        salary: ''
    });
    const [editIndex, setEditIndex] = useState(-1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleAddEmployee = () => {
        if (editIndex === -1) {
            setEmployees([...employees, newEmployee]);
        } else {
            const updatedEmployees = employees.map((emp, index) =>
                index === editIndex ? newEmployee : emp
            );
            setEmployees(updatedEmployees);
            setEditIndex(-1);
        }
        setNewEmployee({
            nic: '',
            name: '',
            address: '',
            gender: '',
            phoneNumber: '',
            dateOfBirth: '',
            position: '',
            salary: ''
        });
    };

    const handleEditEmployee = (index) => {
        setNewEmployee(employees[index]);
        setEditIndex(index);
    };

    const handleRemoveEmployee = (index) => {
        const updatedEmployees = employees.filter((_, empIndex) => empIndex !== index);
        setEmployees(updatedEmployees);
    };

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Employee Management</h1>
            <table className="w-full table-auto border-collapse mb-6">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">NIC</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Address</th>
                        <th className="border px-4 py-2">Gender</th>
                        <th className="border px-4 py-2">Phone Number</th>
                        <th className="border px-4 py-2">Date of Birth</th>
                        <th className="border px-4 py-2">Position</th>
                        <th className="border px-4 py-2">Salary</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{employee.nic}</td>
                            <td className="border px-4 py-2">{employee.name}</td>
                            <td className="border px-4 py-2">{employee.address}</td>
                            <td className="border px-4 py-2">{employee.gender}</td>
                            <td className="border px-4 py-2">{employee.phoneNumber}</td>
                            <td className="border px-4 py-2">{employee.dateOfBirth}</td>
                            <td className="border px-4 py-2">{employee.position}</td>
                            <td className="border px-4 py-2">{employee.salary}</td>
                            <td className="border px-4 py-2 text-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => handleEditEmployee(index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded"
                                    onClick={() => handleRemoveEmployee(index)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-4">
                {editIndex === -1 ? 'Add Employee' : 'Edit Employee'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <input
                    type="text"
                    name="nic"
                    placeholder="NIC"
                    value={newEmployee.nic}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newEmployee.address}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={newEmployee.gender}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={newEmployee.phoneNumber}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    value={newEmployee.dateOfBirth}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={newEmployee.position}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    value={newEmployee.salary}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                />
            </div>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddEmployee}
            >
                {editIndex === -1 ? 'Add Employee' : 'Update Employee'}
            </button>
        </div>
    );
};

export default Employee;
