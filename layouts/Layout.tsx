import PageHead from "../components/page-head/page-head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Layout: React.FC<any> = ({ title, children, ...rest }) => {
    return (
        <>
            <PageHead title={title} />
            <Header />
            <div {...rest}>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;