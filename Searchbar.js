// import React from 'react'
// import {useState} from "react";
// import Coinsource from './Coinsource'

// function Searchbar(props) {
//     const {onSearch} = props;

//     const [state,setState] =useState({
//         results = []
//     });

//     const Onsearch= async(text) => {
//         const results= await Coinsource.get("/")
//     }

//     const[searchText, setSearchtext]=useState('');

//     const handleinput = (e) => {
//         const text=e.target.value
//         setSearchText:text;

//         const handleEnterKetPressed =(e) => {
//             if (e.key =="Enter") {

//             }
//         }
//     }
//     return(
//         <div>
//             <div className="control">
//                 <input className="input" onChange={handleInput} onKeyPress>
//                 {handleEnterKeyPressed} type="text" value={searchText} placeholder="Search"</input>
//             </div>

//         </div>
//     );
// }
// export default Searchbar;