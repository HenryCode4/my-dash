import React from 'react'

const DashboardItemsLg = ({name, icon: Icon, article}) => {
  return (
    <div className=' my-3 dark:bg-[#151110] p-3 flex flex-col rounded-md border dark:border-gray-700 shadow-md gap-y-4'>
        <Icon 
        className="bg-[#EA580B] text-white h-10 w-10 p-2 rounded-md mx-auto lg:mx-0"
        />

        <div className='flex flex-col space-y-3 text-center  lg:text-start'>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-gray-400'>{article}</p>
            
            <div className='w-full mx-auto flex lg:items-center'>
              <button type='button' className='bg-[#EA580B]  rounded-md py-2 w-full mx-auto shadow-md border dark:border-0 text-white'>
              use this tool
            </button>
            </div>
              
            
            
        </div>
    </div>
  )
}

export default DashboardItemsLg