import Link from "next/link";
import { FaTwitter, FaPaypal, FaGooglePay } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import Stayudpate from "./update";

export default function Footer() {
  return (
    <main className="bg-[#F0F0F0] relative p-7 md:px-12 w-full h-full md:h-[400px] flex flex-col justify-start items-center mt-32">
      <span className="absolute top-[-60px]">
        <Stayudpate />
      </span>

      <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start mt-52 md:mt-20 border-b-2 pb-5">
        {/* Top div */}
        <div className="w-full md:w-[40%] mt-5">
          <h1 className="text-2xl md:text-3xl font-extrabold">SHOP.CO</h1>
          <p className="mt-2 text-sm">
            We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
          </p>
          <div className="flex space-x-2 mt-3">
            <Link href="https://twitter.com" target="_blank" className="text-blue-500 hover:text-blue-600 text-xl" title="Twitter">
              <FaTwitter />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" className="text-blue-600 hover:text-blue-700 text-xl" title="Facebook">
              <BsFacebook />
            </Link>
            <Link href="https://www.instagram.com/ubaid_ur_rehman123/profilecard/?igsh=MWM5a3p6N3U5bGlwYg==" target="_blank" className="text-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-pink-600 text-xl" title="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://github.com/Ubaid-Ur-Rehman18" target="_blank" className="text-gray-800 hover:text-gray-600 text-xl" title="GitHub">
              <FaSquareGithub />
            </Link>
          </div>
        </div>

        {/* Bottom div */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-between md:place-items-center">
          {/* Box1 */}
          <div className="mt-4">
            <h2 className="text-xl">Company</h2>
            <ul className="space-y-1">
              <li className="font-sans">About</li>
              <li className="font-sans">Features</li>
              <li className="font-sans">Works</li>
              <li className="font-sans">Career</li>
            </ul>
          </div>
          {/* Box 2 */}
          <div>
            <h2 className="text-xl mt-4">Help</h2>
            <ul className="space-y-1">
              <li className="font-sans">Customer Support</li>
              <li className="font-sans">Delivery Details</li>
              <li className="font-sans">Terms & Conditions</li>
              <li className="font-sans">Privacy Policy</li>
            </ul>
          </div>
          {/* Box 3 */}
          <div className="space-y-1 mt-4">
            <h2 className="text-xl">FAQ</h2>
            <ul>
              <li className="font-sans">Account</li>
              <li className="font-sans">Manage Deliveries</li>
              <li className="font-sans">Orders</li>
              <li className="font-sans">Payments</li>
            </ul>
          </div>
          {/* Box 4 */}
          <div className="space-y-1 mt-4">
            <h2 className="text-xl">Resources</h2>
            <ul>
              <li className="font-sans">Free eBooks</li>
              <li className="font-sans">Development Tutorial</li>
              <li className="font-sans">How to - Blog</li>
              <li className="font-sans">YouTube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="w-full flex flex-col md:flex-row items-center mt-5 md:mt-7 justify-between">
        <p className="text-xs md:text-sm">
          Shop.co © Made by UBAID-UR-REHMAN, All Rights Reserved
        </p>
        <div className="flex mt-4 md:mt-0 space-x-4">
          <Link href="https://www.paypal.com" target="_blank" className="text-xl text-blue-600" title="PayPal">
            <FaPaypal />
          </Link>
          <Link href="https://www.visa.com" target="_blank" className="text-xl" style={{ color: "#1434CB" }} title="Visa">
            <FaCcVisa />
          </Link>
          <Link href="https://www.mastercard.com" target="_blank" className="text-xl" style={{ color: "red" }} title="MasterCard">
            <FaCcMastercard />
          </Link>
          <Link href="https://pay.google.com" target="_blank" className="text-xl" style={{ color: "#4285F4" }} title="Google Pay">
            <FaGooglePay />
          </Link>
        </div>
      </div>
    </main>
  );
}
