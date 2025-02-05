import React from "react";

const Authority = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-16">
        <section>
             {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16">
        <h1 className="text-5xl font-extrabold tracking-tight">Authority in Homeopathy Care</h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto">
          Trust the experts in holistic healthcare with over 20 years of experience in homeopathy. Your health, our priority.
        </p>
      </header>

          <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
          <p className="mt-4 text-lg  text-gray-700">
          At Homeopathy Management System, our mission is to provide personalized, holistic healthcare through effective homeopathic treatments. We prioritize addressing the root causes of ailments, promoting long-term wellness for each individual. Our platform ensures accessible and convenient care by offering easy scheduling and virtual consultations, allowing patients to receive expert treatment at their convenience. With a focus on trust, transparency, and professionalism, we strive to empower patients with safe, natural healing options. By combining innovative technology and patient-centered care, we aim to build a healthier future through education and accessible homeopathy services.
          </p>
        </section>
        

        {/* Authority Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900">Meet Our Experts</h2>
          <div className="flex flex-wrap justify-between gap-8 mt-8 ">
            {/* Expert 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-blue-200  p-6 rounded-lg shadow-lg">
              <img
                src="public/image.png"
                alt=" Dr. Ritika sharma"
                className="rounded-full border-2 border-blue-900 w-32 h-32 mx-auto"
              />
              <h3 className="text-2xl mt-4 text-center text-blue-900 font-bold"> Dr. Ritika sharma</h3>
              <p className="text-center text-blue-900 mt-2">Homeopathy Specialist</p>
              <p className="mt-4 text-gray-700">
              A board-certified dermatologist with over 10 years of experience, specializing in cosmetic dermatology, acne treatment, and skin rejuvenation techniques. Dr. Sharma is dedicated to helping patients achieve healthy, glowing skin.
              </p>
            </div>

            {/* Expert 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-blue-200     p-6 rounded-lg shadow-lg">
              <img
                src="public/image (1).png"
                alt="Dr. Jane Smith"
                className="rounded-full border-2 border-blue-900 w-32 h-32 mx-auto"
              />
              <h3 className="text-2xl mt-4 text-center text-blue-900 font-bold">Dr. Chessi Smith</h3>
              <p className="text-center text-blue-900 mt-2">Senior Homeopath</p>
              <p className="mt-4 text-gray-700">
                Dr. Jane Smith is a senior homeopath with a passion for natural healing and
                providing personalized treatments for every patient.a senior homeopath with a passion for natural healing and
                providing personalized treatments for every patient.
              </p>
            </div>
          </div>
        </section>

        

      </div>


        {/* Trust & Transparency Section */}
        <section className="mt-16 bg-blue-50 py-12">
          <h2 className="text-4xl font-bold text-blue-900 text-center">Trust & Transparency</h2>
          <div className="mt-8 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We believe in the power of trust and transparency. Our homeopaths are licensed and experienced, and we adhere to the highest standards of practice in natural medicine. We provide clear, accessible information about our treatments, processes, and policies. Whether you’re seeking a consultation or a personalized treatment plan, you can trust that you’ll be treated with the utmost care and respect.
            </p>
          </div>
        </section>

       {/* Testimonials Section */}
       <section className="mt-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center">What Our Patients Say</h2>
          <div className="mt-8 max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl text-gray-700">
                "I have been suffering from chronic migraines for years, and after just a few sessions with Dr. Doe, I felt a significant improvement. I now experience fewer headaches and can manage stress more effectively. I highly recommend this platform to anyone seeking holistic care!"
              </p>
              <p className="mt-4 text-green-600 text-right">- Sarah L.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl text-gray-700">
                "The personalized care I received from Dr. Smith was life-changing. After a few months of treatment, my overall health improved significantly. This system makes it easy to book appointments and follow up with the doctor. I'm extremely satisfied!"
              </p>
              <p className="mt-4 text-green-600 text-right">- Michael R.</p>
            </div>
          </div>
        </section>

     
    </div>
  );
};

export default Authority;
