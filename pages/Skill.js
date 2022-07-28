import styles from '../styles/Home.module.css'
import Image from "next/image";
import styled from 'styled-components';

const Article = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 28rem;
max-width: 60vw;
margin: 0 auto;
`;
const Skills =styled.div`
display: flex;
flex-direction: column;
`;
const SkillsDetail = styled.div`
flex: 1;
text-align: center;
min-width: 20vw;
min-height: 20vh;
`;
const Skill = ()=>{
    return(
        <Article>
            <Skills>
                <SkillsDetail>
                    <h4>Tool</h4>
                    <p>Figma  /  Illustrator  /  Photoshop  /  Unity</p>
                    <h4>Language</h4>
                    <p>Python  /  html  /  CSS  /  Javascript</p>
                </SkillsDetail>
            </Skills>
        </Article>
    );
}
export default Skill;