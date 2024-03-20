import React from 'react';

const SocialMediaDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex justify-center ">
      <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Social Media Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Total Followers: 23,004</p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-900 dark:text-gray-300 mr-2">Dark Mode</span>
            <label htmlFor="toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="toggle" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700"></div>
              <span className="absolute left-0 inline-block w-6 h-6 bg-white border-2 border-gray-300 rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5 peer-checked:border-blue-600"></span>
            </label>
          </div>
        </header>
        
        <div className="grid grid-cols-4 gap-4 mt-8">
          {/* Repeat this block for each social media card */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
            <span>[Icon]</span>
            <h2 className="text-lg">@nathanf</h2>
            <p className="text-3xl font-bold">1987</p>
            <p>FOLLOWERS</p>
            <div className="flex justify-center items-center">
              <span>[Arrow Icon]</span>
              <span className="text-sm">12 Today</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
            <span>[Icon]</span>
            <h2 className="text-lg">@nathanf</h2>
            <p className="text-3xl font-bold">1987</p>
            <p>FOLLOWERS</p>
            <div className="flex justify-center items-center">
              <span>[Arrow Icon]</span>
              <span className="text-sm">12 Today</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
            <span>[Icon]</span>
            <h2 className="text-lg">@nathanf</h2>
            <p className="text-3xl font-bold">1987</p>
            <p>FOLLOWERS</p>
            <div className="flex justify-center items-center">
              <span>[Arrow Icon]</span>
              <span className="text-sm">12 Today</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
            <span>[Icon]</span>
            <h2 className="text-lg">@nathanf</h2>
            <p className="text-3xl font-bold">1987</p>
            <p>FOLLOWERS</p>
            <div className="flex justify-center items-center">
              <span>[Arrow Icon]</span>
              <span className="text-sm">12 Today</span>
            </div>
          </div>
          {/* End of social media card */}
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {/* Repeat this block for each smaller card */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
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
