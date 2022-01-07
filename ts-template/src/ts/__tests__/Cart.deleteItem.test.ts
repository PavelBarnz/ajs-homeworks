import Cart from '../service/Cart';

test("Тест функции deleteItem класса Cart", () => {
    const testCart = new Cart();
    
    testCart.add( {id: 1, name: "Item1", price: 1000} );
    testCart.add( {id: 2, name: "Item2", price: 2000} );
    testCart.add( {id: 3, name: "Item3", price: 3000} );

    const result = [
        {id: 1, name: "Item1", price: 1000},
        {id: 3, name: "Item3", price: 3000}
    ]
    
    expect(testCart.deleteItem(2)).toEqual(result);
})