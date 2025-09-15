import Navbar from './Navbar'
import Leftmenu from "./Leftmenu";
import Rightmenu from "./Rightmenu"
import Bottommenu from "./Bottommenu"
const Header = () => {

   

    return (
        <div className='conten'>
            <Rightmenu/> 
          <Navbar />
            <Leftmenu/>
            <Bottommenu/>
        </div>


    )
}

export default Header;