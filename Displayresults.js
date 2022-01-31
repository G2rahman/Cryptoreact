import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import Displayresults2 from "./Displayresults2";

export const Displayresults= (props) => {
    return (
        <div>
                       <div className="coindata">
                        <div className="box7">
                            <h1>-     </h1>
                        </div>
                        
                        
                        <div className="box1">
                            <h1>Coin</h1>
                        </div>
                        <div className="box2">
                            <h1>Symbol</h1>
                        </div>
                        <div className="box3">
                            <h1>Price</h1>
                        </div>
                        <div className="box4">
                            <h1>24 hr percent change</h1>
                        </div>
                        <div className="box5">
                            <h1>24 hr high</h1>
                        </div>
                        <div className="box6">
                            <h1>24 hr low</h1>
                        </div>
                    </div>
            {props.info.map((search,index) => {
                return ( 
                    <Displayresults2 key={index} search={search} />
)})}
        </div>
    );
};

export default Displayresults;






