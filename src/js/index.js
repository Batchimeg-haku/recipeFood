require("@babel/polyfill");
import Search from "../model/Search";
import { elements, renderLoader, clearLoader } from "../view/base";
import * as searchView from "../view/searchView";
import Recipe from "../model/Recipe";

/*
Web app төлөв
- Hailtiin query, ur dun
- Tuhain vzvvlj bgaa jor
- Like lasan joruud
- Zahialj bga joriin nairlagnuud
*/

const state = {};
 
 const controlSearch = async () => {
// 1. webees hailtiin tulhuur ugiig gargaj awna
    const query = searchView.getInput();

    if (query) {
        //  2. Shineer hailtiin object uusgene
        state.search = new Search(query);

        // 3. hailt hiihed zohiomj delgetsiig UI beldene
        searchView.clearSearchQuery();
        searchView.clearSearchResult();
        renderLoader(elements.searchResulstDiv);

        // 4. hailtiig guitsetgene
        await state.search.doSearch();

        // 5. hailtiin ur delgetsend haruulna
        clearLoader();
        if (state.search.result === undefined)
        {
            alert("hailt ilertsgui");
        }
        else
        {
            searchView.renderRecipes(state.search.result);
        }
    }
}

elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});

elements.pageButtons.addEventListener("click", e => {
    //daragdsan towsh oloh
    const btn = e.target.closest(".btn-inline"); // css elemented hamgiin oirhon baigaa tuhain dom deer baigaa elementiig olj ogdog function
    
    if (btn) {
        const gotoPageNumber = parseInt(btn.dataset.goto, 10);
        searchView.clearSearchResult();
        searchView.renderRecipes(state.search.result, gotoPageNumber);
    }
});

const r = new Recipe(47746);

r.getRecipe();