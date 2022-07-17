import Footer from "./Footer";
import Top from "./Top";

const Layout = ({children}) => {
    return (
        <div>
            <Top></Top>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;