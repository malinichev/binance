



const WATH_CURR = 'app/WATH_CURR';
const IS_ERROR = 'app/IS_ERROR';
const IS_DATA = 'app/IS_DATA';


const initState = {
        data: [],
        isDataLoad:false,
        isError:false,
        curr: 'btcusdt'
};

const appReduser = (state = initState, action) => {
    switch (action.type) {
       
        case IS_DATA:
            
            return {
                ...state,
                ...state.data,

                data: [ ...state.data.slice(-9), action.data]  
            };
           
       
        case WATH_CURR:
            
            return {
                ...state,
                ...state.data,
                data:[],
                curr: action.curr  
            };
       
        case IS_ERROR:
            return {
                ...state,
                isLoad: false,
                isError: action.isError  
            };
      
        default:
            return state;
    }
};



export const currAC = (curr) => ({
    type: WATH_CURR,
    curr
})
export const setDataAC = (data) => ({
    type: IS_DATA,
    data
})

export const isError = (isError) => ({

    type: IS_ERROR,
    isError
})


export const setData = (data) => (dispatch) => {
    dispatch(setDataAC(data))
}
export const setCurr = (curr) => (dispatch) => {
    dispatch(currAC(curr))
   
}


export default appReduser