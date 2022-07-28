import styles from '../styles/Home.module.css'
// import styled from 'styled-components';
import Image from 'next/image';
import Instagram from '../public/imgs/instagram.png'
import Github from '../public/imgs/github.png'
import Facebook from '../public/imgs/facebook.png'
import styled from 'styled-components'

const ContactT = styled.div`
display: flex;
justify-content: center;
text-align: center;
margin: 0;
font-size: 0.9rem;
`;
const Contact = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const ImageContainer =styled.div`
height: 20rem;
text-align: center;
margin:0 1rem;
`;

function ContactButton({contactName,url}){
    return(
        <ImageContainer>
            <a href={url}>
                <Image 
                    src={contactName}
                    height={30}
                    width={30}
                    alt='img'
                />
            </a>
        </ImageContainer>
    )
}

const Footer = () => {
    const contactName = [Instagram,Facebook,Github];
    const url = ['https://www.instagram.com/__seoyoung.____/?hl=ko',
                '',
                'https://github.com/JeeSeoyoung']
    return (
    <div>
        <ContactT>
            <h2>CONTACT</h2>
        </ContactT>

        <Contact>
            {contactName.map((data,idx) => <ContactButton key={idx} contactName={data} url={url[idx]}/>)}
        </Contact>
    </div>
    );
}

export default Footer;