import { Platform } from 'react-native';

/////////////////////////////
// Start. Section 'Proxy/no-proxy'
//
let proxy_url_pc, http;
//
// no proxy for smart/android
if  (Platform.OS === 'android') {proxy_url_pc = "", http="http"}
//
// proxy for PC Chrome if  (Platform.OS === 'web') 
// else {proxy_url_pc = "https://cors-anywhere.herokuapp.com/", http="https"};
else {proxy_url_pc = "", http="https"};
//
export const PROXY_URL_PC = proxy_url_pc;
const HTTP = http;
//
// End. Section 'Proxy/no-proxy'
/////////////////////////////


/////////////////////////////
// Start. Section 'URL for request'
//
// URL users search 
// GET
const URL_GET_USERS = HTTP + '://api.github.com/search/users?q=';
// ===========================
// URL repository search 
// GET
const URL_GET_REPOS = HTTP + '://api.github.com/search/search/repositories?q=';
export const URL_GET = [URL_GET_USERS, URL_GET_REPOS];
//
// End. Section 'URL for request'
/////////////////////////////


