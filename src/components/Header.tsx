import "./styles.css"
import { useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar'

const Header = () => {

    const [renders, setRenders] = useState("nomenu");

    return (

        <div className='conten'>

            {renders === "nomenu" && (
                <Navbar onClick={() => setRenders("menu")}></Navbar>
            )}

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