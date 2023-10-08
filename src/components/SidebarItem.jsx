import {motion} from "framer-motion"
const SidebarItem = ({name, icon: Icon, href, index}) => {

  

  return (
    
      <motion.button
      whileHover={{
        scale: 1.2,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        originX: 0
        
      }}
    onClick={()=> {window.location.pathname = href}}
    className={`text-gray-950 dark:text-gray-50 flex gap-x-2 font-semibold mt-2 mr-16 p-2 items-center rounded-md ${window.location.pathname === href ? 'bg-[#EA580B] text-white' : ""} }`}
    type='button'
    >
      <Icon />
      {name}
    </motion.button>
    
    
  )
}

export default SidebarItem