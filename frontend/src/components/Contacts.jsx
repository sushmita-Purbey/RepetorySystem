import { useState } from 'react'

const Contacts = () => {
 
    // State variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    // Handle form submission
    const submitHandler = (e) => {
      e.preventDefault();
      const formData = { name, email, subject, message };
      console.log(formData); // You can send the data to an API here
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    };
    
  return (
    <div>
    {/* Banner Section */}

      <div className="relative w-full h-[25vh]">
  {/* Background Image */}
  <img
    src="Rectangle 3.png"
    alt="about"
    className="w-full h-full object-cover object-[top]"
  />

  {/* Overlay Text and Navigation */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start  justify-start bg-black bg-opacity-50">
    {/* Navigation */}
  
    <h1 className="text-white font-bold text-3xl ml-4 mt-10">Our Contacts</h1>
      </div>
      </div>
    {/* Map Section */}
      <div className='flex items-center justify-center'>
        <div className='h-[410px] w-[900px] bg-red-300 m-10   '>
          <img
          src="Mapview.png"
          alt="about"
          className="w-full h-full object-cover object-[top]"
          />
        </div>
      </div>
    {/* Contact Form Section */}
      <div className='flex  justify-center '>
        <div className='h-[460px] w-[900px]  m-4    '>
          <h1 className='text-blue-400 font-semibold ml-3 text-lg '>Get In Touch</h1>
          <h1 className='text-blue-900 font-semibold text-4xl ml-3 mb-2'>Contact</h1>
          <div className='flex items-center justify-center'> 
            <form onSubmit={submitHandler} >
              <div className='w-[430px] h-[316px] bg-[#BFD2F8] mr-3  flex flex-col items-center justify-center'>
                <div>
                  <input
                   type='text' 
                   placeholder='Your Name' 
                   className='w-[207px] bg-[#1F2B6C] mt-1 h-[50px] placeholder-white border-2   p-4' 
                   onChange={(e) => {
                    setName(e.target.value)
                   value={name}}
                } />
                  <input 
                  type='email' 
                  placeholder='Email' 
                  className='w-[207px] bg-[#1F2B6C] mt-1 h-[50px] border-2 border-[#BFD2F8] placeholder-white  p-4'
                  onChange={(e) => {
                  setEmail(e.target.value)
                  value={email}}}
                   />
                </div>
                <input type='text' placeholder='Subject' className='w-[416px] bg-[#1F2B6C] placeholder-white  h-[48px]   p-4 mt-1'
                  onChange={(e) => {
                    setSubject(e.target.value)
                    value={subject}}}
                 />
                <textarea placeholder='Your Message' className='w-[416px] bg-[#1F2B6C] placeholder-white h-[150px]   p-4 mt-1'
                  onChange={(e) => {
                    setMessage(e.target.value)
                    value={message}}}
                />
              </div>
             
              <button 
              
              type='submit' className='w-[430px] h-[50px] bg-[#1F2B6C]  text-white border-white border-2 p-4 mt-2
              transform transition-transform duration-300
              active:scale-110
              hover:bg-blue-200'>Submit</button>
            </form>
           
            <div className='w-[48%] h-[375px]   flex justify-center items-center flex-col flex-wrap'>
              <div className=' m-1 bg-[#BFD2F8] w-[212px] h-[179px] flex flex-col items-center justify-center'>
                <img src="Vector.png" alt="" />
                <h1 className=' text-[#1F2B6C] font-bold text-md'>Emergency</h1>
                <p className=' text-blue-800 text-xs'>(+91) 6468491646</p>
                <p className=' text-blue-800 text-xs'>(+91) 6468491678</p>
              </div>
              <div className=' m-1 bg-[#BFD2F8] w-[212px] h-[179px] flex flex-col items-center justify-center'>
                
                <div className='border-blue-900 border-2 h-6 w-10'>
                    <img src="Vector (3).png" alt="" />
                </div>
                <h1 className=' text-[#1F2B6C] font-bold text-md'>Email</h1>
               
                <p className=' text-blue-800 text-xs'>paruluniversity.ac.in</p>
                
              </div>
              <div className=' m-1 bg-[#1F2B6C] w-[212px] h-[179px] flex flex-col items-center justify-center'>
              <img src="Vector (5).png" alt="" />
              <h1 className=' text-blue-100 font-bold text-md'>Location</h1>
                <p className=' text-blue-800 text-xs'></p>
                <p className=' text-white text-xs'>1234 Some Place</p>
                <p className=' text-white text-xs'>13453 Some Country</p>
              </div>
              <div className=' m-1 bg-[#BFD2F8] w-[212px] h-[179px] flex flex-col  items-center justify-center'>
                <div className='border-blue-900 border-2 rounded-full  h-8 w-8'>
                      <img src="Vector (3).png" alt="" className='m-1 h-2 ' />
                </div>
                <h1 className=' text-[#1F2B6C] font-bold text-md'>Working hour</h1>
                <p className=' text-blue-500 text-xs font-semibold'>24*7</p>
                <p className=' text-blue-800 text-xs'>365 days</p>

              </div>

            </div> 
           

          </div>
          
 
         </div>
      </div>  
    {/* Footer Cards Section */}
              <div className="bg-[#BFD2F8] mt-[20px] text-gray-500 flex p-4" style={{ maxHeight: "400px" }}>
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

    </div>
  )
}

export default Contacts