
import fetch from 'node-fetch';
import { PROXY_URL_PC } from '../../constants/urlConst';

// fetchData - receiving data from the server
// requestUrl - request address
// requestHeader - request header
export async function fetchData(requestUrl: string, requestHeader=null) {
    let json = "";
    try {
        let response = null;
        
        //"if requestHeader == null" GET request, else - POST request
        if (requestHeader === null) response = await fetch(PROXY_URL_PC + requestUrl)
        else response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);

        json = await response.json();
                
        return json;
    }
    catch (error) {
        return error;
    }
}
