import Title from '../components/title'
import Image from 'next/image';
import placeHolder from '/public/placeholder.png'

{/**create component for events & pull data from database*/}

export default function Events() {
    return (
      <>
        <Title title={"Events & Opportunities"} />
        <h2 className="text-3xl flex justify-center font-semibold text-gray-400">
          Check out our Fackbook for Updates and News!
        </h2>
        <div className='grid grid-cols-2 m-8 p-4'>
          <div className=''>
            <Image
              src={placeHolder}
              alt='Placeholder Image'
              height={500}
              width={500}
            />
          </div>
          <div className='bg-gray-300'>
            <span className='bg-white text-2xl flex justify-center pb-7'>Events</span>
            <h1 className='underline text-xl p-7'>Event 1</h1>
              <p className='font-bold px-9'>February 24, 2023</p>
              <p className='font-bold px-9'>Smith Hall</p>
              <p className='font-bold px-9'>2:30 pm - 4 pm</p>
              <p className='px-9'>
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <h1 className='underline text-xl p-7'>Event 2</h1>
              <p className='font-bold px-9'>February 24, 2023</p>
              <p className='font-bold px-9'>Smith Hall</p>
              <p className='font-bold px-9'>2:30 pm - 4 pm</p>
              <p className='px-9'>
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

          </div>

        </div>

      </>
    );
  }