import styled from "styled-components";
import logo from "../assets/logo.png";
import landingHero from "../assets/landingHero.gif";
import twitter from "../assets/twitter2.svg";
import discord from "../assets/discord2.svg";

const Landing = () => {
  return (
    <LandingSection className="gradient1">
      <LandingNav>
        <TwitterButton href="https://twitter.com/FunguyzNFT" target="_blank"><img src={twitter} alt="twitter Icon"/></TwitterButton>
        <DiscordButton href="https://discord.gg/d7NxUfYwDy" target="_blank"><img src={discord} alt="discord icon"/></DiscordButton>
      </LandingNav>
     <Logo src={logo} alt="logo" /> 
     <LandingHero src={landingHero} alt="funguyz hero" />
     <Copy>3,000 Happy-go-lucky Mushroom NFTs Born on the Solana Blockchain</Copy>
     <MintButton>
       <h4 className="gradientText">Coming Soon!</h4>
      </MintButton>
    </LandingSection>
  )
}

const LandingSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const LandingNav = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25%;
  gap: 4rem;
  @media screen and (max-width: 400px){
    gap: 2rem;
  }
`;

const TwitterButton = styled.a`
  img {
    height: 50px;
    widith: 50px;
  }
`;

const DiscordButton = styled.a`
  img {
    height: 50px;
    width: 50px;
  }
`
const Logo = styled.img`
  width: 950px;
  height: auto;
  object-fit: cover;
  opacity: 90%;
  @media screen and (max-width: 1000px){
    width: 90%;
  }
`;

const LandingHero = styled.img`
  height: auto;
  width: 500px;
  margin-top: -220px;
  z-index: 1;
  @media screen and (max-width: 1000px){
    width: 70%;
  }
  @media screen and (max-width: 700px){
    margin-top: -20%;
  }
  @media screen and (max-width: 500px){
    margin-top: -25%;
  }

`;


const Copy = styled.h2`
  max-width: 800px;
  text-align: center;
  @media screen and (max-width: 500px){
    font-size: 38px; 
}
`;

const MintButton = styled.button`
  width: 320px;
  height: 80px;
  border-radius: 50px;
  backround: white;
  border: none;
  margin: 1rem 0rem;
`;


export default Landing;
