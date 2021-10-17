const customer = [
  {
    id: 01,
    name: "Akshita",
    type: "savings",
    account_No: 12345566,
    transaction: [
      [2000, new Date(2000, 11, 12)],
      [-2290, new Date(2000, 10, 2)],
    ],
  },
  {
  id: 02,
  name: "Ruchi",
  type: "savings",
  account_No: 45678990,
  transaction: [
    [2000, new Date(2000, 11, 12)],
    [-2290, new Date(2000, 10, 2)],
  ],
},
{    
  id: 03,
  name: "Nisha",
  type: "savings",
  acoount_No: 1433546476,
  transaction: [
    [89999, new Date(2000, 9, 12)],
    [-5789, new Date(2000, 9, 12)],
    [39089, new Date(2001, 9, 12)],
    [-1789, new Date(2001, 9, 12)],
  ],
},
{
  id: 04,
  name: "Bhanu",
  type:"savings",
  account_No: 1562058321,
  transaction:[
    [39089, new Date(2001, 9, 12)],
    [-1789, new Date(2001, 9, 12)],
    [89999, new Date(2000, 9, 12)],
    [-5789, new Date(2000, 9, 12)],
  ]

},
  
];




const cards = document.querySelector('.main__cards');
const eachCard = document.querySelectorAll('.main__card');




//closest function gives me the name of the parent class 
cards.addEventListener("click", (event) => {
  eachCard.forEach((elem)=> elem.classList.remove("active__card"));
  //console.log(event.target.closest(".main__card"));
  const elem = event.target.closest(".main__card");
  elem.classList.add("active__card");
  //console.log(eachCard);
  const htmlarray = [...eachCard]; //destructring 
  const inactiveElems = htmlarray.filter(
    (elem) => elem.classList.contains("active__card")===false
    );
    console.log(inactiveElems);
    const [a,b] = inactiveElems;
    const newElem = [a,elem,b];
    cards.innerHTML = "";
    newElem.forEach((elem) => cards.insertAdjacentElement("beforeend",elem));
});






//add event listener to the parent class -done in class
//find out on which card the event has taken place -done (target)
//hw remove the active class from all of them - done
//add active class into one child - done in class 
// Assignment :
// 1. when  the person enters his name in the input box  , read the input , fetch his data from customer object and display his details in the profile area . search the user's transaction from transaction array on the basis of his id.
// calculate his total balance.
// 2. calculate all deposit sum and display in green color and all withdrawl sum , display in red color.Assignment
// 3. filter all deposit , and withdrawl and diaplay in their respective area.
// 4. add functionality to read amount input and display it on the DOM
// 5. implement the sort functionality on the bnasis if amount.