import type React from 'react';
import logos from './logo.png'
import { FaSearch } from 'react-icons/fa';
// import "./App.css"

const Navbar: React.FC= () => {

    return (
        
        <header className='w-1000'>
            <img src={logos} />
            <div className='pos'>
                <div className='hide'>
                    {/* <button className="searchIcon position-relative top-2 lh-2 border border-end-0 bg-transparent"><FaSearch/></button> */}
                    <button className="searchIcon"><FaSearch/></button>
                    <input type="search" placeholder='Search' className='border border-start-0 bg-transparent Search top-1' />
                    <button className='btns1'>Log in</button>
                    <button className='btns2'>Sign up</button>
                    {/* <hr /> */}
                   </div>
            </div>
        </header>

    )

}

export default Navbar