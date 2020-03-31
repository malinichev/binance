import React from 'react';
import s from "./style.module.css"


const CurrPage = (props) => {
//    console.log(props)
    return (
        <>
              
                    <div className={s.ask}>
                        <h3 style={{color:'red'}}>ASK</h3>
                        {
                            !props.data?null:
                            props.data.map(el=>{
                                return(
                                    <span key={el.E}>{el.a}</span>
                                );
                            })
                            
                            
                        }
                    </div>
                    <div className={s.bid}>
                    <h3 style={{color:'green'}}>BID</h3>
                        {
                            !props.data?null:
                            props.data.map(el=>{
                                return(
                                    <span key={el.E+11}>{el.b}</span>
                                );
                            })
                        }
                    </div>
            
        </>
    );
}
export default CurrPage