import { before } from "lodash";
import { elements } from "./base"

const renderRecipe = recipe => {
    const markUp = `
    <li>
        <a class="results__link " href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>`;
    

    //  ul ruugee nemne
    elements.searchResultList.insertAdjacentHTML("beforeend", markUp);
}

export const getInput = () => elements.searchInput.value;

export const clearSearchQuery = () => {
    elements.searchInput.value = "";
}

export const clearSearchResult = () => {
    elements.searchResultList.innerHTML = "";
    elements.pageButtons.innerHTML = "";
}

export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
    // hailtiin ur dung huudaslaj uzuuleh
    //  page = 2, start = 10, end = 20
    const start = (currentPage - 1) * resPerPage;
    const end = currentPage * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);

    // hailtiin huudlaltiin towchuudiig gargah
    // ceil deesheegee buheldene 5.6 == 6
    const totalPages = Math.ceil(recipes.length / resPerPage);
    renderButtons(currentPage, totalPages);
}

//  type next , prev
const createButton = (page, type, direction) => `
    <button class="btn-inline results__btn--${type}" data-goto=${page}>
    <span>Хуудас ${page}</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${direction}"></use>
    </svg>
</button>`;

const renderButtons = (currentPage, totalPages) => {
    let buttonHtml  ;
    if (currentPage === 1 && totalPages > 1) {
        // 1r huudas dr bna , 2r huudas towchiig gargah]]]]
        buttonHtml = createButton(2, "next", "right");

    } else if (currentPage < totalPages) {
        // omnoh bolon daraagiin huudas ruu shiljih towchuudiig uzuuleh   
        buttonHtml = createButton(currentPage - 1, "prev", "left");
        buttonHtml += createButton(currentPage + 1, "next", "right");
        
    }
    else if (currentPage === totalPages) {
        // hamgiin cuuliin huudas deer bna. omnoh ruuu shiljuuleh towchiig uzuulne
        buttonHtml = createButton(currentPage - 1, "prev", "left");
    }

    elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHtml);
}


