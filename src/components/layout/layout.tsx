import Header from '../HeadSection/Header';
import { Outlet } from 'react-router-dom';
import logos from "./imges.webp"
const Layout = () => (
    <>
        <Header />
        <main className="main-content" style={{ background: "white" }}>
            <div className='all-Videos-main m-2'>
                <div className="row">
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                    <div className="col-4">
                        <img src={logos} alt="" />
                        <p className='font-sizess'>JavaScript Fundamentals: Variables and Data Types</p>
                        <p>10.3k Views. 44 minutes ago</p>
                        <p>code Master</p>
                    </div>
                </div>
            </div>
            <Outlet />
        </main>
    </>
);

export default Layout;