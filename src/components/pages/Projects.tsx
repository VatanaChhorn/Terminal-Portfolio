import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ProjectsContainer = styled(motion.div)`
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

const Header = styled.div`
  background-color: #2d2d2d;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
`;

const Controls = styled.div`
  display: flex;
  gap: 8px;
`;

const Control = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  color: #b2b2b2;
  font-size: 14px;
`;

const Content = styled.div`
  padding: 40px;
  color: #f0f0f0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  line-height: 1.5;
  flex: 1;
  overflow-y: auto;
`;

const SectionTitle = styled.div`
  color: #b2b2b2;
  font-size: 18px;
  margin-bottom: 40px;
  opacity: 0.7;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #252525;
  border-bottom: 1px solid #333;
`;

const ProjectTitle = styled.div`
  color: #e3b341; /* GitHub-like gold color */
  font-weight: 500;
`;

const CommitCount = styled.div`
  color: #8b949e;
  font-size: 14px;
`;

const ProjectCode = styled.div`
  padding: 20px;
  color: #b2b2b2;
  background-color: #1e1e1e;
  white-space: pre-wrap;
  font-size: 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectButton = styled.div`
  background-color: #e3b341;
  color: #0d1117;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f7ce4b;
  }
`;

const ProjectDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  color: #8b949e;
  font-size: 15px;
  line-height: 1.6;
  flex-grow: 1;
`;

const GitHubButton = styled.a`
  display: inline-block;
  background-color: #1e1e1e;
  color: #58a6ff;
  border: 1px solid #30363d;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s;
  font-size: 14px;
  
  &:hover {
    background-color: #30363d;
  }
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

const Projects: React.FC = () => {
  const dateString = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  return (
    <ProjectsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <Controls>
          <Control color="#ff5f57" />
          <Control color="#febc2e" />
          <Control color="#28c840" />
        </Controls>
        <Title>aing_hongsin_projects</Title>
      </Header>
      
      <Content>
        <SectionTitle>// Top projects</SectionTitle>
        
        <ProjectsGrid>
          {/* SurMuy: Khmer Q&A Model */}
          <ProjectColumn>
            <ProjectCard>
              <ProjectHeader>
                <ProjectTitle>SurMuy: Khmer Q&A Model</ProjectTitle>
                <CommitCount>150+ commits</CommitCount>
              </ProjectHeader>
              <ProjectCode>{`/**
 * SurMuy: Khmer Q&A Model
 * NLP research project for Khmer language.
 * Fine-tuned on a Decoder-Only Transformer (SeaLLM 7B).
 * Hosted on Hugging Face Spaces.
 */`}</ProjectCode>
              <ProjectButton onClick={() => window.open('https://huggingface.co/spaces/AingHongSin/SurMuy-Khmer-QA', '_blank')}>see the project</ProjectButton>
            </ProjectCard>
          </ProjectColumn>
          
          {/* Pdaot: Pomodoro Timer */}
          <ProjectColumn>
            <ProjectCard>
              <ProjectHeader>
                <ProjectTitle>Pdaot: Pomodoro Timer</ProjectTitle>
                <CommitCount>200+ commits</CommitCount>
              </ProjectHeader>
              <ProjectCode>{`/**
 * Pdaot: Pomodoro Timer (iOS App)
 * iOS application for time management using Pomodoro Technique.
 * Built with Swift & UIKit.
 * Features Firebase integration.
 */`}</ProjectCode>
              <ProjectButton onClick={() => window.open('https://github.com/AingHongSin/Pdaot-Pomodoro-Timer-iOS-App', '_blank')}>see the project</ProjectButton>
            </ProjectCard>
          </ProjectColumn>
        </ProjectsGrid>
      </Content>
      
      <SocialLinks
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <SocialText>find me in:</SocialText>
        <SocialIcon href="https://twitter.com" target="_blank">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://github.com" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank">
          <FaInstagram />
        </SocialIcon>
        <span style={{ marginLeft: 'auto', color: '#888' }}>{dateString}</span>
      </SocialLinks>
    </ProjectsContainer>
  );
};

export default Projects; 