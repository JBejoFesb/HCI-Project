import PageHead from "../components/page-head/page-head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useSelector, useDispatch } from 'react-redux'
import logBoxSlice, { change, selectActive } from "../slices/logBoxSlice";

const Layout: React.FC<any> = ({ title, children, ...rest }) => {

    const active = useSelector(selectActive);

    return (
        <>
            <PageHead title={title} />
            <div className={active ? "fixed w-full overflow-hidden" : ""}>
                <Header />
                <div {...rest}>{children}</div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;