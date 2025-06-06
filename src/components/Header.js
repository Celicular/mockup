import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Menu, Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1 
            className="header-title"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Task Generator 
            <ChevronRight className="chevron" size={20} strokeWidth={2.5} />
            <span className="highlight">Quick Play</span>
          </motion.h1>

          <div className="flex items-center gap-4">
            <motion.button
              className="icon-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              className="icon-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={20} />
            </motion.button>
            <motion.button
              className="icon-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 