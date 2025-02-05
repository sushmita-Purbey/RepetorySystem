import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const { doctorName } = useParams();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    date: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [isFormComplete, setIsFormComplete] = useState(false);

  // Validation function (validates only current step)
  const validate = (step) => {
    let newErrors = {};

    if (step === 1) {
      if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
        newErrors.name = "Name should contain only alphabets.";
      }
      if (!/^[0-9]+$/.test(formData.age) || parseInt(formData.age) <= 0) {
        newErrors.age = "Age should be a valid positive number.";
      }
      if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        newErrors.email = "Enter a valid email address.";
      }
    } else if (step === 2) {
      if (formData.address.trim().length < 5) {
        newErrors.address = "Address must be at least 5 characters long.";
      }
      if (!formData.date) {
        newErrors.date = "Please select a valid date.";
      }
      if (formData.reason && formData.reason.trim().length < 5) {
        newErrors.reason = "Reason must be at least 5 characters long.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors dynamically as user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Next step handler
  const nextStep = () => {
    if (validate(step)) {
      setStep((prev) => prev + 1);
    }
  };

  // Previous step handler
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(2)) {
      setIsFormComplete(true);
      navigate(`/booking-confirmation`, { state: { doctorName, formData } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6 bg-cover overflow-hidden h-full" style={{ backgroundImage: "url('/appoinbg.jpg')" }}>
      <div className="flex w-full max-w-4xl h-full">
        <div className="w-full max-w-sm p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-800 text-left">Book an Appointment</h1>
          <p className="text-lg text-gray-700 my-4 text-left">
            You are booking an appointment with <strong>{doctorName}</strong>.
          </p>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <label className="block mb-2 text-gray-700 text-sm">Your Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg mb-1 text-sm" placeholder="Enter your name" />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                <label className="block mb-2 text-gray-700 text-sm">Age *</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded-lg mb-1 text-sm" placeholder="Enter your age" />
                {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}

                <label className="block mb-2 text-gray-700 text-sm">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-lg mb-1 text-sm" placeholder="Enter your email" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </>
            )}

            {step === 2 && (
              <>
                <label className="block mb-2 text-gray-700 text-sm">Address *</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-lg mb-1 text-sm" placeholder="Enter your address" />
                {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}

                <label className="block mb-2 text-gray-700 text-sm">Appointment Date *</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-lg mb-1 text-sm" />
                {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}

                <label className="block mb-2 text-gray-700 text-sm">Reason for Visit (Optional)</label>
                <textarea name="reason" value={formData.reason} onChange={handleChange} className="w-full p-2 border rounded-lg mb-1 text-sm" placeholder="Enter reason for visit (optional)"></textarea>
                {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
              </>
            )}

            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition text-sm">
                  Previous
                </button>
              )}
              {step < 2 ? (
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm">
                  Next
                </button>
              ) : (
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm">
                  Confirm Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
