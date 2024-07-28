import React,{useState} from 'react'
export default function MainPage() {

    //states for the form feilds
    
  return (
    <div>
    
    <h1 className=' lg:mx-32 text-5xl font-bold text-green-500'>
        Convert Your Currencies Today
    </h1>

    <p className='lg:mx-32 opacity-40 py-6'>
        Welcome to "Convert Your Currencies Today"! This application allows you
        to easily convert currencies based on the latest exchange rates. Whether
        you're planning a trip, managing your finances, or simply curious about
        the value of your money in different currencies, this tool is here to
        help.
    </p>

    <div className='mt-5 flex items-center justify-center flex-col'>
        <section className='w-full lg:w-1/2'>
                    <form>
                        <div class="mb-4">
                            <label  htmlFor="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Date
                            </label>
                            <input  type="Date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@flowbite.com" required />
                        </div>

                        <div class="mb-4">
                            <label  htmlFor="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Source Currency
                            </label>
                            <select id="" name='' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                            <option value="">Select Source Currency</option>

                            </select>
                        </div>

                        <div class="mb-4">
                            <label  htmlFor="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Target Currency
                            </label>
                            <select id="" name='' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                            <option value="">Select Target Currency</option>

                            </select>
                        </div>

                        <div class="mb-4">
                            <label  htmlFor="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Amount in Source Currency
                            </label>
                            <input  type="number" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Amount in Source Currency" required />
                        </div>
                        
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {""}
                            Calculate the Target Currency
                        </button>
                    </form>
        </section>


    </div>



    </div>
  );
}
