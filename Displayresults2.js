function Displayresults2 (props) {
return ( 
    <div className="coindata2">
        <h1 ></h1><img className="symbol" src={props.search.image}/>
        <h1 >{props.search.name}</h1>
        <h1 >{props.search.symbol}</h1>
        <h1 >{parseFloat(props.search.current_price).toFixed(2)}</h1>
        <h1 >{parseFloat(props.search.price_change_percentage_24h).toFixed(2)}%</h1>
        <h1 >{parseFloat(props.search.high_24h).toFixed(2)}</h1>
        <h1 >{parseFloat(props.search.low_24h).toFixed(2)}</h1>
        </div>
)}

export default Displayresults2;