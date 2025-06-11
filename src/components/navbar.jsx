import { ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <section>
      <div className="h-[92px] flex items-center justify-between">
        <div className="">
          <img src="/logo.svg" alt="" className="w-[139px] h-[68px]" />
        </div>

        <div className="text-black flex gap-8 items-center">
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
      </div>
    </section>
  );
}

export default Navbar;
