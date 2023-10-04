import { BatteryMedium, Home, Menu, Moon, ShipWheel } from "lucide-react";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { integration, overView, tools, workSpace } from "../libs/action";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const onClick = () => {
        setToggle((prevState)=> !prevState)
    }
  return (
    <div className=" ">
        <div className="text-white bg-[rgb(21,17,16)] h-full w-full py-6 px-4 flex items-center justify-between">
        <div className="font-semibold flex gap-x-2">
          <Home /> <span className="font-light text-gray-300">/</span> Dashboard
        </div>

      <div className="hidden lg:block">
        <div className="flex gap-x-6 items-center">
          <div className="bg-[rgb(218,96,32)] p-2 rounded-md flex gap-x-2">
            <ShipWheel /> Connect OpenAI
          </div>

          <div className="flex gap-x-4">
            <Moon />
            <BatteryMedium />
          </div>

          <div className="flex gap-x-4 items-center">
            <img
              src="./chima.png"
              alt="profile"
              className="w-12 h-12 object-cover"
            />
            <p>
              <span className="font-semibol">Chima Nnamani</span>
              <br />
              <span className="text-gray-300">henrycnnamani4@gmail.com</span>
            </p>
          </div>
        </div>
      </div>


      <div 
      onClick={onClick}
      className="lg:hidden cursor-pointer">
        <Menu 
        size={36}
        className="text-gray-200"
        />
      </div>

      
    </div>

    {toggle && (
        <div className="flex flex-col bg-[rgb(21,17,16)] w-96 h-screen ">
    <div className='flex flex-col pl-6 text-gray-400'>
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
             <h3 className='mt-4'>Workspace</h3>
             
                {workSpace.map((item)=> (
                    <SidebarItem
                    key={item.label}
                    name={item.label}
                    icon={item.icon}
                    href={item.href}
                    />
                ))}
             <h3 className='mt-4'>Tools</h3>
             
                {tools.map((item)=> (
                    <SidebarItem
                    key={item.label}
                    name={item.label}
                    icon={item.icon}
                    href={item.href}
                    />
                ))}
             <h3 className='mt-4'>Integrations</h3>
             
                {integration.map((item)=> (
                    <SidebarItem
                    key={item.label}
                    name={item.label}
                    icon={item.icon}
                    href={item.href}
                    />
                ))}
             
        </div>



        <div className="flex flex-col pt-40 text-white gap-y-10 items-center">
          <div className="bg-[rgb(218,96,32)] p-2 rounded-md flex gap-x-2">
            <ShipWheel /> Connect OpenAI
          </div>

          <div className="flex gap-x-4">
            <Moon />
            <BatteryMedium />
          </div>

          <div className="flex gap-x-4 items-center">
            <img
              src="./chima.png"
              alt="profile"
              className="w-12 h-12 object-cover"
            />
            <p>
              <span className="font-semibol">Chima Nnamani</span>
              <br />
              <span className="text-gray-300">henrycnnamani4@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    )}
    
    </div>
    
  );
};

export default Navbar;
