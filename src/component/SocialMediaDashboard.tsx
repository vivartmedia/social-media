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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center ">
      <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>

        <header className="flex flex-col md:flex-row justify-between  mb-10">
          <div className="w-full md:w-auto">
            <h1 className="text-xl md:text-4xl text-left mt-9 font-bold text-gray-900 dark:text-white">Social Media Dashboard</h1>
            <p className="text-left text-gray-600 text-md font-bold dark:text-gray-400">Total Followers: 23,004</p>
          </div>

          {/* Ensure the horizontal line and the toggle section are not affecting the alignment */}
          <div className="w-full md:w-auto border-t border-gray-600 mt-4 md:mt-0 md:border-t-0"></div> {/* Horizontal line for mobile */}

          <div className="flex justify-between items-center  mr-4 md:w-auto mt-4 md:mt-0">
            <span className="text-gray-500 dark:text-gray-400 mr-4 text-sm font-bold">Dark Mode</span>
            <label htmlFor="toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} id="toggle" className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-400 dark:bg-green-400 rounded-full peer"></div>
              <span className="m-1 absolute left-0 inline-block w-5 h-5 bg-white dark:bg-gray-800 border-gray-300 rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5 peer-checked:border-blue-600"></span>
            </label>
          </div>
        </header>





        <div className="md:grid md:grid-cols-4 md:gap-4 md:mt-8 flex flex-col items-center gap-4">
          {/* Repeat this block for each social media card */}
          <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center  w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-facebook.svg" alt="facebook icon" />
              <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">1987</p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>F O L L O W E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">12 Today</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-twitter.svg" alt="facebook icon" />
              <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">1044</p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>F O L L O W E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">99 Today</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-pink-500"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-instagram.svg" alt="facebook icon" />
              <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">11K</p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>F O L L O W E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 h-1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">1099 Today</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-md flex flex-col  items-center text-center w-80 h-72 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red-700"></div>
            <span className='flex items-center mt-6 absolute'>
              <img className='w-6 h-6 mr-2' src="./icon-youtube.svg" alt="facebook icon" />
              <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400">@nathanf</h2>
            </span>
            <div className="flex-grow flex flex-col justify-center mt-10">
              <p className=" mb-2 text-6xl font-bold dark:text-white">8239</p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>S U B S C R I B E R S</p>
            </div>

            {/* Bottom Section */}
            <div className="pb-2">
              <div className="flex justify-center items-center mb-4">
                <span><img className='w-2 h-1 mr-2' src="./icon-down.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-orange-500">144 Today</span>
              </div>
            </div>
          </div>








          {/* End of social media card */}
        </div>


        <h1 className="text-2xl mt-10 font-bold text-gray-600 dark:text-gray-200">Overview - Today</h1>


        <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-4 mt-8">
          {/* Repeat this block for each smaller card */}


          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">Page Views</h2>
              <img className='w-6 h-6 ' src="./icon-facebook.svg" alt="facebook icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">87</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">3%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">Likes</h2>
              <img className='w-6 h-6 ' src="./icon-facebook.svg" alt="facebook icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">52</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-down.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-orange-500">3%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">LIkes</h2>
              <img className='w-6 h-6 ' src="./icon-instagram.svg" alt="instagram icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">5462</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">2257%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">Profile Views</h2>
              <img className='w-6 h-6 ' src="./icon-instagram.svg" alt="instagram icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">52K</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">1375%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">Retweets</h2>
              <img className='w-6 h-6 ' src="./icon-twitter.svg" alt="twitter icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">117</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">303%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">Likes</h2>
              <img className='w-6 h-6 ' src="./icon-twitter.svg" alt="twitter icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">507</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-up.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-emerald-500">553%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">Likes</h2>
              <img className='w-6 h-6 ' src="./icon-youtube.svg" alt="youtube icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">107</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-down.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-orange-500">19%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 px-10 py-7 rounded-md flex flex-col justify-between  items-center text-center w-80 h-40 relative overflow-hidden">
            <div className="w-full flex justify-between items-start">
              <h2 className="text-md font-bold text-gray-500 dark:text-gray-400">Total Views</h2>
              <img className='w-6 h-6 ' src="./icon-youtube.svg" alt="youtube icon" />
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="  text-4xl font-bold dark:text-white">1407</p>
              <div className="flex justify-bottom items-center ">
                <span><img className='w-2 1 mr-2' src="./icon-down.svg" alt="Arrow up icon" /></span>
                <span className="text-sm font-bold text-orange-500">12%</span>
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
