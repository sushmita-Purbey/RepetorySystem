import { useState } from "react";
import AdminDashSidebar from "../components/AdminDashSidebar";

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer:
        "Go to the 'Appointments' section in the dashboard, select a doctor, choose a time slot, and confirm your booking.",
    },
    {
      question: "Can I view my previous reports?",
      answer:
        "Yes, you can find all your past reports in the 'Medical Records' section under 'My Profile'.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support by clicking the 'Contact Support' button below or calling our helpline at +123-456-7890.",
    },
    {
      question: "What if I need to cancel or reschedule an appointment?",
      answer:
        "Go to the 'Appointments' section, select the booked appointment, and choose the cancel or reschedule option.",
    },
  ];

  return (
    <div>
         <div className="flex flex-col h-screen">
            <AdminDashSidebar/>
        </div>
    <div className="mx-auto flex-1 w-[1250px] h-screen mt-6   absolute top-0 right-0 ">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 ">Help Center</h2>
      <p className="text-gray-600 mb-6">
        Find answers to your questions or contact support.
      </p>

      {/* FAQ Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button
                className="flex justify-between w-full text-left text-gray-700 font-medium py-2 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-blue-500">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/appointment"
            className="p-3 bg-blue-500 text-white text-center rounded-lg shadow-md hover:bg-blue-600"
          >
            Schedule an Appointment
          </a>
          <a
            href="/reportpage"
            className="p-3 bg-green-500 text-white text-center rounded-lg shadow-md hover:bg-green-600"
          >
            View Medical Reports
          </a>
          <a
            href="/doctors"
            className="p-3 bg-yellow-500 text-white text-center rounded-lg shadow-md hover:bg-yellow-600"
          >
            Find a Doctor
          </a>
          <a
            href="/contactsupport"
            className="p-3 bg-red-500 text-white text-center rounded-lg shadow-md hover:bg-red-600"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Need More Help?</h3>
        <p className="text-gray-600 mb-2">
          If you need further assistance, reach out to our support team.
        </p>
        <a
          href="/chatbot"
          className="block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Chatbot
        </a>
      </div>
    </div>
    </div>
  );
};

export default HelpCenter;
