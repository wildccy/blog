import request from "../utils/request";

//hola
export function getHola() {
  return request('http://ccy.life:7300/mock/5ec5f4a1e61c4a24ea6f0a98/blog/hola', {method: 'GET'})
}
