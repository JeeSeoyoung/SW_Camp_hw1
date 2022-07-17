import Footer from "./Footer";
import Top from "./Top";
import styles from '../styles/Home.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Top></Top>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;