import React from 'react'

const DashboardItems = ({name, icon: Icon, number}) => {
  return (
    <div className=' my-3 dark:bg-[#151110] h-20 p-3 flex items-center rounded-md border dark:border-gray-700 shadow-md gap-x-2'>
        <Icon 
        className="dark:bg-[#EA580B] h-10 w-10 p-2 rounded-md"
        />

        <div className='flex flex-col '>
            <h3 className='dark:text-gray-400'>{name}</h3>
            {number}
        </div>
    </div>
  )
}

export default DashboardItems