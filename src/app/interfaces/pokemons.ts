export interface ListPokemon {
    count: number;
    next: string;
    previous: string;
    results: Array<Pokemon>;
}

export interface Pokemon {
    name: string;
    url: string;
    status: any;
}
