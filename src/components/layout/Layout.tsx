import { Footer } from "./Footer.tsx";
import {Header} from "./Header.tsx";

type LayoutProps = {
    children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
