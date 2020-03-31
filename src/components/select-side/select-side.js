import React, {useEffect}  from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {setCurr} from '../../redux/app-reduser';



const SelectSide = ({bookTicket, setBookTicket, setCurr, curr}) => {
  // const [bookTicket, setBookTicket] =useState('BTC-USDT')

  
    useEffect(() => {
        // window.addEventListener('scroll', handleScroll, true);
        return () => {
            // window.removeEventListener('scroll', handleScroll);
        };
    }, []);



  return (
  
    <>
            
                <Dropdown>
                  <Dropdown.Toggle 
                    variant="success" id="dropdown-basic"
                   
                    >
                    { curr}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item
                    as="button"
                    onClick={e=> setCurr('btcusdt')}
                  >
                    <Link to="/" className="dropdown-item" >
                    BTC-USDT
                                </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                  as="button"
                    onClick={e=> setCurr('etcusdt')}
                  >
                    <Link to="/etcusdt" className="dropdown-item">
                    ETC-USDT
                                </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                  as="button"
                    onClick={e=> setCurr('xrpusdt')}
                  >
                    <Link to="/xrpusdt" className="dropdown-item">
                    XRP-USDT
                                </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                  as="button"
                    onClick={e=> setCurr('btsusdt')}
                  >
                    <Link to="/btsusdt" className="dropdown-item">
                    BTS-USDT
                                </Link>
                  </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
               
        </>
            
         
    
  );
};






// export default SelectSide;

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    curr: state.app.curr,

  }
}


export default connect(mapStateToProps,{setCurr})(SelectSide)
