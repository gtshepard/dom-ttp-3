//text maniplulation
let populateText = ((elem, msg) => {
  document.getElementById(elem).innerHTML = msg;
});
//get password value
let getPassword = (() => {
  return document.getElementById("pass").value;
});
//change header to information of form feilds
let updateHeader = (() => {
    let arr = document.getElementById("input-form").children;
    let msg = ""

    for (let i = 0; i < arr.length; i++){
      let val = arr[i];

      if (arr[i].value !== undefined)
        msg = msg + " " +  arr[i].value;
    } 
    console.log(msg)
    populateText("header", msg);
});
//validates password and updates header
let isCorrect = (() => {
   if ('1234567' === getPassword()) {
      alert("Correct");
      updateHeader(); 
   }
});


