import Title from '../components/title'

export default function Events() {
    return (
      <>
        <Title title={"Events & Opportunities"} />
        <h2 className="text-3xl flex justify-center font-semibold text-gray-400">
          Check out our Fackbook for Updates and News!
        </h2>
        <div className='grid grid-cols-2'>
          <div className=''>
            Image
          </div>
          <div className=''>
            events section
          </div>

        </div>

      </>
    );
  }