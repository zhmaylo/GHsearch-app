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
// ===========================
// URL user repository search 
// GET      'https://api.github.com/users/'+{zhmaylo}+'/repos'
const URL_GET_USER_REPOS = HTTP + '://api.github.com/users/';
// ===========================
// URL repository search 
// GET
const URL_GET_USER_REPOS2 = '/repos';
export const URL_GET= [URL_GET_USER_REPOS, URL_GET_USER_REPOS2]
//
// End. Section 'URL for request'
/////////////////////////////


