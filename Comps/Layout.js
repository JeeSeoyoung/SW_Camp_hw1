import Footer from "./Footer";
import Top from "./Top";
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

const Container = styled.div`
padding: 0 2vw;
`;
const Layout = ({children}) => {
    return (
        <Container>
            <Top></Top>
            {children}
            <Footer></Footer>
        </Container>
    );
}

export default Layout;