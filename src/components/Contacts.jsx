import React, { useState } from 'react'

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
    <div className="absolute top-4 left-4 flex space-x-4 text-white text-lg">
      <a href="/" className="hover:underline text-blue-800">Home</a> /
      <a href="/about" className="hover:underline text-blue-800">About Us</a> /
      <a href="/doctors" className="hover:underline text-blue-800">Doctors</a> /
      <span className="text-blue-800">Our Contacts</span>
    </div>
    <h1 className="text-blue-900 font-bold text-2xl ml-4 mt-10">Our Contacts</h1>
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
                   className='w-[207px] bg-[#1F2B6C] mt-1 h-[50px] border-2   p-4' 
                   onChange={(e) => {
                    setName(e.target.value)
                   value={name}}
                } />
                  <input 
                  type='email' 
                  placeholder='Email' 
                  className='w-[207px] bg-[#1F2B6C] mt-1 h-[50px] border-2 border-[#BFD2F8]  p-4'
                  onChange={(e) => {
                  setEmail(e.target.value)
                  value={email}}}
                   />
                </div>
                <input type='text' placeholder='Subject' className='w-[416px] bg-[#1F2B6C] h-[48px]   p-4 mt-1'
                  onChange={(e) => {
                    setSubject(e.target.value)
                    value={subject}}}
                 />
                <textarea placeholder='Your Message' className='w-[416px] bg-[#1F2B6C] h-[150px]   p-4 mt-1'
                  onChange={(e) => {
                    setMessage(e.target.value)
                    value={message}}}
                />
              </div>
             
              <button 
              
              type='submit' className='w-[430px] h-[50px] bg-[#BFD2F8]  text-white border-white border-2 p-4 mt-2
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
      <div className="my-20 flex ">
                {/* Extra Cards */}
                {[
                  { title: "REPERTORY HOMEOPATHIC PRACTITIONER", desc: ["Leading the way in Homeopathic", "Excellence, Trusted Care."] },
                  { title: "Important Links", desc: ["Appointment", "Doctors", "Services", "About Us"] },
                  { title: "Contact Us", desc: ["Call: +91 566-785-5623", "Email: fildineesoe@gmail.com", "Address: 0123 some place", "Some country"] },
                ].map((item, index) => (
                  <div key={index} className="p-4 text-gray-500 flex flex-col bg-blue-800 min-h-[350px] w-1/4">
                    <p className="font-bold text-2xl text-gray-400 p-7">{item.title}</p>
                    {item.desc.map((line, i) => (
                      <p key={i} className="ml-8 text-gray-400 text-xl">{line}</p>
                    ))}
                  </div>
                ))}
        
                {/* Newsletter */}
                <div className="bg-blue-800 p-10 text-gray-500 flex flex-col min-h-[350px] w-1/4">
                  <p className="font-bold text-2xl text-gray-400">Newsletter</p>
                  <button className="mt-4 bg-blue-400 text-black py-2 px-6 w-full hover:bg-blue-600 transition duration-300">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-transparent outline-none text-black placeholder-gray-300 w-full text-center"
                    />
                  </button>
                </div>
      </div> 

    </div>
  )
}

export default Contacts