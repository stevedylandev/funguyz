import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import phase1Image from "../../assets/phase1card.png"
import phase1Poster from "../../assets/phase1Poster.png"


const PhaseCard = () => {
  
  const [showPhase,setShowPhase] = useState(false)

  const openModal = () => {
    setShowPhase(true)
  }

  return (
    <PhaseCardContainer>
    {showPhase ? <Modal setShowPhase={setShowPhase} showPhase={showPhase} /> : null}
      <h2>Phase 1</h2>
      <PhaseCardInner>
        <PhaseImg>
          <img src={phase1Image} alt="Phase 1 FunGuy" />
        </PhaseImg>
        <PhaseList>
          <ul>
            <li><h4>Collabs and Partnerships</h4></li>
            <li><h4>Giveaways and WL Begin</h4></li>
            <li><h4>Launch Q1 2022</h4></li>
          </ul>
        </PhaseList>
        <ExpandButton onClick={openModal}><h5 className="gradientText">More Details</h5></ExpandButton>
      </PhaseCardInner>
    </PhaseCardContainer>
  )
}

const Modal = ({ setShowPhase }) => {

  const closeModal = () => {
    setShowPhase(false)
  }

  return (
    <ModalContainer>
      <ModalMain src={phase1Poster} alt="Phase 1 Roadmap Poster" />
      <CloseButton onClick={closeModal}><h5 className="gradientText">Close</h5></CloseButton>
    </ModalContainer>
  )
}

const PhaseCardContainer = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  h2 {
    color: white;
  }
  @media screen and (max-width: 500px){
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }
`

const PhaseCardInner = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 10px solid #6687E7;
  border-radius: 15px;
  background: white;
`
const PhaseImg = styled(motion.div)`
  min-height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    width: 350px;
    object-fit: cover;
    margin-top: 3rem;
    border-radius: 30px;
  }
  @media screen and (max-width: 500px){
    img {
    width: 90%;
    }
  }
  @media screen and (max-width: 400px) {
    min-height: 400px;
    margin-top: 1rem;
  }
`

const PhaseList = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ul {
    list-style: none;
  }
  li {
    padding: 1rem 0rem 0rem 2rem;
    padding-left: 2rem;
    text-indent: -0.75rem;
  }
  h4:before {
    content: ' 🍄 '
  }
  @media screen and (max-width: 500px){
    padding: 0rem;
    h4 {
      font-size: 21px;
    }
  }
`

const ExpandButton = styled.button`
  background: white;
  border: 5px solid #6687E7;
  border-radius: 30px;
  margin: 1rem 0rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  z-index: 2;
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 10;
`

const ModalMain = styled(motion.img)`
  position: fixed;
  width: auto;
  height: 90%;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  @media screen and (max-width: 700px){
    width: 90%;
    height: auto;
  }
`

const CloseButton = styled.button`
  bottom: 0;
  left: 50%;
  transform: translate(0%, -50%);
  z-index: 12;
  background: white;
  border: none;
  border-radius: 30px;
  margin: 1rem auto;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
`

export default PhaseCard;
