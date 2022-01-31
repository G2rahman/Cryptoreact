import React, { useEffect,useState} from 'react';
import Displayresults from './Displayresults';
import '../../App.css'
import btc2 from '../btc2.png'

function Searchlayout () {
    const [search, setSearch]=useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y';
    
    useEffect(() => {
        fetch(url)
            .then((res)=>res.json())
            .then((data)=>setSearch(data))
    },[]);
    console.log(search);
    return (
        <div>
            <div className="searchmenu">
            <ul>
            <li>EN</li>
            <li>USD</li>
            <li>Subscribe</li>
            <li>Contact</li>
            </ul>
        <img className="logo2" src={btc2} />
        </div>
        <div className="searchmenu2">
            <ul>
            <li>Coin</li>
            <li>Exchanges</li>
            <li>Defi</li>
            <li>NFT</li>
            <li>Portfolio</li>
            <li>Publications</li>
            <li>Resources</li>
            <li>Products</li>
            </ul>
        </div>
        <div className="results">
            <Displayresults info={search}/>
        </div>
        </div>
    );
}

export default Searchlayout;