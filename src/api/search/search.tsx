import { SEARCH_RESULT } from "../../constants/actionConst";
import { SEARCH_HIST_KEY, SEARCH_HIST_LENGTH } from "../../constants/storageConst";
import { URL_GET } from "../../constants/urlConst";
import { fetchData } from "../fetch/fetchData";
import { getData, storeData } from "../storage/storage";

// get SearchResult - return search result
// request - search string
// return outProducts - array
export const getSearchResult = async (request: string, dispatch:any) => {
    let outlist: any;
    // scheck search length
    if (request.length == 0) return null;
    outlist = await getFetch(request);
    dispatch({type: SEARCH_RESULT, payload:outlist});
};


// getFetch - get data from server
// request - search request
const getFetch = async (request: any,) => {
    let outdata = [];
    outdata = await fetchData(URL_GET[0] + request + URL_GET[1]);
    return outdata;
}


