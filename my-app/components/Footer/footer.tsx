'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white static bottom-0">
      <div className="py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Mobile Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile Apps</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">
                <i className="lni lni-play-store text-2xl mr-3"></i>
                <span>
                  <span className="text-xs block">Get It On</span>
                  <span className="font-medium">Google Play</span>
                </span>
              </a>
              <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">
                <i className="lni lni-apple text-2xl mr-3"></i>
                <span>
                  <span className="text-xs block">Get It On</span>
                  <span className="font-medium">App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Chicago</a></li>
                <li><a href="#" className="hover:underline">New York City</a></li>
                <li><a href="#" className="hover:underline">San Francisco</a></li>
                <li><a href="#" className="hover:underline">Washington</a></li>
                <li><a href="#" className="hover:underline">Boston</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Los Angeles</a></li>
                <li><a href="#" className="hover:underline">Seattle</a></li>
                <li><a href="#" className="hover:underline">Las Vegas</a></li>
                <li><a href="#" className="hover:underline">San Diego</a></li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">How It Works</a></li>
              <li><a href="#" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">Signup</a></li>
              <li><a href="#" className="hover:underline">Help & Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>23 New Design Str, Lorem Upsum, 10 Hudson Yards, USA</li>
              <li>
                Tel: +(123) 1800-567-8990<br />
                Mail: <a href="mailto:support@classigrids.com" className="underline">support@classigrids.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6 bg-gray-800">
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
              Designed and Developed by <a href="https://graygrids.com/" target="_blank" rel="nofollow" className="underline">GrayGrids</a>
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
