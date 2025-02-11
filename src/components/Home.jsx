import Disease from "./Disease";
import OurDoctors from "./OurDoctors";
import { motion } from "motion/react"
const Home = () => {
  return (
    <>
      
      <motion.div
        className="bg-cover bg-center w-full flex  items-start justify-start p-8 relative"
        style={{ height: "50vh", backgroundImage: "url('/bghome.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Text Section */}
        <motion.div
          className="text-left p-10"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h4 className="text-blue-400 text-2xl font-bold">CARING FOR <br />LIFE</h4>
          <p className="text-3xl font-bold text-blue-900">
            Leading the way in  
            <br />
            <span className="text-blue-900">Homeopathic</span> <br />
            <span className="text-blue-900">Excellence</span>.
          </p>
        </motion.div>

        {/* Animated Buttons Section */}
        <motion.div
          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 flex"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="text-white rounded bg-blue-900 px-12 py-6 flex items-center gap-16"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/appointment" className="text-white hover:underline">Scheduling</a>
            <img src="/nav1.png" alt="Icon" className="w-6 h-6 cursor-pointer" />
          </motion.button>

          <motion.button
            className="text-white rounded bg-blue-400 px-12 py-6 flex items-center gap-16"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#scheduling" className="text-white hover:underline">Scheduling</a>
            <img src="/nav2.png" alt="Icon" className="w-6 h-6 cursor-pointer" />
          </motion.button>

          <motion.button
            className="text-white rounded bg-[#16255b] px-12 py-6 flex items-center gap-16"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/appointment" className="text-white hover:underline">Scheduling</a>
            <img src="/nav3.png" alt="Icon" className="w-6 h-6 cursor-pointer" />
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="mt-6 px-8 py-10 flex flex-col items-center justify-center text-lest gap-4">
        <h3 className="text-md font-bold text-blue-400">WELCOME TO REPERTORY HOMEOPATHIC PRACTITIONER</h3>
        <h2 className="text-3xl font-bold text-[#16255b]">A Great Place to Receive Care</h2>
        <p className="text-3/2xs text-gray-700 font-semibold max-w-2xl mx-auto">
          Homeopathy is a gentle and natural system of healing that focuses on treating the whole person, not just the symptoms. It is based on the principle that "like cures like," meaning a substance causing symptoms in a healthy individual can help treat similar symptoms in someone unwell when used in highly diluted forms.
        </p>
        <p className="mt-6 text-blue-500 text-xl font-bold flex items-center gap-2 cursor-pointer hover:underline">
          <a href="/appointment">Learn More</a>
          <span className="text-2xl text-black">→</span>
        </p>
        <img
          src="/Group.png"
          alt="Repertory Homeopathic Practitioner"
          className="mt-6 w-full max-w-xl rounded-lg"
        />
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-1xl font-bold text-blue-400 mb-2">CARE YOU CAN BELIEVE IN</h3>
          <h2 className="text-3xl font-bold text-[#16255b] mb-6">Our Services</h2>
        </div>

        <div className="mt-10 px-6 flex items-start gap-10 max-w-screen-lg mx-auto">
  {/* Left Side Content */}
  <div className="w-1/2 flex flex-col px-4 py-6">
    <h1 className="text-2xl font-bold text-left mb-4">
      A passion for putting patients first.
    </h1>

    {/* Bullet Points Grid */}
    <div className="grid grid-cols-2 gap-4 mt-2 mx-2 text-2md text-[#16255b] font-semibold">
      <ul className="list-disc  ml-4 space-y-2">
        <li>A Passion for Healing</li>
        <li>All our best</li>
        <li>A Legacy of Excellence</li>
      </ul>
      <ul className="list-disc ml-4 space-y-2">
        <li>5-Star Care</li>
        <li>Believe in Us</li>
        <li>Always Caring</li>
      </ul>
    </div>

    {/* Description */}
    <p className="mb-6 mt-6 text-md font-semibold text-left">
      Homeopathy thrives on the principle of individualized care, placing the
      patient at the center of every treatment. With a commitment to understanding
      each person's unique physical, emotional, and mental health, homeopathy
      offers a holistic approach that focuses on restoring balance and harmony.
    </p>
    <p className="mt-2 text-md font-semibold text-left">
      Driven by compassion and a dedication to gentle, natural healing, homeopathy
      ensures that every remedy is tailored to the patient’s specific needs, always
      prioritizing their well-being. At its core, homeopathy is more than a system
      of medicine—it’s a commitment to putting patients first.
    </p>
  </div>

  {/* Right Side Images */}
  <div className="w-1/3 flex flex-col gap-6 px-3 py-6 ">
    <img
      src="/medical.png"
      alt="Healthcare Team"
      className="w-full max-w-md h-auto rounded-lg"
    />
    <img
      src="/doctor.png"
      alt="Patient Care"
      className="w-full max-w-md h-auto rounded-lg"
    />
  </div>
</div>

</div>
<Disease/>
<OurDoctors/>

    </>
  );
};

export default Home;
