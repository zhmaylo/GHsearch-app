
import fetch from 'node-fetch';
import { PROXY_URL_PC } from '../../constants/urlConst';



// fetchData - receiving data from the server
// requestUrl - request address
// requestHeader - request header
export async function fetchData(requestUrl: string, requestHeader=null) {
    let json = "";
    try {
        let response = null;
        // console.log("requestUrl", requestUrl);
        // console.log("requestHeader", requestHeader);
        
        //"if requestHeader == null" GET request, else - POST request
        if (requestHeader === null) response = await fetch(PROXY_URL_PC + requestUrl)
        else response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);

        // console.log("getJSON. response before =>", response.bodyUsed);
        json = await response.json();

        // console.log("fetchData. json =>", json);
                
        return json;
    }
    catch (error) {
        // console.log('fetchData => An error occurred.', error);
        // alert('fetchData => An error occurred: ' + error);
        return error;
    }
}
