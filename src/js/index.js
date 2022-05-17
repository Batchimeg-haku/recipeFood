require("@babel/polyfill");
import Search from "../model/Search";
import { elements, renderLoader, clearLoader } from "../view/base";
import * as searchView from "../view/searchView";

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

        // 5. hailtiin ur dun delgetsend haruulna
        clearLoader();
        if (state.search.result === undefined)
        {
            alert("hailt ilertsgui")
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
})
