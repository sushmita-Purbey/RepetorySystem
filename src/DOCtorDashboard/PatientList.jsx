import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import PatientForm from "./PatientForm";


const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000
});

const PatientList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingPatient, setEditingPatient] = useState(null);
    const [sortConfig, setSortConfig] = useState({ field: 'name', order: 'asc' });

    const fetchPatients = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get('/api/patients', {
                params: {
                    sortField: sortConfig.field,
                    sortOrder: sortConfig.order
                }
            });
            console.log('Fetched data:', response.data); // Debug log
            setPatients(response.data);
        } catch (error) {
            console.error('Error details:', error.response || error); // Enhanced error logging
            const errorMessage = error.response?.status === 404 
                ? "Server not found. Please check if the backend is running."
                : "Error loading patients. Please try again.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, [sortConfig]);

    const handleSort = (field) => {
        setSortConfig(prevConfig => ({
            field,
            order: prevConfig.field === field && prevConfig.order === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.contact.includes(searchTerm)
    );

   // Modify these functions in your PatientList component:

const handleAddPatient = async (patientData) => {
    try {
        setError(null);
        const response = await api.post('/api/patients', patientData);
        setPatients(prev => [...prev, response.data]);
        setShowForm(false);
        
        // Emit event that patient list was updated
        window.dispatchEvent(new Event('patientListUpdated'));
    } catch (error) {
        setError("Error adding patient. Please try again.");
        console.error('Error adding patient:', error);
    }
};

const handleEditPatient = async (patientData) => {
    try {
        setError(null);
        const response = await api.put(`/api/patients/${editingPatient._id}`, patientData);
        setPatients(prev => 
            prev.map(p => p._id === editingPatient._id ? response.data : p)
        );
        setEditingPatient(null);
        
        // Emit event that patient list was updated
        window.dispatchEvent(new Event('patientListUpdated'));
    } catch (error) {
        setError("Error updating patient. Please try again.");
        console.error('Error updating patient:', error);
    }
};

const handleDeletePatient = async (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
        try {
            setError(null);
            await api.delete(`/api/patients/${id}`);
            setPatients(prev => prev.filter(p => p._id !== id));
            
            // Emit event that patient list was updated
            window.dispatchEvent(new Event('patientListUpdated'));
        } catch (error) {
            setError("Error deleting patient. Please try again.");
            console.error('Error deleting patient:', error);
        }
    }
};

    return (
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className="p-4 absolute right-0 w-[1250px] h-screen">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search patients..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="p-2 border rounded w-64"
                    />
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add New Patient
                    </button>
                </div>

                {loading ? (
                    <div className="text-center py-4">Loading...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('name')}>
                                        Name {sortConfig.field === 'name' && (sortConfig.order === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th className="px-6 py-3">Contact</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Problem</th>
                                    <th className="px-6 py-3">Prescription</th>
                                    <th className="px-6 py-3">Payment Mode</th>
                                    <th className="px-6 py-3">Amount</th>
                                    <th className="px-6 py-3">Time</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPatients.map((patient) => (
                                    <tr key={patient._id} className="border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">{patient.name}</td>
                                        <td className="px-6 py-4">{patient.contact}</td>
                                        <td className="px-6 py-4">{patient.date}</td>
                                        <td className="px-6 py-4">{patient.problem}</td>
                                        <td className="px-6 py-4">{patient.prescription}</td>
                                        <td className="px-6 py-4">{patient.paymentMode}</td>
                                        <td className="px-6 py-4">{patient.amount}</td>
                                        <td className="px-6 py-4">{patient.time}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => setEditingPatient(patient)}
                                                className="text-blue-500 hover:text-blue-700 mr-2"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeletePatient(patient._id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {(showForm || editingPatient) && (
                    <PatientForm
                        onSubmit={editingPatient ? handleEditPatient : handleAddPatient}
                        onCancel={() => {
                            setShowForm(false);
                            setEditingPatient(null);
                        }}
                        initialData={editingPatient}
                    />
                )}
            </div>
        </div>
    );
};

export default PatientList;