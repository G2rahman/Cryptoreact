import { Link } from 'react-router-dom'
import btc2 from '../btc2.png'
import table from '../cryptotable.png'
import  { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Menu() {
  return (
    <menu>
        <ul>
        <div className='menu'>
        <li className="logo"><img src= {btc2}></img></li>
        <Link to ='menu'><li>Home</li></Link>
        <Link to ='coins'><li>Coins</li></Link>
        <Link to ='search'><li>Search</li></Link>
        <Link to ='contact'><li>Contact us</li></Link>
        </div>
        </ul>
        <div className="text">
    <h1>Cryptos the new stocks</h1>
    </div> 
    <div className="moretext">
      <p>
        Payments evolve. Consumers adjust. We're in a growth widow that should
        and will open up new opportunities over the next decade. Before any of
        our modern systems, there was the gold standard. Now we have the
        crypto standard.
      </p>
    </div>
    <div className="site-pic">
        <img src={table} />
      </div>
    <div className='social-icons'>
            <i><FaFacebookSquare/></i> 
            <i><FaInstagram/></i>
            <i><FaTwitterSquare/></i>
            <i><FaLinkedin/></i>
    </div>
    </menu>
  );
}
export default Menu;
