import { SEARCH_RESULT, SPINER_TOGGLE } from "../../constants/actionConst";
import { URL_GET } from "../../constants/urlConst";
import { fetchData } from "../fetch/fetchData";


// get SearchResult - return search result
// request - search string
// return outProducts - array
export const getSearchResult = async (request: string, dispatch:any) => {
    
    let outlist: any;
    // search length check 
    if (request.length == 0) return null;
    dispatch({ type: SPINER_TOGGLE, payload: true });
    outlist = await getFetch(request);
    // check the search rezult
    if (outlist.length==undefined) outlist=[];
    
    dispatch({type: SEARCH_RESULT, payload:outlist});
    dispatch({ type: SPINER_TOGGLE, payload: false });
};


// getFetch - get data from server
// request - request search 
const getFetch = async (request: any,) => {
    let outdata = [];
    outdata = await fetchData(URL_GET[0] + request + URL_GET[1]);
    return outdata;
}


