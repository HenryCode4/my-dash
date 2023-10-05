import React from 'react'
import { integration, overView, tools, workSpace } from '../libs/action'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    
  return (
    <div className='overflow-y-auto flex flex-col border-r h-full border-gray-200 bg-[rgb(21,17,16)]'>
        <div className='pt-6 pl-4'>
            <div className='text-white/40 text-2xl font-bold'> My<span className='text-orange-500'>.</span>Dashboard</div>
        </div>

        <div className='flex flex-col mt-8 pl-6 text-gray-400'>
             <h3 className=''>Overview</h3>
             
                {overView.map((item, index)=> (
                    <SidebarItem
                    index
                    key={item.label}
                    name={item.label}
                    icon={item.icon}
                    href={item.href}
                    />
                ))}
             <h3 className='mt-10'>Workspace</h3>
             
                {workSpace.map((item)=> (
                    <SidebarItem
                    key={item.label}
                    name={item.label}
                    icon={item.icon}
                    href={item.href}
                    />
                ))}
             <h3 className='mt-10'>Tools</h3>
             
                {tools.map((item)=> (
                    <SidebarItem
                    key={item.label}
                    name={item.label}
                    icon={item.icon}
                    href={item.href}
                    />
                ))}
             <h3 className='mt-10'>Integrations</h3>
             
                {integration.map((item)=> (
                    <SidebarItem
                    key={item.label}
                    name={item.label}
                    icon={item.icon}
                    href={item.href}
                    />
                ))}
             
        </div>
    </div>
  )
}

export default Sidebar