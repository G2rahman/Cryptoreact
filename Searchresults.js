function Searchresults (props) {
return ( 
<div className="Searchresults">
<h1 ></h1><img className="symbol" src={props.search.image}/>
<h1 >{props.search.name}</h1>
<h1 >{props.search.symbol}</h1>
<h1 >{parseFloat(props.market_cap_rank).toFixed(2)}</h1>
</div>
)}
    
export default Searchresults;