import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/movie';

const cart = new Cart();
// console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1021, "Мстители", "The Avengers", 2012, "США", "Avengers Asemble", ["Фантастика", "боевик", "Фэнтези", "Приключения"], ["137 мин.", "02:17"], 215));

cart.deleteItem(1008);

// console.log(cart.items);