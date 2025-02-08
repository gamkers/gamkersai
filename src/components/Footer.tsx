import { Shield, Mail, MessageCircle, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                GAMKERS AI
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced AI-powered security suite for deep code inspection and vulnerability detection.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#developers" className="text-gray-400 hover:text-purple-400 transition-colors">Developers</a>
              </li>
              <li>
                <a href="#contribute" className="text-gray-400 hover:text-purple-400 transition-colors">Contribute</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-purple-400" />
                <a href="mailto:support@studentbae.in" className="hover:text-purple-400 transition-colors">
                  support@studentbae.in
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MessageCircle className="w-5 h-5 mr-2 text-purple-400" />
                <a 
                  href="https://api.whatsapp.com/send?phone=918778672797&text=I%E2%80%99m%20interested%20in%20GAMKERS%20AI%20and%20would%20like%20to%20know%20more.%20Can%20you%20help%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://www.instagram.com/gamkers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@gamkeryt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/50 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GAMKERS AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
