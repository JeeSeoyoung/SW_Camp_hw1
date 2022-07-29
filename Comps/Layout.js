import Footer from "./Footer";
import Top from "./Top";

const Layout = ({children}) => {
    return (
        <div className="p-0 px-8">
            <Top></Top>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;