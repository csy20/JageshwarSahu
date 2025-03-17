import React, { useState } from 'react';
import { Github, Instagram, Twitter, Phone, Mail, Share2 } from 'lucide-react';
// Try different import approaches or remove if not working
// import profileImage from './assets/profile.png'; 

function App() {
  const [imgError, setImgError] = useState(false);
  
  // Define multiple possible image sources to try
  const profileImageSrc = imgError 
    ? "https://via.placeholder.com/400x400?text=Jaggeshwar+Sahu" 
    : process.env.PUBLIC_URL + '/profile.png';
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <img
              src={profileImageSrc}
              alt="Jaggeshwar Sahu"
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
              onError={(e) => {
                console.error("Image failed to load");
                setImgError(true);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Jaggeshwar Sahu</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Social Media Personality</p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://www.instagram.com/byte_sutra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://x.com/jaggu_sahu7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Twitter size={20} />
                <span>Twitter</span>
              </a>

              <a 
                href="https://www.snapchat.com/add/byte_sutra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Share2 size={20} />
                <span>Snapchat</span>
              </a>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" size={20} />
                <a href="tel:+919329847848" className="hover:text-gray-300 transition-colors">
                  +91 93298 47848
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <a href="mailto:jageshwarsahu910@gmail.com" className="hover:text-gray-300 transition-colors">
                  jageshwarsahu910@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            As a social media personality, I create engaging content and build meaningful connections with my audience. 
            My passion lies in sharing authentic experiences and inspiring others through digital storytelling.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Jaggeshwar Sahu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;