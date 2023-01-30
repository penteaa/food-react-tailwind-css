import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/*  Overlay  */}
        <div className='absolute w-ull h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>The Cheesy One</p>
    <p className='px-2'>Lick your fingers</p>
    <button className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-7 py-2  text-center mr-2 mb-2 absolute bottom-2 left-2' >Order Now</button>
        </div>

        <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/"/>
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/*  Overlay  */}
        <div className='absolute w-ull h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>We Deliver desserts Too</p>
    <p className='px-2'>Tasty Treats</p>
    <button className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-7 py-2  text-center mr-2 mb-2 absolute bottom-2 left-2'>Order Now</button>
        </div>  
        <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/"/>
      </div>

       {/* Card */}
       <div className='rounded-xl relative'>
        {/*  Overlay  */}
        <div className='absolute w-ull h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
    <p className='px-2'>Added Daily</p>
    <button className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-7 py-2  text-center mr-2 mb-2 absolute bottom-2 left-2'>Order Now</button>
        </div>
        <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.unsplash.com/photo-1586253181808-c030e7e1aa5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/"/>
      </div>
      
    </div>
  )
}

export default HeadLineCards