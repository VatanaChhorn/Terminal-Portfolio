import React, { useState } from 'react';
import styled from 'styled-components';
import Terminal from './Terminal';
import About from './pages/About';
import Projects from './pages/Projects';

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const NavTabs = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 90%;
  max-width: 900px;
`;

const NavTab = styled.div<{ active: boolean }>`
  padding: 8px 20px;
  cursor: pointer;
  color: ${props => props.active ? '#ffffff' : '#777777'};
  background-color: ${props => props.active ? '#1a1a1a' : '#252525'};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  transition: background-color 0.2s, color 0.2s;
  margin-right: 5px;
  border-top: 2px solid ${props => props.active ? '#4d97ff' : 'transparent'};

  &:hover {
    background-color: ${props => props.active ? '#1a1a1a' : '#333333'};
    color: ${props => props.active ? '#ffffff' : '#aaaaaa'};
  }
`;

const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'projects'>('home');

  return (
    <LayoutContainer>
      <NavTabs>
        <NavTab
          active={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
        >
          _hello
        </NavTab>
        <NavTab
          active={activeTab === 'about'}
          onClick={() => setActiveTab('about')}
        >
          _about me
        </NavTab>
        <NavTab
          active={activeTab === 'projects'}
          onClick={() => setActiveTab('projects')}
        >
          _projects
        </NavTab>
      </NavTabs>
      
      {activeTab === 'home' ? (
        <Terminal />
      ) : activeTab === 'about' ? (
        <About />
      ) : (
        <Projects />
      )}
    </LayoutContainer>
  );
};

export default Layout; 