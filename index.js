let populateText = ((elem, msg) => {
  document.getElementById(elem).innerHTML = msg;
});

let getPassword = (() => {
 // let x = document.getElementById("pass").innerContent;
  //let y = document.getElementsByTagName('input');
  return document.getElementById("pass").value
 // for (let i = 0; i < y.length;i++){
  
 // }
  console.log(y);
});

let isCorrect = (() => {
   if ('1234567' === getPassword())
      alert("Correct");
});


