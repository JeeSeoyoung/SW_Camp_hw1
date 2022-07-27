import styles from '../styles/Home.module.css';
import Image from "next/image";
import styled from 'styled-components';
import HomeImage from '../public/imgs/profile6.png';

const Article = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 26rem;
max-width: 60vw;
margin: 0 auto;
`;
const ImageContainer=styled.div`
height: 20rem;
text-align: center;
`;
const Body = () => {
    return (
        <Article>
            <ImageContainer>
                <Image
                    src={HomeImage}
                    height={300} // 해당 크기만큼의 비율을 반응형으로 보장 받을 수 있게됨!!
                    width={300}
                    alt="img"
                />
            </ImageContainer>
        </Article>
    );
} 
 
export default Body;