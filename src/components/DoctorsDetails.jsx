import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

// Sample doctor data with availability
const doctorData = {
  "Asthma": [
    { name: "Dr. Robert Brown", img: "/appoin1.png", description: "Expert in respiratory diseases.", available: true },
    { name: "Dr. Sarah Lee", img: "/appoin2.png", description: "Specialist in asthma treatments.", available: false }
  ],
  "Ear Infection": [
    { name: "Dr. Emily Stone", img: "/appoin1.png", description: "Ear and hearing expert.", available: true },
    { name: "Dr. Liam Green", img: "/appoin2.png", description: "Experienced ENT specialist.", available: false }
  ],
  "Cancer": [
    { name: "Dr. James Anderson", img: "/appoin1.png", description: "Oncologist with 15 years of experience.", available: true },
    { name: "Dr. Olivia Clark", img: "/appoin2.png", description: "Specialist in chemotherapy treatments.", available: false }
  ],
  "Allergies": [
    { name: "Dr. Daniel Carter", img: "/appoin1.png", description: "Allergy and immunology specialist.", available: true },
    { name: "Dr. Sophia Wright", img: "/appoin2.png", description: "Pediatric allergy expert.", available: false }
  ],
  "Dermatitis": [
    { name: "Dr. Kevin Harris", img: "/appoin1.png", description: "Dermatologist with expertise in skin conditions.", available: true },
    { name: "Dr. Lily Adams", img: "/appoin2.png", description: "Specialist in eczema and dermatitis treatments.", available: false }
  ],
  "Arthritis": [
    { name: "Dr. Matthew White", img: "/appoin1.png", description: "Rheumatologist specializing in arthritis treatments.", available: true },
    { name: "Dr. Ava Wilson", img: "/appoin2.png", description: "Expert in joint pain and arthritis management.", available: false }
  ],
  "Fever": [
    { name: "Dr. Henry Thomas", img: "/appoin1.png", description: "General physician treating viral infections.", available: true },
    { name: "Dr. Chloe Scott", img: "/appoin2.png", description: "Specialist in infectious diseases.", available: false }
  ],
  "High Blood Pressure": [
    { name: "Dr. William Parker", img: "/appoin1.png", description: "Cardiologist specializing in hypertension.", available: true },
    { name: "Dr. Emma Martinez", img: "/appoin2.png", description: "Expert in managing heart-related conditions.", available: false }
  ],
  "Nose Infection": [
    { name: "Dr. Nathan Brown", img: "/appoin1.png", description: "ENT specialist treating nasal conditions.", available: true },
    { name: "Dr. Grace Foster", img: "/appoin2.png", description: "Expert in sinus infections and treatments.", available: false }
  ],
};

const diseaseDescription = {
  "Asthma": "Asthma is a chronic condition affecting the airways, causing difficulty in breathing.",
  "Ear Infection": "An ear infection occurs due to bacteria or viruses, causing pain and discomfort.",
  "Cancer": "Cancer is uncontrolled cell growth, affecting various parts of the body.",
  "Allergies": "Allergies occur when the immune system overreacts to substances like pollen, dust, or food allergens.",
  "Dermatitis": "Dermatitis is an inflammation of the skin that leads to itching, redness, and irritation.",
  "Arthritis": "Arthritis causes joint pain and stiffness, affecting movement and daily activities.",
  "Fever": "Fever is a rise in body temperature due to an infection or illness, often accompanied by chills.",
  "High Blood Pressure": "A condition where blood pressure is consistently too high, increasing the risk of heart disease and stroke.",
  "Nose Infection": "Nose infections, often caused by bacteria or viruses, lead to congestion, pain, and breathing difficulties."
};


const DoctorDetails = () => {
  const { disease } = useParams();
  const navigate = useNavigate();
  const doctors = doctorData[disease] || [];
  const description = diseaseDescription[disease] || "No description available for this disease.";

  const handleBookAppointment = (doctor) => {
    if (doctor.available) {
      navigate(`/book-appointment/${doctor.name}`);
    } else {
      alert(`Sorry, ${doctor.name} is not available at the moment.`);
    }
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/bghome.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-gray/30"></div>

      <div className="relative p-6">
        <h1 className="text-center text-3xl font-bold text-blue-800">{disease} Doctors</h1>
        <p className="text-center text-lg text-gray-800 my-4">{description}</p>

        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div
              className="group flex justify-between items-center p-6 bg-white/80 rounded-xl shadow-lg my-4 transition-all duration-300 hover:bg-gray-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              key={index}
            >
              <img 
                src={doctor.img} 
                alt={doctor.name} 
                className="w-24 h-24 rounded-full transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold group-hover:text-blue-800 transition-colors duration-300">
                  {doctor.name}
                </h3>
                <p className="group-hover:text-gray-700 transition-colors duration-300 mb-4">
                  {doctor.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a href={`https://facebook.com/${doctor.name}`} target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className="w-10 h-10 rounded-full bg-blue-800 text-white p-2 transition-all duration-300 hover:scale-110 hover:bg-blue-600" />
                    </a>
                    <a href={`https://instagram.com/${doctor.name}`} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="w-10 h-10 rounded-full bg-blue-800 text-white p-2 transition-all duration-300 hover:scale-110 hover:bg-blue-600" />
                    </a>
                    <a href={`https://twitter.com/${doctor.name}`} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="w-10 h-10 rounded-full bg-blue-800 text-white p-2 transition-all duration-300 hover:scale-110 hover:bg-blue-600" />
                    </a>
                  </div>
                  <button 
                    className={`px-4 py-2 rounded-3xl transition duration-300 
                      ${doctor.available ? "bg-blue-200 hover:bg-blue-400 hover:text-white cursor-pointer" : "bg-gray-400 text-gray-800 cursor-not-allowed"}`}
                    onClick={() => handleBookAppointment(doctor)}
                    disabled={!doctor.available}
                  >
                    {doctor.available ? "Book Appointment" : "Not Available"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-white/80 rounded-xl">
            <p>No doctors available for this disease.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
