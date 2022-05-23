import axios from "axios";

var baseurl = "http://localhost:3000/api/";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3000/api/";
} else {
  baseurl = "http://localhost:3000/api/";
}
 
export default axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    crossDomain: true
  }
});
