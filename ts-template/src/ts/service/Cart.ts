import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    inTotal(): number {
        return this.items.reduce((sum: number, curent: Buyable) => {
            return sum + curent.price
        }, 0)
    }

    discountAmount(sum: number): number {
        return this.inTotal() - (this.inTotal() / 100) * sum;
    }

    deleteItem(id: number): Buyable[] {
        this._items.forEach( (item, index) => {
            if(id === item.id) {
                this._items.splice(index, 1);
            }
        })

        return this._items;
    }
}