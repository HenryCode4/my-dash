import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="h-screen bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50">
      <div className="h-[80px] fixed lg:pl-72 w-full " >
        <Navbar />
      </div>

      <div className="hidden lg:flex flex-col h-full w-72  fixed">
        <Sidebar />
      </div>

      <main  className="lg:pl-72 pt-[80px] h-full">
        <Dashboard />
      </main>
    </div>
  )
}