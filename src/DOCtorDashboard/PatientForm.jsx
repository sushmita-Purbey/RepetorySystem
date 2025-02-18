import { useState, useEffect } from 'react';

const PatientForm = ({ onSubmit, onCancel, initialData = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        date: '',
        problem: '',
        prescription: '',
        paymentMode: '',
        amount: '',
        time: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            contact: '',
            date: '',
            problem: '',
            prescription: '',
            paymentMode: '',
            amount: '',
            time: ''
        });
        onCancel();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">
                    {initialData ? 'Edit Patient' : 'Add New Patient'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border rounded"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Contact"
                            className="w-full p-2 border rounded"
                            value={formData.contact}
                            onChange={(e) => setFormData({...formData, contact: e.target.value})}
                            required
                        />
                        <input
                            type="date"
                            className="w-full p-2 border rounded"
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Problem"
                            className="w-full p-2 border rounded"
                            value={formData.problem}
                            onChange={(e) => setFormData({...formData, problem: e.target.value})}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Prescription"
                            className="w-full p-2 border rounded"
                            value={formData.prescription}
                            onChange={(e) => setFormData({...formData, prescription: e.target.value})}
                            required
                        />
                        <select
                            className="w-full p-2 border rounded"
                            value={formData.paymentMode}
                            onChange={(e) => setFormData({...formData, paymentMode: e.target.value})}
                            required
                        >
                            <option value="">Select Payment Mode</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="UPI">UPI</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Amount"
                            className="w-full p-2 border rounded"
                            value={formData.amount}
                            onChange={(e) => setFormData({...formData, amount: e.target.value})}
                            required
                        />
                        <input
                            type="time"
                            className="w-full p-2 border rounded"
                            value={formData.time}
                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {initialData ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientForm;