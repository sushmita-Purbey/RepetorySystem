import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    countryCode: "+91",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.match(/^[a-zA-Z ]{3,}$/)) {
      newErrors.name = "Name must be at least 3 letters and contain only alphabets.";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)) {
      newErrors.password = "Password must be at least 6 characters and contain both letters and numbers.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.phone.match(/^[0-9]{10}$/)) {
      newErrors.phone = "Phone number must be exactly 10 digits (0-9 only).";
    }
    if (formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      setFormData({ name: "", email: "", password: "", confirmPassword: "", phone: "", countryCode: "+91", address: "" });
      navigate("/login");
    }
  };
  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // Integrate Firebase Auth or OAuth here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-left px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('public/front-view-female-researcher-with-medical-mask-vaccine 1.png')" }}>
      <div className="absolute inset-0 bg-blue-800 opacity-20"></div>
      
      <div className="absolute top-20 max-w-md w-full space-y-3 p-6 rounded-2xl shadow-2xl bg-blue-500 bg-opacity-20 backdrop-blur-md">
        <h2 className="text-center text-3xl font-extrabold text-black">Create Your Account</h2>
        <form className="mt-8 space-y-3 text-" onSubmit={handleSubmit}>
          <div>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="input-field w-full flex items-center justify-center  py-3 px-4 border rounded-md font-semibold  text-black bg-transparent placeholder-gray-700 " />
            {errors.name && <p className="error-message text-blue-900 text-xs">{errors.name}</p>}
          </div>

          <div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="input-field w-full flex items-center justify-center  py-3 px-4 border rounded-md font-semibold  text-black bg-transparent placeholder-gray-700 " />
            {errors.email && <p className="error-message text-blue-900 text-xs">{errors.email}</p>}
          </div>

          <div>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="input-field w-full flex items-center justify-center  py-3 px-4 border rounded-md font-semibold  text-black bg-transparent placeholder-gray-700 " />
            {errors.password && <p className="error-message text-blue-900 text-xs">{errors.password}</p>}
          </div>

          <div>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="input-field w-full flex items-center justify-center  py-3 px-4 border rounded-md font-semibold  text-black bg-transparent placeholder-gray-700 " />
            {errors.confirmPassword && <p className="error-message text-blue-900 text-xs">{errors.confirmPassword}</p>}
          </div>

          <div className="flex border">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="input-field w-[160px] flex items-center justify-center  py-3 px-1  rounded-md font-semibold  text-black bg-transparent placeholder-gray-700 ">
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
            </select>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input-field w-full flex items-center justify-center  py-3 px-4  rounded-md font-semibold  text-black bg-transparent placeholder-gray-700 " />
            {errors.phone && <p className="error-message text-blue-900 text-xs">{errors.phone}</p>}
          </div>

          <div>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="input-field w-full flex items-center justify-center  py-3 px-4 border rounded-md font-semibold  text-black bg-transparent placeholder-gray-700 " />
            {errors.address && <p className="error-message text-blue-900 text-xs">{errors.address}</p>}
          </div>

          <button
              type="submit"
              className="group  relative w-full py-2 px-4 border border-transparent text-lg font-medium rounded-md text-black bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </button>
        </form>
             {/* Google Login Button */}
             <div className="mt-1 flex flex-col items-center">
          <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 py-3 px-4 border rounded-md font-semibold  text-black ">
            <img src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png" alt="Google" className="w-6 h-6" />
            Login with Google
          </button>
        </div>
            {/* Login Link */}
                {/* Login Link */}
        <div className="text-center ">
          <p className="text-sm text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:text-blue-900 font-semibold">
              Log in here
            </Link>
          </p>
        </div>
          
        <button className=" absolute top-[550px] transform active:scale-95 transition-transform   left-[850px] bg-blue-600 font-semibold h-10 w-[100px] rounded px-3 py-1" onClick={handleBack}>Go Back</button>
      </div>
    </div>
  );
};

export default CreateAccount;