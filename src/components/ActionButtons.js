import React from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, ArrowLeft } from 'lucide-react';

const ActionButtons = () => {
  return (
    <section className="action-section">
      <div className="container">
        <motion.div 
          className="action-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="action-button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={20} />
            <span>Reset</span>
          </motion.button>
          
          <motion.button
            className="action-button primary-button"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={24} />
            <span>Play</span>
          </motion.button>
          
          <motion.button
            className="action-button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionButtons; 