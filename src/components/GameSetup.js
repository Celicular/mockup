import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Monitor } from 'lucide-react';

const GameSetup = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  
  const difficulties = [
    { id: 'easy', label: 'Easy', color: 'var(--color-success)' },
    { id: 'medium', label: 'Medium', color: 'var(--color-warning)' },
    { id: 'hard', label: 'Hard', color: 'var(--color-danger)' }
  ];
  
  const parameters = [
    { id: 'param1', label: 'Parameter Example 1' },
    { id: 'param2', label: 'Parameter Example 2' },
    { id: 'param3', label: 'Parameter Example 3' },
    { id: 'param4', label: 'Parameter Example 4' }
  ];

  return (
    <section className="game-setup">
      <div className="container">
        <div className="setup-layout">
          {/* Left side - Configuration */}
          <div className="setup-config">
            {/* Difficulty Selection */}
            <motion.div 
              className="config-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="config-title">Choose Difficulty</h3>
              
              <div className="difficulty-options">
                {difficulties.map(difficulty => (
                  <div 
                    key={difficulty.id}
                    className="difficulty-option"
                  >
                    <input
                      type="radio"
                      id={difficulty.id}
                      name="difficulty"
                      value={difficulty.id}
                      checked={selectedDifficulty === difficulty.id}
                      onChange={() => setSelectedDifficulty(difficulty.id)}
                      className="difficulty-input"
                    />
                    <label 
                      htmlFor={difficulty.id}
                      className="difficulty-label"
                    >
                      <span 
                        className="difficulty-indicator" 
                        style={{ backgroundColor: difficulty.color }}
                      ></span>
                      <span>{difficulty.label}</span>
                      {selectedDifficulty === difficulty.id && (
                        <Check size={16} className="difficulty-check" />
                      )}
                    </label>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Parameter Configuration */}
            <motion.div 
              className="config-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="config-title">Configure Parameters</h3>
              
              <div className="parameters-list">
                {parameters.map((param, index) => (
                  <div key={param.id} className="parameter-item">
                    <span className="parameter-label">{param.label}</span>
                    <input 
                      type="text" 
                      className="parameter-input" 
                      placeholder="Enter value"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right side - Game Preview */}
          <motion.div 
            className="setup-preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="preview-card">
              <h3 className="preview-title">Game Preview</h3>
              
              <div className="preview-placeholder">
                <Monitor size={48} />
                <p>Preview will appear here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameSetup; 