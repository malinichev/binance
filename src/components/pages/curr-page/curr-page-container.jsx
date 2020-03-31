import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import CurrPage from './curr-page';

import {setData} from '../../../redux/app-reduser';


const CurrPageContainer = (props) => {
  
  useEffect(() => {
    props.setBookTicket(props.bookTicket)
  }, [props]);

  
          
    return (
       <>
    
        <CurrPage data={props.data}/>
       </>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    data: state.app.data,

  }
}


export default connect(mapStateToProps,{setData})(CurrPageContainer)