import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {setData} from '../../redux/app-reduser';

import { HashRouter, Route, Switch } from 'react-router-dom';
import CurrPageContainer from '../pages/curr-page'
import SelectSide from '../select-side';

import 'bootstrap/dist/css/bootstrap.min.css';

import s from './style.module.css';

const App =  (props) => {
  const [bookTicket, setBookTicket] = useState('btcusdt')
  let ws =  new WebSocket(`wss://stream.binance.com:9443/ws/${props.curr}@ticker`);
  
  useEffect(() => {
    
    ws.onmessage = evt => { 
      
      
      let result = JSON.parse(evt.data);
    
      props.setData(result)
  }
    
    return () => {
      ws.close()
    };
    // eslint-disable-next-line
  }, [bookTicket,ws]);
  
  return (
    <HashRouter>
      <div className={s.coverTAg}>
                <div className={s.tag}>
                <SelectSide setBookTicket={setBookTicket} bookTicket={bookTicket}/>
                </div>
                <div className={s.tag}>
                
                <Switch>
        <Route
          path="/"
          exact
          render={() => {
            
            return (            
              <CurrPageContainer ws={ws} setBookTicket={setBookTicket} bookTicket={bookTicket}/>
              );
          }}
           />
        <Route
          path="/etcusdt"
          exact
          render={() => {
            // setBookTicket('etcusdt')
            return (            
              <CurrPageContainer ws={ws} setBookTicket={setBookTicket} bookTicket={bookTicket}/>
              );
          }}
           />
        <Route
          path="/xrpusdt"
          exact
          render={() => {
            
            return (            
              <CurrPageContainer ws={ws} setBookTicket={setBookTicket} bookTicket={bookTicket}/>
              );
          }}
           />
        <Route
          path="/btsusdt"
          exact
          render={() => {
            
            return (            
              <CurrPageContainer ws={ws} setBookTicket={setBookTicket} bookTicket={bookTicket}/>
              );
          }}
           />
         
      </Switch>
                    
                </div>
               
      </div>
      
          
      
      
    </HashRouter>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    curr: state.app.curr,
    // data: state.app.data,
    // isIndex: state.app.isIndex,
    
    // isError: state.app.isError
  }
}


export default connect(mapStateToProps,{setData})(App)