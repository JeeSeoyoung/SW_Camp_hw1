import styles from '../styles/Home.module.css';
import Image from "next/image";
import styled from 'styled-components';
import Profile from '../public/imgs/Profile5.jpg';

const Article = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 26rem;
max-width: 60vw;
margin: 0 auto;
`;
const MainBody =styled.div`
display: flex;
flex-direction: column;
`; 
const ProfileContainer=styled.div`
flex: 1;
height:20rem;
/* width: 20rem; */
text-align: center;
align-items: center;
`;
const ImageContainer=styled.div`
border-radius:100%;
`;
const Detail = styled.div`
flex: 1;
font-size: calc(0.75em+1vw);
text-align: center;
`;
const AboutMe = ()=>{
    return(
        <Article>
            <MainBody>
                <ProfileContainer>
                    <ImageContainer>
                        <Image
                            src={Profile}
                            height={180}
                            width={180}
                            alt="img"
                        />
                    </ImageContainer>
                </ProfileContainer>
                <Detail>
                    <h4>Jee Seoyoung</h4>
                    <p>Handong Global University</p>
                    <p>ICT Convergence/ UX Engineering</p>
                    <p>jiseo09863@gmail.com</p>
                </Detail>
            </MainBody>
        </Article>
    );
}
export default AboutMe;