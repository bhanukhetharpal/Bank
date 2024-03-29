const heading = document.querySelector('.main__heading');
const accountname = document.querySelector('.account__holder_detail');
const inputName = document.querySelector("#name");

let depositAmount = 0;
let withdrawlAmount = 0;
let depositArray = [];
let withdrawArray = [];
let Accountholder;
const depositCards = document.querySelector('.deposit__cards');
const depositButton = document.querySelector('.deposit__button');
const depositInput = document.querySelector('.deposit_input');
const depositSort = document.querySelector('.deposit__sort');


const withdrawCards = document.querySelector('.withdraw__cards');
const withdrawButton = document.querySelector('.withdraw__button');
const withdrawInput = document.querySelector('.withdraw_input');
const withdrawSort = document.querySelector('.withdraw__sort');

const WithdrawPalet = document.querySelector('.account__transaction__withdraw');
const DepositPalet = document.querySelector('.account__transaction__deposit');
const loanamount = document.querySelector('.loan_amount');
const loancheck = document.querySelector('.loan_check');
const Loanresult = document.querySelector('.loan_result');
const convertToDate = (today) => {
    const dd =  String(today.getDate()).padStart(2,"0");
    const mm = String(today.getMonth()).padStart(2,"0");
    const yy = String(today.getFullYear());
    today = dd+'/'+mm+'/'+yy;
    return today;

}
const displayCards = (amount,type,parent,date)=> {
    const html = ` <div class="main__method-card">Rs. ${amount} ${type} Dated : ${convertToDate(date)}
    </div>`;
    parent.insertAdjacentHTML("afterbegin",html);
}
depositButton.addEventListener("click" , function(){
    displayCards( depositInput.value,'Deposit',depositCards,new Date());  
    depositAmount += parseInt(depositInput.value);
    DepositPalet.innerHTML = "Rs " + depositAmount ;  
    depositArray.push(parseInt(depositInput.value));
    Accountholder.deposits = depositArray;  
    depositInput.value = "";
});
withdrawButton.addEventListener("click" , function(){
    displayCards( withdrawInput.value,'Withdraw',withdrawCards, new Date());
    withdrawlAmount -= parseInt(withdrawInput.value);    
    WithdrawPalet.innerHTML = "Rs "+ withdrawlAmount;
    withdrawArray.push(parseInt(withdrawInput.value));
    Accountholder.withdraws = withdrawArray;  
    withdrawInput.value = "";

});
depositSort.addEventListener("click",function(){
     Accountholder.deposits.sort();
      Accountholder.deposits;
    depositCards.innerHTML="";
    console.log(Accountholder.deposits);
    Accountholder.deposits.forEach(elem=>{
        displayCards(elem,'Deposit',depositCards,new Date());
    });   
});
withdrawSort.addEventListener("click",function(){
    Accountholder.withdraws.sort();
    Accountholder.withdraws;
    withdrawCards.innerHTML="";
    console.log(Accountholder.withdraws);
    Accountholder.withdraws.forEach(elem=>{
        displayCards(elem,'Deposit',withdrawCards,new Date());
    });   
});

inputName.addEventListener("keydown",(event) => {   
  
    if(event.key == "Enter"){
     let user = inputName.value;
     inputName.value = "";
     heading.innerHTML = `Welcome To Our Bank ${user}`;
     const userdata = customer.filter(elem => elem.name==user);
     const transferData = userdata[0].transaction;
     transferData.forEach(elem=> {
         if(elem[0]>0){
             depositArray.push(elem[0]);
             depositAmount+=elem[0];
             displayCards(elem[0],'Deposit',depositCards,elem[1]);
         }
         else{
             withdrawArray.push(elem[0]*(-1));
             withdrawlAmount+=elem[0]*(-1);
             displayCards(elem[0]*-1, 'Withdraw', withdrawCards,elem[1]);
         }
      });
      userdata.deposits = depositArray;
      userdata.withdraws = withdrawArray;
      console.log(userdata);
      DepositPalet.innerHTML = "Rs " + depositAmount;
      WithdrawPalet.innerHTML = "Rs "+ withdrawlAmount;
      Accountholder = userdata;
      const html = `<div>Name        : ${user}</div>
      <div>Account No. : ${userdata[0].account_No}</div>
      <div>Type        : ${userdata[0].type}</div>
      <div>Balance     : ${depositAmount}</div>`;
      accountname.innerHTML = html;
}    
      loancheck.addEventListener("click",function(){
          let loan = loanamount.value;
          loanamount.value = "";
          const balance = depositAmount;
          laon = loan/10;
          let ans = "disaproved."
          if(balance>=loan){
            ans = "approved"
          }

          Loanresult.innerHTML=`Loan is ${ans}.`;
      });
    });