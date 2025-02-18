import { useNavigate } from "react-router-dom";


const Disease = () => {
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
  const navigate = useNavigate(); // Initialize the navigate function

  const bookAppointmentbtn = () => {
    navigate("/appointment"); // Navigate to the appointment page
  };


  return (
    <div>
      <p className="text-center text-blue-400">CHOOSE YOUR SYMPTOMs</p>
      <h1 className="mb-8 text-center text-3xl text-blue-800 font-bold">Disease</h1>
      <div className="bg-blue-800 grid grid-cols-3 gap-8 rounded-3xl p-8 mx-auto w-[50%] h-[50%]">
        {symptoms.map((symptom, index) => (
          <button
            key={index}
            className="bg-white text-black flex items-center justify-between rounded-3xl font-semibold py-4 px-6 border-2 hover:bg-blue-200 transition duration-300 w-full h-20"
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
      <div
  className="relative flex items-center justify-around p-16 bg-cover bg-center mt-20"
  style={{ backgroundImage: "url('/bgDisease.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gray-300 hover:bg-gray-400 opacity-50"></div>

  {/* Content */}
  <div className="relative flex items-center justify-around p-14">
    {/* Left Section */}
    <div className="w-3/5 p-6 rounded-lg text-white">
      <button onClick={bookAppointmentbtn} className="text-3xl font-bold mb-4 text-blue-800">Book the Appointment</button>
      <p className="text-xl text-black leading-7">
        Take the first step toward a healthier, more balanced life with homeopathy. Whether you're seeking relief from chronic conditions, managing stress, or simply looking to enhance your overall well-being, homeopathy offers a safe and natural approach tailored to your unique needs.
        <br />
      </p>
      <p className="text-xl text-black leading-10 mt-4">
        Personalized care for physical, emotional, and mental health. Gentle remedies with minimal side effects. Holistic treatments designed to restore harmony.
      </p>
    </div>

    {/* Right Section */}
    <div className="w-1/4 flex justify-center relative">
    <button
      onClick={bookAppointmentbtn}
      className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Book Appointment
    </button>
    </div>
  </div>
</div>


    </div>
  );
};

export default Disease;
