import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto bg-black sm:py-20 ' id='contact'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold leading-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Contact Me</h2>
        </div>

        <div className='flex justify-center items-center'>
          <div className='max-w-[800px] w-full mx-auto'>
            <div className='mt-6 bg-[#161616] rounded-xl'>
              <div className='p-10'>
                <form action="#" method='POST'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>

                    <div className='sm:col-span-2'>
                      <div className='mt-2.5 relative'>
                        <input type="text" placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                      </div>
                    </div>

                    <div className='sm:col-span-2'>
                      <div className='mt-2.5 relative'>
                        <input type="email" placeholder='Your Email' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                      </div>
                    </div>

                    <div className='sm:col-span-2'>
                      <div className='mt-2.5 relative'>
                        <textarea rows="4" placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'></textarea>
                      </div>
                    </div>


                    <div className='sm:col-span-2'>
                      <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold rounded-md bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-90'>
                        Send
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>



    </>
  )
}

export default Contact
