

export interface CardsYGO {
    name: string,
    effect: string,
    atk: number,
    def?: number,

}

export interface ListYGOInterface {
    cards?: CardsYGO[],
    products?: string
}

export const cardsYGO: CardsYGO[] = [
    {
        name: "ghjdsagjh",
        effect: "asghjagsj",
        atk: 2100,
        def: 2200
    },
    {
        name: "otra",
        effect: "asghjagsj",
        atk: 2100,

    },
    {
        name: "ghjdsagjh",
        effect: "asghjagsj",
        atk: 2100,
        def: 2200
    },
    {
        name: "otra",
        effect: "asghjagsj",
        atk: 2100,

    }

]