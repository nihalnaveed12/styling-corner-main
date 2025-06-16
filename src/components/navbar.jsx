
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section>
      <div className="h-[92px] flex items-center justify-between">
        <div className="">
          <img src="/logo.svg" alt="" className="w-[139px] h-[68px]" />
        </div>

        <div className="text-black hidden sm:flex gap-8 items-center">
          <div className="flex items-center gap-2 ">
            <img src="/flagpack_gb-ukm (1).svg" alt="" />
            <span>ENG</span>
            <ChevronDown size={12} />
          </div>
          <div className="border-r-2 border-[#D2C7C7] w-[160px] h-[36px] flex items-center">
            <h2 className="">FOR COMPANIES</h2>
          </div>

          <div className="">
            <h2 className="">LOG IN</h2>
          </div>
        </div>
      <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-black hover:bg-gray-100 rounded-md transition-all duration-200"
          >
            <div className={`transform transition-transform duration-300 ${isMenuOpen ? "rotate-180" : "rotate-0"}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      

      {/* Mobile Menu - Only visible on small screens when open */}
     <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div
            className={`px-4 py-4 space-y-4 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            {/* Language Selector */}
            <div className="flex items-center gap-2 py-3 border-b border-gray-100 hover:bg-gray-50 rounded-md px-2 transition-colors duration-200">
              <img src="/flagpack_gb-ukm (1).svg" alt="" />
              <span>ENG</span>
              <ChevronDown size={12} />
            </div>

            {/* For Companies */}
            <div className="py-3 border-b border-gray-100 hover:bg-gray-50 rounded-md px-2 transition-colors duration-200">
              <h2 className="text-black font-medium">FOR COMPANIES</h2>
            </div>

            {/* Log In */}
            <div className="py-3 hover:bg-gray-50 rounded-md px-2 transition-colors duration-200">
              <h2 className="text-black font-medium">LOG IN</h2>
            </div>
            </div>
            </div>
            </div>
    </section>
  );
}

export default Navbar;
