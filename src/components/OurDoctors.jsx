import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, 
  FaInstagram, FaPhoneAlt, FaMapMarkerAlt, 
  FaEnvelope, FaRegClock 
} from "react-icons/fa";


const OurDoctors = () => {
  return (
    <div>
      <p className="text-blue-400 text-center mt-12">TRUSTED CARE</p>
      <h1 className="text-3xl text-[#16255b] font-bold text-center">Our Doctors</h1>

      {/* Doctor Cards */}
      <div className="flex justify-center gap-8 mt-6">
        {[
          { name: "Doctor's Name", specialty: "NEUROLOGIST", img: "/card1.png" },
          { name: "Doctor's Name", specialty: "UROLOGIST", img: "/card2.png" },
          { name: "Doctor's Name", specialty: "ONCOLOGIST", img: "/card3.png" },
        ].map((doctor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 w-80 h-[500px] text-center flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full h-4/5 object-cover"
            />
            <div className="bg-[#BFD2F8] p-4 w-full">
              <p className="text-xl font-semibold text-[#16255b]">{doctor.name}</p>
              <p className="text-gray-600">{doctor.specialty}</p>
              <div className="flex gap-4 justify-center mt-4">
                <div className="bg-[#16255b] text-white p-2 rounded-full cursor-pointer hover:bg-[#16255b] transition">
                  <FaFacebookF className="text-lg" />
                </div>
                <div className="bg-[#16255b] text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
                  <FaTwitter className="text-lg" />
                </div>
                <div className="bg-[#16255b] text-white p-2 rounded-full cursor-pointer hover:bg-blue-900 transition">
                  <FaLinkedinIn className="text-lg" />
                </div>
              </div>
            </div>
            <button className="bg-[#16255b] text-white py-2 w-full hover:bg-blue-600 transition duration-300">
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div>
        <p className="text-center text-blue-400 mt-12">GET IN TOUCH</p>
        <h1 className="text-center text-[#16255b] font-bold text-3xl">Contact</h1>
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

      {/* Additional Cards with Black Lines */}
      <div className="bg-[#BFD2F8] text-gray-500 flex p-4" style={{ maxHeight: "400px" }}>
  <div className="grid   sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Extra Cards */}
    {[
      {
        title: "REPERTORY HOMEOPATHIC PRACTITIONER",
        desc: ["Leading the way in Homeopathic", "Excellence, Trusted Care."],
        icon: "🏠", // Home icon for illustration
      },
      {
        title: "Important Links",
        desc: ["Appointment", "Doctors", "Services", "About Us"],
        icon: "🔗", // Link icon for illustration
      },
      {
        title: "Contact Us",
        desc: [
          "Call: +91 566-785-5623",
          "Email: fildineesoe@gmail.com",
          "Address: 0123 some place",
          "Some country",
        ],
        icon: "📞", // Phone icon for illustration
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-[#16255b] p-4 text-gray-200 rounded-lg shadow-lg hover:bg-[#1f2b6c] transition-all duration-300"
      >
        <div className="text-3xl mb-2">{item.icon}</div>
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        {item.desc.map((line, i) => (
          <p key={i} className="text-sm text-center mb-1">{line}</p>
        ))}
      </div>
    ))}

    {/* Newsletter */}
    <div className="flex flex-col bg-[#16255b] p-4 text-gray-200 rounded-lg shadow-lg col-span-1 sm:col-span-2 lg:col-span-1 hover:bg-[#1f2b6c] transition-all duration-300">
      <div className="text-3xl mb-2">📧</div>
      <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full p-2 mb-3 rounded-lg bg-transparent border-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-400 text-sm"
      />
      <button className="bg-blue-400 text-black py-1 px-4 w-full rounded-lg hover:bg-blue-600 transition-all duration-300">
        Subscribe
      </button>
    </div>
  </div>
              </div>

      {/* Gray Line */}
      <hr className="border-gray-500 my-6 mx-12" />


    </div>
  );
};

export default OurDoctors;
