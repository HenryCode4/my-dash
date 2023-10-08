import React, { useEffect, useState } from 'react'
import { dashOneItems, dashTwoItems } from '../libs/action'
import DashboardItems from './DashboardItems'
import DashboardItemsLg from './DashboardItemsLg'
import Loading from './Loading'

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])

  return (
    <>
    {loading ? 
    <Loading /> 
    : <div className=' py-6 px-4 md:py-10 md:px-10 bg-white text-gray-950 dark:bg-black h-full w-full dark:text-white flex flex-col '>
        <div className='flex flex-col'>
            <h1 className='font-bold'>Hello, Henry</h1>
            <p className='font-light text-gray-700 dark:text-gray-400'>Dashboard is a place where you can find the overview of your products, documents and useful tools, that you can use to generate AI content.</p>
        </div>

        <div className='pt-10'>
            <h2>Workspace</h2>
            <p className='font-light text-gray-700 dark:text-gray-400'> Overview of your work space</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  h-20 gap-x-2 '>
                {dashOneItems.map((item)=> (
                    <DashboardItems
                    key={item.number}
                    name={item.label}
                    number={item.number}
                    icon={item.icon}

                    />
                ))}
            </div>
        </div>

        <div className='pt-40 lg:pt-10'>
            <h2>Let's get started with this useful tools.</h2>
            <p className='font-light text-gray-400'>Explore our tools that you can use to generate blog post, analyze SERP and more.</p>

            <div className='grid  grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-2'>
                {dashTwoItems.map((item)=> (
                    <DashboardItemsLg
                    key={item.id}
                    name={item.label}
                    article={item.article}
                    icon={item.icon}

                    />
                ))}
            </div>
        </div>






        
    </div>}
    
    </>
    
  )
}

export default Dashboard