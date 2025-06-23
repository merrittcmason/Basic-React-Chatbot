// Incorporate the following changes (Commented out) into your main codebase (For example, src/app.tsx):

import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"
// import { Chatbot } from './components/Chatbot';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

//example code


            </div>
          </div>
        </div>
      </footer>
//        <Chatbot isDarkMode={isDarkMode} />
      <Analytics />
    </div>
  );
}

export default App;
