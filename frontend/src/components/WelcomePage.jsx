import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div
      className="bg-cover flex justify-center items-center bg-center h-screen w-screen"
      style={{
        backgroundImage: "url('public/back 1.png')",
      }}
    >
     

      {/* Main content */}
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="relative h-[96vh] w-[98vw] bg-[rgba(70,140,232,0.5)] rounded border-4 border-[rgba(70,140,232,0.8)] flex justify-center items-center">
           {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full p-4 bg-opacity-0 bg-blue-700  flex justify-between items-center">
                <div className='flex gap-10'>
                <div className="flex items-center space-x-4 ml-8 mt-2 hover:border-2 hover:border-[#468CE8] ">
                        <Link
                            to="/authority"
                            className="  text-md font-semibold  py-1 px-2 "
                        >
                            Authority
                        </Link>
                </div>
                <div className="flex space-x-4 flex items-center space-x-4 ml-8 mt-2 hover:border-2 hover:border-[#468CE8] ">
                {/* Create Account Button */}
                        <Link
                            to="/create"
                            className=" text-md font-semibold  py-1 px-2"
                        >
                            Create Account
                        </Link>
               
                </div>
                </div>
                <img src="public/Screenshot_2025-01-03_212818-transformed copy 2 (1).svg" alt="Logo" className="h-20" />
            </nav>
            {/* Title */}
            <div className='h-[70vh] w-[88vw] mt-20  p-6 '>
               <h1 className='text-3xl font-semibold'>We Take Care Because We Care</h1>
               <div className='flex items-center justify-center'>
                    <div className='w-[1400px] relative h-[350px] bg-white bg-opacity-50 mt-16 flex '>
                        <img className='absolute bottom-0 left-[60px]   h-[430px]' src="public/race-women-looking-young-horizontal-standing1-transformed (1).png" alt=""  />
                        <img className='absolute bottom-0 left-[480px] h-[435px]' src="public/race-women-looking-young-horizontal-standing2-transformed.png" alt=""  />
                        <img className='absolute bottom-0 left-[900px] h-[410px]' src="public/race-women-looking-young-horizontal-standing3-transformed.png" alt=""  />
                      
                        
                       
                    </div>
                    
                    
               </div>
               <p className='text-md px-30'>Discover the power of homeopathy—a gentle, safe, and effective approach to health and well-being. At  
                                Repertory Homeopathic Practitioner, we focus on treating the root cause of illness, not just the symptoms, 
                                ensuring a balanced and harmonious recovery.</p>
            </div>
        </div>
                        <Link
                            to="/home"
                            className=" absolute transform active:scale-95 transition-transform h-10 w-30 bg-blue-500 rounded-xl hover:bg-blue-600  bottom-10  font-semibold text-lg right-10  text-md font-semibold  py-1 px-6 "
                        >
                            Skip
                        </Link>
       
                       
       </div>
    </div>
  );
};

export default WelcomePage;
