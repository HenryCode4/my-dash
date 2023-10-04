import React from 'react'

const DashboardItemsLg = ({name, icon: Icon, article}) => {
  return (
    <div className='ml-0 m-3 bg-[#151110] p-3 flex flex-col items-start rounded-md border border-gray-700 shadow-md gap-y-4'>
        <Icon 
        className="bg-[#EA580B] h-10 w-10 p-2 rounded-md"
        />

        <div className='flex flex-col space-y-3'>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-gray-400'>{article}</p>
            
              <button type='button' className='bg-[#EA580B]  rounded-md py-2 w-full mx-auto'>
              use this tool
            </button>
            
            
        </div>
    </div>
  )
}

export default DashboardItemsLg