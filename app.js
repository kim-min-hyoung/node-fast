"use strict";

const fsRouter = require("./fs");

/*
const promise1 = new Promise((resolve, reject) => resolve("즉시 호출"));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("3초 뒤에 호출"), 3000);
});

Promise.all([promise1, promise2]).then((values) => console.log(values));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("내가 1등"), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("아니지 내가 1등"), 0);
});

Promise.race([promise1, promise2]).then((values) => console.log(values));


const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<div>Hello world</div>");
});

const port = process.env.PORT || 8081;
server.listen("port", () => {
  console.log(`${port}포트에서 실행중`);
});

const https = require("https");
const options = {
  hostname: "google.com",
  port: 443,
  path: "/login",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(e);
  });
});

function fullstack(backend, fontend) {
  this.backend = backend;
  this.fontend = fontend;

  fullstack.prototype.getBackend = () => this.backend;
  fullstack.prototype.setBackend = () => (this.backend = backend);

  fullstack.prototype.getBackend = () => this.frontend;
  fullstack.prototype.setBackend = () => (this.frontend = frontend);
}

const Fullstack = new fullstack("java", "java");
Fullstack.getBackend();
Fullstack.getFrontend();
*/

const numbers = [10, 20, 30, 40];

const avg = numbers.reduce((tot, val, idx, arr) => {
  tot += val;
  if (idx === arr.length - 1) {
    return tot / arr.length;
  } else {
    return tot;
  }
});

console.log(avg);

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7];

const newArr = numbers2.reduce((tot, amt) => {
  if (amt > 2) tot.push(amt);
  return tot;
}, []);

console.log(newArr);

const arr = ["pdf", "html", "html", "gif", "gig", "gif"];

const res = arr.reduce((cnt, fileType) => {
  cnt[fileType] = (cnt[fileType] || 0) + 1;
  return cnt;
}, {});

console.log(res);
