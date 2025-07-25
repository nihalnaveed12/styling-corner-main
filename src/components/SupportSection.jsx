import { ArrowRight } from "lucide-react";

const SupportSection = () => {
  return (
    <div className="mt-10 md:mt-0 py-20 md:px-8 px-3 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:text-[58px] text-[34px]">
          <h2 className=" font-bold text-gray-900 md:leading-[67px] leading-[40px]">
            Always Here For You -
          </h2>
          <h3 className=" font-bold text-[#6E00B7] italic mb-6 font-serif md:leading-[67px] leading-[40px]">
            Anytime, Anywhere
          </h3>
          <p className="text-gray-600 text-[16px] max-w-2xl mx-auto">
            Our award-winning support team is available 24/7 to keep your
            business running smoothly.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Help Center Card */}
          <div className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 border-gray-300 border z-50">
            {/* Default State - Light background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-100 group-hover:opacity-0 transition-opacity duration-500 "></div>

            {/* Hover State - Purple gradient */}
            <div className="absolute inset-0 bg-[#6E00B7] opacity-100 "></div>

            {/* Content */}
            <div className="relative z-[10] p-10 h-full flex flex-col justify-between min-h-[280px]">
              <div>
                <h3 className="text-2xl z-[20] font-bold mb-4 text-white transition-colors duration-500">
                  Help Center
                </h3>
                <p className="text-white/90 relative z-[12] transition-colors duration-500 leading-relaxed mb-8">
                  Browse our knowledge base for expert tips, how-to guides, and
                  useful insights.
                </p>
              </div>

              <div className="absolute z-[8] top-0 left-0 ">
                <img
                  src="/Ellipse 24.png"
                  alt=""
                  className="w-24 blur-lg opacity-30"
                />
              </div>
              <div className="absolute z-[8] bottom-0 left-0 ">
                <img
                  src="/Ellipse 24.png"
                  alt=""
                  className="w-16 blur-lg opacity-30"
                />
              </div>
              <div className="absolute z-[8] left-[60%] top-0">
                <img
                  src="/Ellipse 35.png"
                  alt=""
                  className=" blur-lg opacity-50"
                />
              </div>
              <div className="absolute bottom-0 z-[8] right-0">
                <img
                  src="/Ellipse 35.png"
                  alt=""
                  className=" blur-lg opacity-50"
                />
              </div>
              <div className="absolute bottom-0 z-[8] right-[50%]">
                <img
                  src="/Ellipse 35.png"
                  alt=""
                  className=" blur-lg opacity-50"
                />
              </div>

              <div className="flex z-[12] items-center">
                <span className=" text-white font-medium transition-colors duration-500">
                  Go to Help Center
                </span>
                <ArrowRight
                  className="ml-2 text-white transition-colors duration-500"
                  size={22}
                />
              </div>
            </div>
          </div>

          {/* Get Support Card */}
          <div className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 border-gray-300 border z-50">
            {/* Default State - Light background */}
            {/* Content */}
            <div className="relative z-10 p-10 h-full flex flex-col justify-between min-h-[280px]">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 duration-500">
                  Get Support
                </h3>
                <p className="text-gray-600  duration-500 leading-relaxed mb-8">
                  Reach out to us by phone or email — our team is ready to help
                  whenever you need it.
                </p>
              </div>

              <div className="flex items-center">
                <span className=" font-medium text-black duration-500">
                  Contact Us
                </span>
                <ArrowRight
                  className="ml-2  transition-colors duration-500"
                  size={22}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
