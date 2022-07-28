import styles from '../styles/Home.module.css'
import Link from 'next/link';
import styled from 'styled-components';

const MainTop = styled.div`
text-align: center;
margin: 2rem 2rem 0 2rem;
line-height: 1.15;
`;
const HomeTitle = styled.a`
font-size: 3rem;
font-weight:bold;
margin-bottom: 1rem;
color: #4791FF;
cursor:pointer;
`;
const HomeSubTitle = styled.p`
font-size: 0.9rem;
`;
const NavContainer = styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;
margin-top: 2.1rem;
`;
const Nav = styled.div`
min-width: 5rem;
`;
const NavBtn = styled.a`
font-size:1.1rem;
text-align:center;
font-weight:bold;
&:hover{
    color:#4791FF;
};
cursor:pointer;
`;

function NavButton({navName,url}){
    return(
        <Nav>
            <Link href={url}><NavBtn>{navName}</NavBtn></Link>
        </Nav>
    )
}

const Top = () => {
    const navName = ["About Me","Home","Skills","Others"];
    const url = ["/AboutMe","/","Skill","Others"];

    return (
    <MainTop>
        <Link href="/">
            <HomeTitle>SEOYOUNG</HomeTitle>
        </Link>
        <HomeSubTitle>Welcome To My Website \o/</HomeSubTitle>
        <NavContainer>
            {navName.map((data,idx) => <NavButton key={idx} navName={data} url = {url[idx]}/>)}
        </NavContainer>
    </MainTop>
    );
}

export default Top;