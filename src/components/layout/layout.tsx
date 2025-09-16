import Header from '../HeadSection/Header';
import { Outlet } from 'react-router-dom';
const Layout = () => (
    <>
    <div className="container-fluid">

        <Header />
        <div className="bg-white main-content">

            <Outlet />
        </div>
    </div>
        
    
    </>
);

export default Layout;