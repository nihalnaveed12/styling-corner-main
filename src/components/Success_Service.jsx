import React from "react";

const SuccessServicesSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-200 py-[92px] relative overflow-hidden">
      {/* Decorative dotted line */}

      <section className="">
        {/* Header */}
        <div className="md:mb-16 mb-8">
          <h2 className="md:text-[58px] text-[34px] md:leading-[67px] leading-[40px] font-bold text-gray-900 mb-4 font-sans">
            Dedicated To Your{" "}
            <span className="text-[#6E00B7] italic font-serif font-normal md:text-[58px] text-[34px] ">
              Success
            </span>
          </h2>
          <p className="text-gray-600 text-[16px] font-sans leading-[100%]">
            Every business is unique — and so is our support. We’re here to help
            you thrive every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-20 py-2 md:mt-32">
          {/* Personal Support Manager */}
          <div className="rounded-2xl md:mb-5 mr-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">
              Personal Support Manager
            </h3>
            <p className="text-gray-600 leading-[100%] text-[16px] font-sans">
              Work closely with a dedicated success manager to unlock your full
              potential on the platform.
            </p>
          </div>

          {/* Brand Assistance */}
          <div className="rounded-2xl md:mb-5">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">
              Brand Assistance
            </h3>
            <p className="text-gray-600 leading-[100%] text-[16px] font-sans">
              Your account manager will help present your brand in the best
              possible light.
            </p>
          </div>

          {/* 24/7 Priority Support */}
          <div className="rounded-2xl md:mb-5">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">
              24/7 Priority Support
            </h3>
            <p className="text-gray-600 leading-[100%] text-[16px] font-sans">
              Need help? Our support team is always available—day or night.
            </p>
          </div>

          {/* Easy Data Migration */}
          <div className="rounded-2xl mr-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">
              Easy Data Migration
            </h3>
            <p className="text-gray-600 leading-[100%] text-[16px] font-sans">
              Switching platforms? We'll handle the transfer of your data with
              care and speed.
            </p>
          </div>

          {/* Custom Solutions */}
          <div className="rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">
              Custom Solutions
            </h3>
            <p className="text-gray-600 leading-[100%] text-[16px] font-sans ">
              Got a specific request or challenge? Let's solve it together.
            </p>
          </div>

          {/* Expert Advice */}
          <div className="rounded-2xl font-sans">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Expert Advice
            </h3>
            <p className="text-gray-600 leading-[100%] text-[16px]">
              Receive professional advice from our knowledgeable product
              specialists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessServicesSection;
