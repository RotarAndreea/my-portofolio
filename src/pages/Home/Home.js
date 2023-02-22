import React from 'react'
import {HeaderContainer, ProfileImageContainer, Image, HeaderContentContainer,
TitleContent, MiniIndex, Title, BackgroundTitle, TransparentFooter, BlackFooter, FooterContainer, UpperContainer, MiddleContainer, BackgroundTitleConatiner  } from './HomeElements'
import Portrait from "../../images/profile-picture.jpeg"
import {ThemeProvider} from "styled-components";
import { darkTheme, lightTheme } from '../../components/Themes.js/dark-white';
import { GlobalStyles } from '../../components/globalStyles';
import { ContentContainer } from '../../layouts/PageContainer';
import { SlidierCircle, TogglerContainer, TogglerText, Slider } from '../../components/Buttons/TogglerButton';
import GithubIcon from "../../images/github.png"
import LinkedinIcon from "../../images/linkedin.png"
import InstagramIcon from "../../images/instagram.png"
import { GroupedIcons, Icon, IconContainer } from '../../layouts/IconsContainer';

const Home = () => {
    const [theme, setTheme] = React.useState('light')

    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       <>
          <GlobalStyles/>
          <HeaderContainer>
              <ProfileImageContainer>
                  <Image src={Portrait}/>
              </ProfileImageContainer>
              <HeaderContentContainer>
                  <UpperContainer>
                        <TogglerContainer>
                                <TogglerText theme="light">Light</TogglerText>
                                <Slider >
                                  <SlidierCircle  onClick={themeToggler} theme={theme}/>
                                </Slider>
                                <TogglerText theme="dark">Dark</TogglerText>
                        </TogglerContainer>
                  </UpperContainer>
                  <MiddleContainer>
                        <TitleContent>
                                <MiniIndex>01</MiniIndex>
                                <Title>Rotar Andreea</Title>
                        </TitleContent> 
                        <BackgroundTitleConatiner>
                            <BackgroundTitle>Rotar Andreea</BackgroundTitle>

                        </BackgroundTitleConatiner>
                  </MiddleContainer>
              </HeaderContentContainer>
              <FooterContainer>
                      <TransparentFooter>
                          <GroupedIcons>
                              <IconContainer>
                                  <Icon src={GithubIcon}/>
                              </IconContainer>  
                              <IconContainer>
                                  <Icon src={LinkedinIcon}/>  
                              </IconContainer>  
                              <IconContainer>
                                  <Icon src={InstagramIcon}  />
                              </IconContainer>  
                          </GroupedIcons>
                      </TransparentFooter>
                      <BlackFooter>
                          
                      </BlackFooter>  
              </FooterContainer>

        </HeaderContainer>
        <ContentContainer>

        </ContentContainer>
      </>
    </ThemeProvider>
  )
}

export default Home