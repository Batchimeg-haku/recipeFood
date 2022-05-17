require("@babel/polyfill");
import axios from "axios";

export default class Search{
    // class bichihiin tuld baiguulagch function bichne "constructor{}"
    constructor(query) {
        this.query = query;
    }

    async doSearch() { // async function ni butsaahdaa Promse butsaadag

        try {
            let result = await axios('https://forkify-api.herokuapp.com/api/search?q=' + this.query);
            this.result = result.data.recipes;

            return this.result; 
        } catch (error) {
            console.log("error", error);
        }
    }


}