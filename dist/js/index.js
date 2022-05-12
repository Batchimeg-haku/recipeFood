"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

const arr = [24, 43, 22];

let myfunc = a => {
  console.log("too: ".concat(a));
};

const arr2 = [...arr, 33, 2445];
myfunc(arr2[1]);