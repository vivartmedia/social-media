import React, { useState, useEffect } from 'react';


const SocialMediaDashboard: React.FC = () => {

  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center ">
      <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl mt-9 font-bold text-gray-900 dark:text-white">Social Media Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Total Followers: 23,004</p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 dark:text-gray-300 mr-4 text-sm font-bold">Dark Mode</span>
            <label htmlFor="toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} value="" id="toggle" className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-400 dark:bg-green-400  rounded-full peer"></div>
              <span className="m-1 absolute left-0 inline-block w-5 h-5 bg-white dark:bg-gray-800  border-gray-300 rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5 peer-checked:border-blue-600"></span>
            </label>
          </div>
        </header>




        <div className="grid grid-cols-4 gap-4 mt-8 h">
          {/* Repeat this block for each social media card */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-facebook.svg" alt="facebook icon" />
              <h2 className="text-xs font-bold text-gray-500 dark:text-gray-300">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">1987</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>F O L L O W E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-xs font-bold text-emerald-500">12 Today</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-twitter.svg" alt="facebook icon" />
              <h2 className="text-xs font-bold text-gray-500 dark:text-gray-300">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">1044</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>F O L L O W E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-xs font-bold text-emerald-500">99 Today</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-pink-500"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-instagram.svg" alt="facebook icon" />
              <h2 className="text-xs font-bold text-gray-500 dark:text-gray-300">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">11K</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>F O L L O W E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 h-1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-xs font-bold text-emerald-500">1099 Today</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red-700"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-youtube.svg" alt="facebook icon" />
              <h2 className="text-xs font-bold text-gray-500 dark:text-gray-300">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">8239</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>S U B S C R I B E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 h-1 mr-2' src="./icon-down.svg" alt="Arrow up icon" /></span>
                <span className="text-xs font-bold text-orange-500">144 Today</span>
              </div>
            </div>
          </div>
          

          





          {/* End of social media card */}
        </div>


        <h1 className="text-2xl mt-9 font-bold text-gray-900 dark:text-white">Overview - Today</h1>


        <div className="grid grid-cols-4 gap-4 mt-8">
          {/* Repeat this block for each smaller card */}

          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="flex justify-between">
              <p>Page Views</p>
              <span>[Icon]</span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-3xl font-bold">117</p>
              <div className="flex items-center">
                <span>[Arrow Icon]</span>
                <span>303%</span>
              </div>
            </div>
          </div>


          {/* End of smaller card */}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaDashboard;
