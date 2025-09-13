import { useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar'
import Leftmenu from "./Leftmenu";
import Rightmenu from "./Rightmenu"
const Header = () => {

    const [renders, setRenders] = useState("nomenu");

    return (
        <div className='conten'>
            <Rightmenu/> 
          <Navbar />
            <Leftmenu/>

            {renders === "menu" && (
                <div>
                <Navbar />
                <Menu onClick={() => setRenders("nomenu")}></Menu>
                </div>
                )}
        </div>


    )
}

export default Header;