import { BatteryMedium, ChevronsUpDown, Home, Menu, Moon, ShipWheel } from "lucide-react";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { integration, overView, tools, workSpace } from "../libs/action";
import ThemeSwitch from "./ThemeSwitch";
import {motion} from "framer-motion"

const variantDash = {
    hidden: {
        opacity: 0
    },

    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.5,
        }
    }
}

const variantProfile = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.5,
        }
    }
}


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [profile, setProfile] = useState(false)

  const onClick = () => {
    setToggle((prevState) => !prevState);
  };

  const onProfile = () => {
    setProfile((prevState) => !prevState);
  };

  return (
    <div className=" relative ">
      <div className="text-gray-950  bg-gray-50 dark:bg-[rgb(21,17,16)] dark:text-gray-50 dark:text-opacity-90 h-full w-full py-6 px-4 flex items-center justify-between ">
        <motion.div className="font-semibold flex gap-x-2"
        variants={variantDash} 
        initial='hidden'
        animate='visible'
        >
          <Home /> <span className="font-light text-gray-400">/</span> Dashboard
        </motion.div>

        <motion.div className="hidden lg:block"
        variants={variantProfile} 
        initial='hidden'
        animate='visible'
        >
          <div className="flex gap-x-6 items-center">
            <div className="bg-[rgb(218,96,32)] text-white p-2 rounded-md flex gap-x-2">
              <ShipWheel /> Connect OpenAI
            </div>

            <div className="flex gap-x-4 items-center">
              <ThemeSwitch />
              <BatteryMedium />
            </div>

            <div className="flex gap-x-4 items-center">
              <img
                src="./chima.png"
                alt="profile"
                className="w-12 h-12 object-cover"
              />
              <p>
                <span className="font-semibold">Chima Nnamani</span>
                <br />
                <span className="text-gray-500 dark:text-gray-200">henrycnnamani4@gmail.com</span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center gap-x-8 lg:hidden">
          <div onClick={onClick} className=" cursor-pointer">
            <Menu size={36} className="dark:text-gray-200" />
          </div>

          <div className="cursor-pointer" onClick={onProfile}>
            <ChevronsUpDown />
          </div>
          
        </div>
      </div>


        {
            profile && (
                <div className="lg:hidden flex flex-col bg-gray-50 dark:bg-[rgb(21,17,16)] gap-y-10 items-end p-10 w-[400px] rounded-b-lg absolute top-[84px] right-0">
            <div className="bg-gray-200 dark:bg-[rgb(218,96,32)] py-2 px-4 rounded-md flex gap-x-2">
              <ShipWheel /> Connect OpenAI
            </div>

            <div className="flex gap-x-4 items-center pr-2">
              <ThemeSwitch />
              <BatteryMedium />
            </div>

            <div className="flex gap-x-4 items-center ">
              <img
                src="./chima.png"
                alt="profile"
                className="w-12 h-12 object-cover"
              />
              <p>
                <span className="font-semibold">Chima Nnamani</span>
                <br />
                <span className="text-gray-500 dark:text-gray-300">henrycnnamani4@gmail.com</span>
              </p>
            </div>
          </div>
            )
        }
      


      {toggle && (
        <div className="lg:hidden flex flex-col bg-gray-50 text-gray-950 dark:bg-[rgb(21,17,16)] dark:text-gray-400 w-96 h-screen ">
          <div className="flex flex-col pl-6">
            <h3 className="text-gray-500 dark:text-gray-300">Overview</h3>

            {overView.map((item, index) => (
              <SidebarItem
                index
                key={item.label}
                name={item.label}
                icon={item.icon}
                href={item.href}
              />
            ))}
            <h3 className="mt-4 text-gray-500 dark:text-gray-300">Workspace</h3>

            {workSpace.map((item) => (
              <SidebarItem
                key={item.label}
                name={item.label}
                icon={item.icon}
                href={item.href}
              />
            ))}
            <h3 className="mt-4 text-gray-500 dark:text-gray-300">Tools</h3>

            {tools.map((item) => (
              <SidebarItem
                key={item.label}
                name={item.label}
                icon={item.icon}
                href={item.href}
              />
            ))}
            <h3 className="mt-4 text-gray-500 dark:text-gray-300">Integrations</h3>

            {integration.map((item) => (
              <SidebarItem
                key={item.label}
                name={item.label}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </div>

          
        </div>
      )}
    </div>
  );
};

export default Navbar;
