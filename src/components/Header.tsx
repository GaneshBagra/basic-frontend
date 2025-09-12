// import 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'react-bootstrap';
import "./styles.css"
import { useState } from 'react';
const Header = () => {
    const [renders, setRenders] = useState("nomenu");

    return (
        <div className='conten'>
            <header>
                <img src={'./logo.png'} />
               {renders === "nomenu" &&(

                <div className='pos'>
                    <div className='hide'>
                        <button className="searchIcon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
                        <input type="search" placeholder='Search' className='Search' />
                        <button className='btns1'>Log in</button>
                        <button className='btns2'>Sign up</button>
                        <button className='btns3' onClick={() => setRenders("menu")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></button>
                    </div>
                </div>
               )}
            </header>
            <hr />
             {renders === "menu" && (
                <div className='mens'>
                    {/* <input type="checkbox" /> */}
                     <button className='btns4' onClick={()=>setRenders("nomenu")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
                    <button className='btns1-1'>Log in</button>
                        <button className='btns2-1'>Sign up</button>
                </div>

                )}
        </div>

    )
}

export default Header;