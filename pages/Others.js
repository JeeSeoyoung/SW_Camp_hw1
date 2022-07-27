import Image from 'next/image';
import profile from '../public/imgs/profile_heera.jpg';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

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
const Detail = styled.div`
flex: 1;
font-size: calc(0.75em+1vw);
text-align: center;
`;
function Others() {
    return (
        <Article>
            <MainBody>
                <ProfileContainer>
                    <Image
                        src={profile}
                        height={170}
                        width={170}
                        alt="img"
                    />
                </ProfileContainer>
                <Detail>
                    <h2>Heera Choi</h2>
                    <div>School of Global Entrepreneurship and ICT</div><br/>
                
                    <div>Major</div>
                    <div>ICT Convergence / Visual and Performing Arts</div>
                    <div>Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Premiere Pro, After Effects</div>
                    
                </Detail>
            </MainBody>
        </Article>
    );
};

export default Others;