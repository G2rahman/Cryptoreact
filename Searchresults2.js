import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import Searchresults from "./Searchresults";

export const Searchresults2= (props) => {
return (
<div>
<div className="searchdata">
<div className="box1">
<h1> -  </h1>
</div>
<div className="box2">
<h1>Name</h1>
</div>
<div className="box3">
<h1>Symbol</h1>
</div>
<div className="box4">
<h1>Market cap rank</h1>
</div>
</div>
{props.info.map((search,index) => {
return ( 
<Searchresults key={index} search={search} />
)})}
</div>
);
};

export default Searchresults2;
