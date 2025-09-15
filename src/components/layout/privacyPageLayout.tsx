import { Outlet } from 'react-router-dom';
import PrivacyHeader from '../privacy&T&CHeader/privacyHeader';

const PrivacyPageLayout = () => (
    <>
        <PrivacyHeader />
        <main className="content-for-privacy-and-T&C" style={{height:"calc(100% - 80px)",width:"100%"}}>
            <Outlet />
        </main>
    </>
);

export default PrivacyPageLayout;