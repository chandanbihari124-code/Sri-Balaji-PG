import { useState } from "react";
import { Analytics } from '@vercel/analytics/react';



interface Room {
  type: string;
  price: number;
  description: string;
  features: string[];
  icon: string;
}

interface Location {
  name: string;
  address: string;
  mapUrl: string;
}

export function App() {
  const [selectedLocation, setSelectedLocation] = useState<number>(0);

  const rooms: Room[] = [
    {
      type: "Single Sharing Room",
      price: 12000,
      description: "Perfect for individuals seeking privacy and comfort",
      features: ["Private room", "Attached bathroom", "AC facility", "Personal wardrobe"],
      icon: "👤"
    },
    {
      type: "Double Sharing Room",
      price: 10500,
      description: "Ideal for sharing with a friend or colleague",
      features: ["Shared with one person", "AC facility", "Individual wardrobes", "Spacious room"],
      icon: "👥"
    },
    {
      type: "Triple Sharing Room",
      price: 9500,
      description: "Economical option with comfortable living",
      features: ["Shared with two people", "AC facility", "Individual storage", "Community living"],
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  const facilities = [
    "🍽️ Two times food (Lunch & Dinner)",
    "💧 RO purified drinking water",
    "❄️ Air conditioned rooms",
    "🧊 Refrigerator facility",
    "🧼 Washing machine",
    "📶 High-speed WiFi",
    "👔 Almirah & storage",
    "🚿 Attached bathroom",
    "🛡️ 24/7 Security",
    "🧹 Regular housekeeping"
  ];

  const locations: Location[] = [
    {
      name: "Sri Balaji PG - Andavar Nagar",
      address: "5/6A, Andavar Nagar Main St, Andavar Nagar, Ramapuram, Chennai, Tamil Nadu 600089",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123456789012!2d80.1534!3d13.0358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666666666666%3A0x3333333333333333!2sAndavar%20Nagar%20Main%20St%2C%20Andavar%20Nagar%2C%20Ramapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
      name: "Sri Balaji PG - Thirumalai Nagar",
      address: "3, Maha Vishnu Street, near Shrusti Hospital, Thirumalai Nagar, Ramapuram, Chennai, Tamil Nadu 600089",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.987654321098!2d80.1545!3d13.0365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677777777777%3A0x4444444444444444!2sThirumalai%20Nagar%2C%20Ramapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1234567891"
    },
    {
      name: "Sri Balaji PG - Andavar Nagar (2)",
      address: "25JJ+GVR, Andavar Nagar, Ramapuram, Chennai, Tamil Nadu 600089",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.112233445566!2d80.1525!3d13.0360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668888888888%3A0x5555555555555555!2sAndavar%20Nagar%2C%20Ramapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1234567892"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Sri Balaji PGs</h1>
                <p className="text-sm text-gray-600 font-medium">Premium PG Accommodation in Ramapuram</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#rooms" className="text-gray-700 hover:text-orange-600 font-medium transition-all hover:scale-105 transform">Rooms</a>
              <a href="#facilities" className="text-gray-700 hover:text-orange-600 font-medium transition-all hover:scale-105 transform">Facilities</a>
              <a href="#locations" className="text-gray-700 hover:text-orange-600 font-medium transition-all hover:scale-105 transform">Locations</a>
              <a href="#contact" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-orange-200 hover:shadow-xl transition-all transform hover:scale-105">Contact Us</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-yellow-300">Sri Balaji PGs</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-orange-100 max-w-3xl mx-auto">
            Your Premium Home Away From Home in Ramapuram, Chennai
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#rooms" className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-1">
              🏠 View Rooms
            </a>
            <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-red-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-1">
              📞 Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Our Rooms
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect accommodation that suits your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="relative text-6xl mb-4 transform group-hover:scale-110 transition-transform">{room.icon}</div>
                  <h4 className="text-2xl font-bold relative">{room.type}</h4>
                  <p className="text-orange-100 mt-2 relative">{room.description}</p>
                </div>
                <div className="p-8">
                  <div className="mb-6 text-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      ₹{room.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600 ml-2 font-medium">/ month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-orange-50 transition-colors">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                    🚀 Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Premium Facilities
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enjoy world-class amenities designed for your ultimate comfort and convenience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="group relative bg-white p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{facility.split(' ')[0]}</div>
                <p className="text-gray-700 font-semibold text-sm">{facility.substring(facility.indexOf(' ') + 1)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Our Locations
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our convenient locations in Ramapuram, Chennai
            </p>
          </div>
          
          <div className="mb-10 flex justify-center">
            <div className="bg-white/80 backdrop-blur-md rounded-full p-1 shadow-xl border border-white/20">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLocation(index)}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedLocation === index
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {location.name.split(' - ')[1]}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-8 bg-gradient-to-r from-orange-500 to-red-600 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <h4 className="text-3xl font-bold relative">{locations[selectedLocation].name}</h4>
              <p className="text-orange-100 mt-3 flex items-start relative">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{locations[selectedLocation].address}</span>
              </p>
            </div>
            <div className="h-96">
              <iframe
                src={locations[selectedLocation].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to book your stay? Contact us today and secure your perfect room!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-xl">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">
                📞 Contact Information
              </h4>
              <div className="space-y-6">
                <div className="flex items-start group p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <p className="text-gray-900 font-bold text-lg">Phone</p>
                    <p className="text-red-600 font-bold text-xl">+91 93446 61327</p>
                  </div>
                </div>
                
                <div className="flex items-start group p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <p className="text-gray-900 font-bold text-lg">Email</p>
                    <p className="text-gray-700 font-semibold">chandan.bihari.124@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <p className="text-gray-900 font-bold text-lg">Locations</p>
                    <p className="text-gray-700 font-semibold">Ramapuram, Chennai</p>
                    <p className="text-gray-600">Tamil Nadu 600089</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <h5 className="font-bold text-orange-900 mb-3 text-lg">🕐 Office Hours</h5>
                <p className="text-gray-700 font-medium">Monday - Sunday: 8:00 AM - 9:00 PM</p>
                <p className="text-orange-600 font-semibold">We're open all days for your convenience!</p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-xl">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">
                📝 Book Your Room
              </h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-800 font-bold mb-3">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-3">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-3">Email</label>
                  <input type="email" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" placeholder="Enter your email" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-800 font-bold mb-3">Room Type</label>
                    <select className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all">
                      <option>Select room type</option>
                      <option>Single Sharing - ₹12,000</option>
                      <option>Double Sharing - ₹10,500</option>
                      <option>Triple Sharing - ₹9,500</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-bold mb-3">Preferred Location</label>
                    <select className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all">
                      <option>Select location</option>
                      <option>Andavar Nagar</option>
                      <option>Thirumalai Nagar</option>
                      <option>Andavar Nagar (2)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-3">Message</label>
                  <textarea className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" rows={3} placeholder="Any special requirements or questions? (Optional)"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  🚀 Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Sri Balaji PGs
              </span>
            </div>
            <p className="text-gray-300 mb-4 text-lg font-medium">Premium PG Accommodation in Ramapuram, Chennai</p>
            <p className="text-orange-400 font-bold mb-2">📞 +91 93446 61327</p>
            <p className="text-gray-400 mb-6">📧 chandan.bihari.124@gmail.com</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Sri Balaji PGs. All rights reserved. | Designed with ❤️ for your comfort
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
