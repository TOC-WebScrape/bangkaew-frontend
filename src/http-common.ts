// /**
//  * Create axios with baseUrl and headers for use in 
//  * any service backend request.
//  *
//  * @author SnapM (Jame)
//  */

// import axios from "axios";

// const headers: {
//   "X-Requested-With": string;
//   "Content-type": string;
//   'Access-Control-Allow-Origin': boolean;
//   Authorization?: string;
// } = {
//   "X-Requested-With": "XMLHttpRequest",
//   "Content-type": "application/json",
//   'Access-Control-Allow-Origin': true,
// };

// const axios_base = axios.create(
//   baseURL: "http://localhost:5001/api",
//   headers: headers,
//   withCredentials: true,
// });

// export default axios_base;

import axios from "axios";

export default axios.create({
  baseURL: 'https://bangkaew.surawit.studio/api',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});