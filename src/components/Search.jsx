import React from "react";

const Search = () => {
  return (
    <>
      <body class="bg-black-400 ">
      <div class="flex justify-between items-center h-14 mx-4 ml-11">
            <div class="flex items-center justify-center flex-grow ">
                <input type="text" placeholder="Search" class=" rounded-full border bg-black border-gray-700 h-8  px-3 py-4 focus:outline-none focus:border-blue-600 w-3/5" />
                <button class="mr-1 bg-dust-100 rounded-full flex items-center justify-center h-8 w-16 border border-gray-700 border-l-0 hover:bg-purple-800">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>  

                </button>
                <button class="ml-1 bg-dust-100 rounded-full flex items-center justify-center h-8 w-8 border border-gray-700 border-l-0 hover:bg-purple-800">
                   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
                </button>
                
            </div>
            <div class="flex items-center justify-center space-x-4">
             <button>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
             </button> 
             <button class="align-items rounded-full bg-dust-100 flex flex-row gap-2 items-center p-1 hover:bg-gray-800">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Sign in &nbsp;
             </button> 
            </div>
        </div>
        <div class="flex items-center px-2 py-3 space-x-3 select-none">
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-white shadow-inner hover:cursor-pointer hover:bg-purple-800">All </span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Tailwindcss</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Javascript</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Wrestling</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Python</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Coding</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">News</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">CSS</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Computer Science</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Comedy</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">News</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">CSS</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Computer Science</span>
            <span class="text-sm bg-dust-100  rounded-md px-2 py-1 text-gray-200 shadow-inner hover:cursor-pointer hover:bg-purple-800">Comedy</span>
                
        </div>
    </body>
    </>
  );
};

export default Search;