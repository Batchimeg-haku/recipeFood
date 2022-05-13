require("@babel/polyfill");
import Search from "../model/Search";
// class iin object uusgene

let search = new Search("pasta");

search.doSearch().then(r => console.log(r));