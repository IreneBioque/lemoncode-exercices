// 1. ARRAY OPERATORS

const array = ["first", "second", "third", "fourth", "fifth"];

//Head

const head = <T>(array: T[]): T => {
  const [first] = array;
  return first;
};

console.log(`This is the first element of an array => ${head(array)}`);

// Tail

const tail = <T>(array: T[]): T[] => {
  const [, ...rest] = array;
  return rest;
};

console.log(`This is the result of tail implementation =>`, tail(array));

//Init

const arrayFruits = ["Apple", "Orange", "Strawberry", "Mango", "Peach"];

const init = <T>(array: T[]): T[] => {
  array.pop();
  return array;
};

console.log(`This is the result of init implementation =>`, init(arrayFruits));

//Last

const last = <T>(array: T[]): T | undefined => {
  return array.pop();
};

console.log(`This is the last elemet of an array => ${last(array)}`);

//------------------------------------------------------------------------------------

//2. CONCAT

// concat

const concat = <T>(a: T[], b: T[]): T[] => {
  return [...a, ...b];
};
const wildAnimals = ["Lion", "Bear", "Zebra"];
const domesticAnimals = ["Cat", "Turtle", "Dog"];

console.log(
  `This is the concat of animals arrays`,
  concat(wildAnimals, domesticAnimals)
);

// concat 2.0

const multipleConcat = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

const weirdAdorableAnimals = ["Amur Leopard", "Fennec fox", "Axolotl"];

console.log(
  `This is the concat of animals arrays `,
  multipleConcat(wildAnimals, domesticAnimals, weirdAdorableAnimals)
);

//------------------------------------------------------------------------------------
//3. CLONE && MERGE
interface User {
  name: string;
  surname?: string;
  age?: number;
  country?: string;
  married?: boolean;
}
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const clone = (source: User) => {
  return { ...source };
};

const merge = (source: User, target: User) => {
  const clonedTarget = clone(target);
  return { ...clonedTarget, ...source };
};

console.log(merge(a, b), "This is the result to merge 2 objects");

//------------------------------------------------------------------------------------

//4. READ BOOKS
interface Book {
  title: string;
  isRead: boolean;
}

const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const findBook = books.find((book) => book.title === titleToSearch);

  return findBook ? findBook.isRead : false;
};

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log("Have I read Devastación?", isBookRead(books, "Devastación"));
console.log(
  "Have I read Canción de huelo y fuego",
  isBookRead(books, "Canción de hielo y fuego")
);
console.log(
  "Have I read Los Pilares de la Tierra?",
  isBookRead(books, "Los Pilares de la Tierra")
);

//------------------------------------------------------------------------------------

//5. SLOT MACHINE

class SlothMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }
  play(): void {
    this.coins++;

    const firstSlot = Math.random() < 0.5;
    const secondSlot = Math.random() < 0.5;
    const thirdSlot = Math.random() < 0.5;

    if (firstSlot && secondSlot && thirdSlot) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();

machine1.play();
machine1.play();
machine1.play();
