import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly originalName: string,
        readonly year: number,
        readonly country: string,
        readonly tagLine: string,
        readonly genre: Array<string>,
        readonly time: Array<string>,
        readonly price: number, ){

        this.id = id;
        this.name = name;
        this.originalName = originalName;
        this.year = year;
        this.country = country;
        this.tagLine = tagLine;
        this.genre = genre;
        this.time = time;
        this.price = price;
    }
}

