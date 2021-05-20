

import { URL_GET } from "../../constants/urlConst";
import { clone } from "../clone";
import { fetchData } from "../fetch/fetchData";

// request - search string
export const getSearchResult = (request: string) => {
    console.log('🚀 ~ file: search.tsx ~ line 9 ~ getSearchResult ~ request', request);
    let outProducts = [];
    // scheck search length
    if (request.length == 0) return null;

    // let regExpArr = getRegExpArr(request);
    // console.log('🚀 ~ file: search.tsx ~ line 14 ~ getSearchResult ~ regExpArr', regExpArr);
    getFetch(request);

    return outProducts;
};


// getRegExpArr - return regular expression array
// request - search string
// return - array of regular expression 
const getRegExpArr = (request: string) => {
    // query split into substrings
    let requestArr = request.match(/[a-zа-я0-9]+/gui);
    // array of regular expression 
    let regExpArr = new Array();
    requestArr.forEach((item: any) => {
        let regEx = new RegExp(item, 'iu');
        regExpArr.push(regEx);
    });
    return regExpArr;
};


const getFetch = async (request: any,) => {
    let i = 0;
    let data1 = [];
    let data2 = [];
    let outdata = [];
    while (i < URL_GET.length) {
        fetchData(URL_GET[i] + request).then(data => {
            console.log('🚀 ~ file: search.tsx ~ line 45 ~ getFetch ~ data1', data1);
            outdata = outdata.concat(data1);
            console.log('🚀 ~ file: search.tsx ~ line 41 ~ getFetch ~ outdata', outdata);
            i++;
        });
    }
    return outdata;
}

