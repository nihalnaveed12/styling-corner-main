import { FaTiktok, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#6E00B7] to-[#200333] text-white md:py-16 py-8">
      <div className="mx-auto">
        {/* Main Footer Content */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-7">
          {/* Logo Section */}
          <div className="col-span-1">
            <div className="mb-8">
              <img
                src="/black-logo.png"
                alt="Styling Corner Logo"
                className="h-auto w-auto"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-sans font-[900] text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 font-sans text-sm font-light text-white">
              <li>
                <p className="text-white">Über Styling Corner</p>
              </li>
              <li>
                <p className="text-white">Kundenhilfecenter</p>
              </li>
              <li>
                <p className="text-white">Hilfebereich</p>
              </li>
              <li>
                <p className="text-white">Cookie Einstellungen</p>
              </li>
              <li>
                <p className="text-white">FAQs</p>
              </li>
            </ul>
          </div>

          {/* Discover now */}
          <div className="col-span-1">
            <h3 className="font-sans font-[900] text-lg mb-6">Discover now</h3>
            <ul className="space-y-4 font-sans text-sm font-light text-white">
              <li>
                <p className="text-white">Newacenter Customer</p>
              </li>
              <li>
                <p className="text-white">Help CenterStyling</p>
              </li>
              <li>
                <p className="text-white">Corner Inkretments</p>
              </li>
              <li>
                <p className="text-white">Styling Corner Gift</p>
              </li>
              <li>
                <p className="text-white">Voucher</p>
              </li>
              <li>
                <p className="text-white">New entries</p>
              </li>
              <li>
                <p className="text-white">TOP reviews</p>
              </li>
              <li>
                <p className="text-white">The best offers</p>
              </li>
            </ul>
          </div>

          {/* For companies */}
          <div className="col-span-1">
            <h3 className="font-sans font-[900] text-lg mb-6">For companies</h3>
            <ul className="space-y-4 font-sans text-sm font-light text-white">
              <li>
                <p className="text-white">Create / edit / delete entry</p>
              </li>
              <li>
                <p className="text-white">Styling Corner Help Center</p>
              </li>
              <li>
                <p className="text-white">Styling Corner PRO Software</p>
              </li>
              <li>
                <p className="text-white">Fields of study / Branchee</p>
              </li>
              <li>
                <p className="text-white">Marketing Center</p>
              </li>
              <li>
                <p className="text-white">Advertising space</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Logos Section */}
        <div className="flex md:justify-end justify-center items-center gap-6 mb-8 px-7">
          <div className="flex items-center md:gap-6 gap-20">
            <FaInstagram className="text-2xl text-white hover:text-purple-200 transition-colors cursor-pointer" />
            <FaTiktok className="text-2xl text-white hover:text-purple-200 transition-colors cursor-pointer" />
            <FaLinkedinIn className="text-2xl text-white hover:text-purple-200 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Bottom Section */}

        <div className="flex flex-col-reverse md:flex-row  justify-between items-start lg:items-center pt-8 border-t border-white/20">
          {/* Copyright */}
          <div className="lg:mb-0 md:px-7 px-2">
            <p className="font-sans font-light md:text-[16px] text-[14px] text-white mx-auto text-center">
              © 2025 Styling Corner |{" "}
              <span className="text-white hover:text-purple-200 transition-colors font-bold italic">
                Customer-Login
              </span>
            </p>
          </div>

          {/* Right side - Social links and legal */}
          <div className="flex flex-col lg:flex-row px-7 items-start lg:items-center gap-6 mb-8 md:mb-0">
            {/* Legal Links */}
            <div className="flex items-center gap-4 font-sans md:text-[16px] text-[14px] font-light text-white ">
              <p className="hover:text-white transition-colors">AGB's</p>
              <span>|</span>
              <p className="hover:text-white transition-colors">
                Data Protection Center
              </p>
              <span>|</span>
              <p className="hover:text-white transition-colors">Imprint</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
