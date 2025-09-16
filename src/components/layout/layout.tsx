import Header from '../HeadSection/Header';
import { Outlet } from 'react-router-dom';
const Layout = () => (
    <>
        <Header />
        <main className="main-content" style={{ background: "white" }}>
            <Outlet />
        </main>
    </>
);

export default Layout;