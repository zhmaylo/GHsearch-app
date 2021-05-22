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
//
// rezerv proxy
// else {proxy_url_pc = "https://cors-anywhere.herokuapp.com/", http="https"};
// working "proxy"
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
// ===========================
// URL user  search 
// GET      'https://api.github.com/users/'+{user name}+'/repos'
const URL_GET_USER_REPOS_1 = HTTP + '://api.github.com/users/';
const URL_GET_USER_REPOS_2 = '/repos';
export const URL_GET= [URL_GET_USER_REPOS_1, URL_GET_USER_REPOS_2];
//
// End. Section 'URL for request'
/////////////////////////////


