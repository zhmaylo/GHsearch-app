

import { URL_GET } from "../../constants/urlConst";
import { clone } from "../clone";
import { fetchData } from "../fetch/fetchData";

// get SearchResult - return search result
// request - search string
// return outProducts - array
export const getSearchResult = (request: string) => {
    console.log('🚀 ~ file: search.tsx ~ line 9 ~ getSearchResult ~ request', request);
    let outProducts = [];
    // scheck search length
    if (request.length == 0) return null;

    // console.log('🚀 ~ file: search.tsx ~ line 14 ~ getSearchResult ~ regExpArr', regExpArr);
    getFetch(request);
    return outProducts;
};


// gerFetch - get data from server
// request - search requst
const getFetch = async (request: any,) => {
    let i = 0;
    let data1 = [];
    let data2 = [];
    let outdata = [];
    while (i < URL_GET.length) {
        fetchData(URL_GET[i] + request).then(data => {
            console.log('🚀 ~ file: search.tsx ~ line 31 ~ getFetch ~ data', data);
            outdata = outdata.concat(data);
            console.log('🚀 ~ file: search.tsx ~ line 33 ~ getFetch ~ outdata', outdata);
            i++;
        });
    }
    return outdata;
}

