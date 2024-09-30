import React, { useContext } from 'react'
import { useState } from "react";
import './userlearning.css'
import { LearningContent } from '@components/core/LearningContent';
import { LearningCreate } from '@components/core/LearningCreate';
export const UserLearning = () => {
  const [activeSection, setActiveSection] = useState("Learning");
  const renderContent = () => {
    switch (activeSection) {
      case "Learning":
        return <LearningContent/>
      case "Create":
        return <LearningCreate/>
      default:
        return <div>Default</div>;
    }
  };
  return (
    <section className='container-user-learning'>
      <aside>
        <nav>
          <button 
          variant="ghost"
          onClick={() => setActiveSection("Learning")}
          className={activeSection=== "Learning" ? 'clicked' : ''}
          >
          Aprender
          </button>
          <button 
          variant="ghost"
          onClick={() => setActiveSection("Create")}
          className={activeSection=== "Create" ? 'clicked' : ''}
          >
          Generar
          </button>
        </nav>
      </aside>
      <main className='container-user-learning-main'>
      {renderContent()}
      </main>
    </section>
  );
};
