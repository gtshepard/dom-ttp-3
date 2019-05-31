let populateText = ((elem, msg) => {
  document.getElementById(elem).innerHTML = msg;
});

let getPassword = (() => {
  return document.getElementById("pass").value;
});

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

let isCorrect = (() => {
   if ('1234567' === getPassword()) {
      alert("Correct");
      updateHeader(); 
   }
});


