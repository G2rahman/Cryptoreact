import axios from 'axios';
import React, { useEffect,useState} from 'react';
import Searchresults2 from "./Searchresults2";


function Searchcoins () {
const [searchcoins, setSearchcoins]=useState({data:{coins:[]}})
const [sc,setSC]=useState('bitcoin')
const url = 'https://api.coingecko.com/api/v3/search?query='+sc;
const [searchBar, setSearchBar] = useState('');
useEffect(() => {
axios.get(url)
.then((res)=>setSearchcoins(res))
},[]);
const handleClick = () => {
    
}

function Searching(anything) {
    setSearchBar(anything.target.value);
}
const onHandlesubmit=(event)=>{  
    event.preventDefault()
    axios.get(url)
.then((res)=>setSearchcoins(res))
}

const handleonChange=(event) => {
    setSC(event.target.value)
}
return (

<div className="searchbarbutton">
<div className="searchinput">
{console.log(searchcoins.data.coins)}
<form onSubmit={onHandlesubmit}>
    <input type="text" name="text" id="Search" onChange={handleonChange} value={sc}/>
    <button>Search</button>
</form>
{searchcoins.data.coins.map((coin,index) => { return <div key={index}><h1>{coin.name}</h1>{coin.market_cap_rank}</div>})} 
</div>
</div>
);
}

export default Searchcoins