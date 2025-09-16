import Bottommenu from '../HeadSection/Bottommenu';
import Header from '../HeadSection/Header';
import { Outlet } from 'react-router-dom';
import Leftmenu from '../HeadSection/Leftmenu';

const Layout = () => (
    <>
    <div className="container-fluid">

        <Header />
        <div className="d-flex ">

          <Leftmenu/>
          
            
            <div className='main-content '>

            <Outlet />
            </div>
        </div>
        <Bottommenu/>  
    </div>
        
    
    </>
);

export default Layout;