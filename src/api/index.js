import request from "../utils/request";

//hola
export function getHola() {
  return request('http://ccy.life:7300/mock/5ec5f4a1e61c4a24ea6f0a98/blog/hola', {method: 'GET'})
}

//life
export function getLife() {
  return request('http://ccy.life:7300/mock/5ec5f4a1e61c4a24ea6f0a98/blog/life', {method: 'GET'})
}

//toy
export function getToy() {
  return request('http://ccy.life:7300/mock/5ec5f4a1e61c4a24ea6f0a98/blog/toy', {method: 'GET'})
}

//email
export function sendMessage(data) {
  return request('http://ccy.life:7300/mock/5ec5f4a1e61c4a24ea6f0a98/blog/email', {method: 'POST'})
}
