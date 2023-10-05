
const SidebarItem = ({name, icon: Icon, href, index}) => {

  return (
    
      <button
    onClick={()=> {window.location.pathname = href}}
    className={`text-gray-950 dark:text-gray-50 flex gap-x-2 font-semibold mt-2 p-2 items-center hover:bg-slate-500/20 rounded-md ${window.location.pathname === href ? 'bg-slate-500/30' : ""} }`}
    type='button'
    >
      <Icon />
      {name}
    </button>
    
    
  )
}

export default SidebarItem