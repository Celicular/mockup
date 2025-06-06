import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Award } from 'lucide-react';

const SubHeader = () => {
  return (
    <section className="subheader">
      <div className="container">
        <motion.div 
          className="subheader-layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Left side - Main content */}
          <div className="subheader-main">
            <motion.h2 
              className="game-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Cosmic Explorers
            </motion.h2>
            
            <motion.p 
              className="game-description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Embark on an interstellar journey across uncharted galaxies. 
              Build your crew, upgrade your ship, and face the mysteries of the cosmos.
            </motion.p>
          </div>
          
          {/* Right side - Game info */}
          <motion.div 
            className="subheader-info"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="info-card">
              <div className="info-card-header">
                <Award size={18} />
                <h3>Game Information</h3>
              </div>
              
              <div className="info-card-content">
                <div className="info-item">
                  <Clock size={16} />
                  <span>Duration</span>
                  <strong>30-60 min</strong>
                </div>
                
                <div className="info-item">
                  <Users size={16} />
                  <span>Players</span>
                  <strong>1-4 players</strong>
                </div>
                
                <div className="info-item">
                  <Star size={16} />
                  <span>Rating</span>
                  <strong>4.8/5</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubHeader; 