import './collapse.scss';
import React, { useState, useRef, useEffect } from 'react';
import vectorUp from '../../assets/vector-up.png';
import vectorDown from '../../assets/vector-down.png';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }, [isOpen]);
  
    return (
      <div className="collapse-container">
        <div className="collapse-header" onClick={toggleCollapse}>
          <h2>{title}</h2>
          <button>
            <img src={isOpen ? vectorDown : vectorUp} alt="toggle icon" />
          </button>
        </div>
        <div ref={contentRef} className={`collapse-content ${isOpen ? 'open' : ''}`}>
          <div className="collapse-content-inner">
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  export default Collapse;