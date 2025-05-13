import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFolder, FaFolderOpen, FaFile, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutContainer = styled(motion.div)`
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
  display: flex;
  flex: 1;
  height: 100%;
`;

const Editor = styled.div`
  flex: 1;
  display: flex;
  background-color: #1e1e1e;
  color: #f0f0f0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-y: auto;
`;

const LineNumbers = styled.div`
  padding: 15px 10px;
  color: #636363;
  text-align: right;
  user-select: none;
  border-right: 1px solid #333;
  background-color: #252525;
`;

const CodeContent = styled.div`
  padding: 15px;
  white-space: pre-wrap;
  width: 100%;
`;

const Explorer = styled.div`
  width: 250px;
  background-color: #252525;
  border-left: 1px solid #333;
  padding: 10px 0;
  overflow-y: auto;
`;

const ExplorerHeader = styled.div`
  padding: 5px 15px;
  color: #b2b2b2;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const FolderSection = styled.div`
  margin-bottom: 5px;
`;

const FolderItem = styled.div<{ isOpen?: boolean }>`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => (props.isOpen ? '#ffffff' : '#b2b2b2')};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333333;
  }
`;

const FileItem = styled.div`
  padding: 5px 15px 5px 35px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b2b2b2;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333333;
  }
`;

const FileIcon = styled.span<{ color?: string }>`
  color: ${props => props.color || '#b2b2b2'};
  font-size: 13px;
  display: flex;
  align-items: center;
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

const FolderContent = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

// Function to format the about text
const formatAboutText = () => {
  const aboutMeText = `/**
 * About me
 * 
 * I am currently a senior iOS developer with over 4 years of experience. I hold an
 * Engineering degree in Computer Science from the Institute of Technology of
 * Cambodia. I am passionate about challenging myself by learning new and
 * advanced technologies, as well as addressing the problems I encounter in my
 * daily work. With each challenge, I continue to grow and improve.
 * 
 * * Development Skills:
 * - Swift, UIKit, SwiftUI, Core Data
 * - Firebase, AdMobs integration
 * - MVVM-C, MVC architecture
 * - NLP research and implementation
 * 
 * * Projects:
 * - Pdaot: Pomodoro Timer (iOS App)
 * - Thai Buddhist Calendar (iOS App)
 * - Khmer Physic (iOS App)
 * - SurMuy: Khmer Question-and-Answer System (NLP Research)
 * - Brach Nha: Khmer Quiz Game (Internship Project)
 * 
 * * Education:
 * - Engineering degree in Information Communication Engineering (Computer Science)
 * - Institute of Technology of Cambodia, 2019-2024, GPA: 3.5
 * - Beltei International School, 2018, Grade: C
 * 
 * I also work as a graphic designer freelancer creating various visual materials
 * including posters, logos, leaflets, and banners.
 */`;

  return aboutMeText;
};

const About: React.FC = () => {
  const aboutText = formatAboutText();
  const lines = aboutText.split('\n');
  
  const [openFolders, setOpenFolders] = useState({
    interests: true,
    freeTime: true
  });

  const toggleFolder = (folderName: 'interests' | 'freeTime') => {
    setOpenFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };
  
  const dateString = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  return (
    <AboutContainer
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
        <Title>aing_hongsin_about</Title>
      </Header>
      
      <Content>
        <Editor>
          <LineNumbers>
            {lines.map((_, i) => (
              <div key={i}>{i + 36}</div>
            ))}
          </LineNumbers>
          <CodeContent>
            {aboutText}
          </CodeContent>
        </Editor>
        
        <Explorer>
          <ExplorerHeader>EXPLORER</ExplorerHeader>
          
          <FolderSection>
            <FolderItem 
              isOpen={openFolders.interests}
              onClick={() => toggleFolder('interests')}
            >
              <FileIcon>
                {openFolders.interests ? <FaFolderOpen color="#4d97ff" /> : <FaFolder color="#4d97ff" />}
              </FileIcon>
              MY INTERESTS
            </FolderItem>
            
            <FolderContent isOpen={openFolders.interests}>
              <FileItem>
                <FileIcon><FaFolder color="#4d97ff" /></FileIcon>
                React
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFolder color="#4d97ff" /></FileIcon>
                Node
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFolder color="#e75649" /></FileIcon>
                Express
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFolder color="#4d97ff" /></FileIcon>
                HTML&CSS
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFolder color="#4d97ff" /></FileIcon>
                Swift, SwiftUI
              </FileItem>
            </FolderContent>
          </FolderSection>
          
          <FolderSection>
            <FolderItem 
              isOpen={openFolders.freeTime}
              onClick={() => toggleFolder('freeTime')}
            >
              <FileIcon>
                {openFolders.freeTime ? <FaFolderOpen color="#4d97ff" /> : <FaFolder color="#4d97ff" />}
              </FileIcon>
              Free time
            </FolderItem>
            
            <FolderContent isOpen={openFolders.freeTime}>
              <FileItem>
                <FileIcon><FaFile color="#c0c0c0" /></FileIcon>
                read_articles.md
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFile color="#c0c0c0" /></FileIcon>
                hiking.md
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFile color="#c0c0c0" /></FileIcon>
                play_guitar.md
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFile color="#c0c0c0" /></FileIcon>
                hang_out_with_friends.md
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFile color="#c0c0c0" /></FileIcon>
                spend_time_with_my_dog.md
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFile color="#c0c0c0" /></FileIcon>
                watching_movies.md
              </FileItem>
              
              <FileItem>
                <FileIcon><FaFile color="#c0c0c0" /></FileIcon>
                play_board_games.md
              </FileItem>
            </FolderContent>
          </FolderSection>
        </Explorer>
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
    </AboutContainer>
  );
};

export default About; 