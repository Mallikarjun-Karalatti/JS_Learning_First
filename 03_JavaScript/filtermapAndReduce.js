// for each doesn't return anything

// filter

const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter( (num) => num>4);
console.log(newNums);

const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book two', genre: 'History', publish: 1977, edition: 2015},
    { title: 'Book three', genre: 'Science', publish: 1987, edition: 2015},
    { title: 'Book four', genre: 'History', publish: 1977, edition: 2012}
]

const historyBooks = books.filter( (bk) => bk.genre === 'History');
console.log(historyBooks);
const publishedIn1987onwords= books.filter( (bk) => bk.publish >= 1987);
console.log(publishedIn1987onwords);

const nums = myNums.map( (num) => { return num+10});
console.log(nums);

// chaining 
const nnums = myNums
               .map((num) => num*10)
               .map((num) => num+1)
               .filter( (num) => num>=40)
console.log(nnums);

// Accumulator

const myNumbers = [1,2,3];
const myTotal = myNumbers.reduce( (acc,cur) => {
    console.log(`acc: ${acc} and cur: ${cur}`);
    return acc+cur;
},0);
console.log(myTotal);

const shoppingCart = [
    { itemName: "data science course", price: 5999},
    { itemName: "javascript course", price: 999},
    { itemName: "full stack course", price: 3999},
];

const totalAmount = shoppingCart.reduce((acc,curItem)=> acc+curItem.price,0);
console.log(totalAmount);