'use client'
import { useState, useEffect } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  if (!mounted) return null

  return (
    <footer className="bg-gray-900 text-white bottom-0">

      {/* Bottom Section */}
      <div className="py-6 bg-gray-800 bottom-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <ul className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Advanced Search</a></li>
            <li><a href="#" className="hover:underline">Site Map</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
          </ul>
          <div className="text-center md:text-right">
            <p>
              Designed and Developed by <a href="#" target="_blank" rel="nofollow" className="underline">Amyel</a>
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="#"><i className="lni lni-facebook-filled text-xl"></i></a>
              <a href="#"><i className="lni lni-twitter-original text-xl"></i></a>
              <a href="#"><i className="lni lni-youtube text-xl"></i></a>
              <a href="#"><i className="lni lni-linkedin-original text-xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
