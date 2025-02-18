import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaRegClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const symptoms = [
    { name: "Asthma", img: "/img1.png" },
    { name: "Ear Infection", img: "/img2.png" },
    { name: "Cancer", img: "/img3.png" },
    { name: "Allergies", img: "/img4.png" },
    { name: "Dermatitis", img: "/img5.png" },
    { name: "Arthritis", img: "/img6.png" },
    { name: "Fever", img: "/img7.png" },
    { name: "High blood pressure", img: "/img8.png" },
    { name: "Nose Infection", img: "/img9.png" }
  ];

  const navigate = useNavigate(); // Use useNavigate for routing

  const handleDiseaseClick = (diseaseName) => {
    navigate(`/doctor-details/${diseaseName}`); // Navigate to the doctor details page
  };

  return (
    <>
      <div className="relative w-full h-[25vh]">
        <img
          src="/appointment.jpg"
          alt="appointment"
          className="w-full h-full object-cover"
        />
  
        {/* Overlay Text and Navigation */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-start bg-white bg-opacity-50 p-6">
          {/* Navigation */}
          <div className="flex space-x-4 text-black text-lg">
            <a href="/" className="hover:underline text-blue-800">Home</a> /
            <span className="text-blue-800">Appointment</span>
          </div>
  
          {/* Heading */}
          <p className="text-blue-900 font-bold text-2xl">Book The Appointment</p>
        </div>
      </div>
        
      <div>
        <p className="text-center text-blue-400">CHOOSE YOUR SYMPTOMPS</p>
        <h1 className="mb-8 text-center text-3xl text-blue-800 font-bold">Disease</h1>
        <div className="bg-blue-800 grid grid-cols-3 gap-8 rounded-3xl p-8 mx-auto w-[50%] h-[50%]">
          {symptoms.map((symptom, index) => (
            <button
              key={index}
              className="bg-white text-black flex items-center justify-between rounded-3xl font-semibold py-4 px-6 border-2 hover:bg-blue-200 transition duration-300 w-full h-20"
              onClick={() => handleDiseaseClick(symptom.name)} // Handle click event
            >
              <span>{symptom.name}</span>
              <img
                src={symptom.img}
                alt={symptom.name}
                className="w-16 h-10 ml-4"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center m-4">
        <h1 className="text-center text-3xl font-bold">Book Your Appointment</h1>
      </div>

      <div className="flex justify-center items-center  text-center px-6">
  <p className="max-w-2xl">
    "Book your appointment with ease! Choose your preferred date and time, and we'll take care of the rest. 
    Whether it's for a consultation, service, or check-up, scheduling is just a click away. Don't wait—secure your spot today!"
  </p>
</div>

<div>
                <p className="text-center text-md  font-bold text-blue-400 mt-12">GET IN TOUCH</p>
                <h1 className="text-center text-blue-800 font-bold text-3xl">Contact</h1>
              </div>
        
              {/* Contact Cards */}
              <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-14 mx-9 my-20 ml-14 mr-14">
        <div className="bg-[#BFD2F8] p-10 rounded-lg text-gray-500 flex flex-col">
          <FaPhoneAlt className="text-4xl mb-4" />
          <div className="text-start bg-[#BFD2F8]">
            <p className="font-bold text-2xl text-[#16255b]">EMERGENCY</p>
            <p className="text-gray-600">(+91) 681-812-255</p>
            <p className="text-gray-600">(+91) 681-678-346</p>
          </div>
        </div>

        <div className="bg-[#BFD2F8] p-10 rounded-lg text-gray-500 shadow-lg flex flex-col">
          <FaMapMarkerAlt className="text-4xl mb-4" />
          <div className="text-start">
            <p className="font-bold text-2xl text-[#16255b]">LOCATION</p>
            <p className="text-gray-600">0123 some place</p>
            <p className="text-gray-600">9876 some country</p>
          </div>
        </div>

        <div className="bg-[#16255b] p-10 rounded-lg text-gray-500 shadow-lg flex flex-col">
          <FaEnvelope className="text-4xl mb-4" />
          <div className="text-start">
            <p className="font-bold text-2xl text-white">EMAIL</p>
            <p className="text-gray-400">Paruluniversity.ac.in</p>
            <p className="text-gray-400">Paruluniversity.ac.in</p>
          </div>
        </div>

        <div className="bg-[#BFD2F8] p-10 rounded-lg text-gray-500 flex flex-col">
          <FaRegClock className="text-4xl mb-4" />
          <div className="text-start">
            <p className="font-bold text-2xl text-[#16255b]">WORKING HOURS</p>
            <p className="text-blue-400">24*7</p>
            <p className="text-blue-600">365 Days</p>
          </div>
        </div>
              </div>
        
            

      {/* Gray Line */}
      <hr className="border-gray-500 my-6 mx-12" />


      





    </>
  );
};

export default Appointment;
