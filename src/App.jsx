import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="h-screen">
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