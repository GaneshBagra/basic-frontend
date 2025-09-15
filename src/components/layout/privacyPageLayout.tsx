import { Outlet } from 'react-router-dom';
import PrivacyHeader from '../privacy&T&CHeader/privacyHeader';

const PrivacyPageLayout = () => (
    <>
        <PrivacyHeader />
        <main className="content-for-privacy-and-T&C" style={{height:"100vh",width:"100vw"}}>
            <Outlet />
        </main>
    </>
);

export default PrivacyPageLayout;