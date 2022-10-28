import { PuppeteerData } from "./pupeter.config"

export const TCG = (name: string): PuppeteerData => {
    return {
        url: "https://www.tcgplayer.com/search/all/product?q=" + name?.toString().replace(" ", "+") + "&view=list",
        selector: ".search-result",
        store: "tcg",
        componenst: [{

            selector: ".search-result__title"
        },
        {
            selector: ".listing-item__price"
        },
        {
            selector: ".listing-item__condition a"
        },
        {
            selector: ".search-result__product .search-result__subtitle"
        },

        {
            selector: ".v-lazy-image "
        },
        {
            selector: ".search-result__rarity "
        },
        {
            selector: "search-result-count"
        }
        ]
    }
}

export const Troll = (name: string): PuppeteerData => {
    return {
        url: "https://www.trollandtoad.com/category.php?selected-cat=0&search-words=" +
            name,
        store: "Troll",
        selector: ".product-col",
        componenst: [{

            selector: ".prod-title a"
        },
        {
            selector: ".p-1:nth-child(4)"
        },
        {
            selector: ".p-1:nth-child(2) a"
        },
        {
            selector: ".prod-cat a"
        }, {
            selector: ".prod-img-container .productImage"
        },
        {
            selector: ".prod-title a"
        }]
    }
}