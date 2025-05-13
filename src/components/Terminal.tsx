import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Terminal window styling
const TerminalWindow = styled(motion.div)`
  width: 90%;
  max-width: 900px;
  min-height: 500px;
  flex-grow: 1;
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
`;

const TerminalHeader = styled.div`
  background-color: #2d2d2d;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
`;

const TerminalControls = styled.div`
  display: flex;
  gap: 8px;
`;

const TerminalControl = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const TerminalTitle = styled.div`
  flex: 1;
  text-align: center;
  color: #b2b2b2;
  font-size: 14px;
`;

const TerminalBody = styled.div`
  padding: 30px;
  font-family: 'JetBrains Mono', monospace;
  color: #f0f0f0;
  font-size: 16px;
  line-height: 1.5;
  flex-grow: 1;
  overflow-y: auto;
`;

const ProfileContent = styled(motion.div)`
  margin-top: 30px;
`;

const ProfileName = styled(motion.h1)`
  font-size: 50px;
  margin-bottom: 10px;
  color: #ffffff;
`;

const ProfileTitle = styled(motion.h2)`
  font-size: 24px;
  color: #4d97ff;
  margin-bottom: 30px;
`;

const ProfileDescription = styled(motion.p)`
  max-width: 600px;
  margin-bottom: 30px;
  color: #cccccc;
  font-size: 16px;
  line-height: 1.6;
`;

const CommandPrompt = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-weight: bold;
`;

const Prompt = styled.span`
  color: #4d97ff;
  margin-right: 10px;
`;

const Command = styled.span`
  color: #b2b2b2;
`;

const ProjectsPreview = styled(motion.div)`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background-color: #252525;
  padding: 20px;
  border-radius: 5px;
  border-left: 3px solid #4d97ff;
`;

const ProjectTitle = styled.h3`
  color: #4d97ff;
  margin-bottom: 10px;
`;

const ProjectDetails = styled.div`
  color: #b2b2b2;
  font-size: 14px;
`;

const SocialLinks = styled(motion.div)`
  width: 100%;
  padding: 10px 15px 20px 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`;

const SocialIcon = styled(motion.a)`
  color: #888;
  font-size: 20px;
  transition: color 0.3s;
  
  &:hover {
    color: #4d97ff;
  }
`;

const SocialText = styled.span`
  margin-right: 10px;
  color: #888;
`;

const Terminal: React.FC = () => {
  const [commandVisible, setCommandVisible] = useState(false);
  
  useEffect(() => {
    // Show command prompt after initial animations
    const timer = setTimeout(() => {
      setCommandVisible(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 1.5
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 3
      } 
    }
  };
  
  const dateString = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  return (
    <TerminalWindow
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <TerminalHeader>
        <TerminalControls>
          <TerminalControl color="#ff5f57" />
          <TerminalControl color="#febc2e" />
          <TerminalControl color="#28c840" />
        </TerminalControls>
        <TerminalTitle>aing_hongsin</TerminalTitle>
      </TerminalHeader>
      
      <TerminalBody>
        <Typewriter
          options={{
            delay: 50,
            cursor: ""
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello! I am")
              .start();
          }}
        />
        
        <ProfileContent
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileName variants={itemVariants}>
            Aing Hongsin
          </ProfileName>
          
          <ProfileTitle variants={itemVariants}>
            Senior iOS Developer
          </ProfileTitle>
          
          <ProfileDescription variants={itemVariants}>
            I am currently a senior iOS developer with over 4 years of experience. I hold an
            Engineering degree in Computer Science from the Institute of Technology of
            Cambodia. I am passionate about challenging myself by learning new and
            advanced technologies, as well as addressing the problems I encounter in my
            daily work. With each challenge, I continue to grow and improve.
          </ProfileDescription>
          
          <ProjectsPreview
            variants={projectVariants}
            initial="hidden"
            animate="visible"
          >
            <ProjectCard variants={itemVariants}>
              <ProjectTitle>Pdaot: Pomodoro Timer</ProjectTitle>
              <ProjectDetails>
                {`/**
                  * Integrated iOS app features
                  * Swift, UIKit, Firebase
                  * Full storybook setup
                  */`}
              </ProjectDetails>
            </ProjectCard>
            
            <ProjectCard variants={itemVariants}>
              <ProjectTitle>Thai Buddhist Calendar</ProjectTitle>
              <ProjectDetails>
                {`/**
                  * MVVM-C architecture
                  * SwiftUI, Core Data
                  * AdMobs integration
                  */`}
              </ProjectDetails>
            </ProjectCard>
            
            <ProjectCard variants={itemVariants}>
              <ProjectTitle>SurMuy: Khmer Q&A Model</ProjectTitle>
              <ProjectDetails>
                {`/**
                  * NLP research project
                  * Decoder Only Transformers
                  * Fine-tuned from SeaLLM 7B
                  */`}
              </ProjectDetails>
            </ProjectCard>
          </ProjectsPreview>
          
          {commandVisible && (
            <CommandPrompt>
              <Prompt>&gt;_</Prompt>
              <Command>whois</Command>
              <div className="cursor"></div>
            </CommandPrompt>
          )}
        </ProfileContent>
      </TerminalBody>
      
      <SocialLinks
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <SocialText>find me in:</SocialText>
        <SocialIcon href="https://twitter.com" target="_blank">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://github.com/AingHongSin" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/ainghongsin" target="_blank">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://instagram.com/h0ng.xin" target="_blank">
          <FaInstagram />
        </SocialIcon>
        <span style={{ marginLeft: 'auto', color: '#888' }}>{dateString}</span>
      </SocialLinks>
    </TerminalWindow>
  );
};

export default Terminal; 