// console.log(abc)
var addbtn = document.getElementById("addbtn")
window.onload = function(){
if(JSON.parse(localStorage.getItem('todolist')) != null){
  todolist = JSON.parse(localStorage.getItem('todolist'))
display()
}
}


var todolist =[]
var abc = JSON.parse(localStorage.getItem('authenticated-user'))
// display()
addbtn.addEventListener('click',function(){

var inputId = document.getElementById("inputId")

  var statuss = "incomplete"
  var createdat = new Date().toDateString();

var obj = {
  title:inputId.value,
  status:statuss,
getdate:createdat,
email:abc.email
}

if(inputId.value !== ''){
  todolist.push(obj)
  // localStorage.setItem("todolist" , JSON.stringify(todolist))

}
  else{
    alert("Input Feild Empty")
  }
if(localStorage.getItem('todolist')== null){  
localStorage.setItem("todolist" , JSON.stringify(todolist))
}
else{
localStorage.setItem("todolist" , JSON.stringify(todolist))

}

 display()
 inputId.value = ''
})


// display()



// let todolist = JSON.parse(localStorage.getItem('todolist'))

function display(){


// todolist = JSON.parse(localStorage.getItem('todolist'))
// console.log(todolist)


var filterdata = todolist.filter(data =>{
  return data.email === abc.email
})
console.log(filterdata)
  var main = document.getElementById("main")
  main.innerHTML = ''

console.log(todolist)
filterdata.forEach(function(item,index){

var submain = document.createElement('div')
submain.classList.add('sub-main')


var submain1 = document.createElement('div')
submain1.classList.add('sub-main-1')

var task = document.createElement('div')
task.classList.add('task')
task.innerText = item.title

var deletebtn = document.createElement('div')
deletebtn.classList.add('delete')
deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

var editbtn = document.createElement('div')
editbtn.classList.add('edit')
editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>'

submain1.appendChild(task)
submain1.appendChild(deletebtn)
submain1.appendChild(editbtn)


var submain2 = document.createElement('div')
submain2.classList.add('sub-main-2')

var submain2span = document.createElement('span')
submain2span.classList.add('sub-main-2-span')
submain2span.innerText = "Created at: " + item.getdate

submain2.appendChild(submain2span)

submain.appendChild(submain1)
submain.appendChild(submain2)


main.appendChild(submain)




//   var taskholder = document.createElement('div')
//   taskholder.classList.add('task')
//   // alert('hi')
//   taskholder.innerText = item.title
//   var deletebtn = document.createElement("button")
//   deletebtn.classList.add('btns')
//   deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
//   taskholder.appendChild(deletebtn)
//   submain.appendChild(taskholder)

//   var wqt = document.createElement('div')
//   wqt.innerText = "Created at: " + item.getdate
//   wqt.classList.add('at')
//   submain.appendChild(wqt)


// main.appendChild(submain)

  deletebtn.addEventListener("click", function (e) {
    del(index);
    


  });


  editbtn.addEventListener("click", function (e1) {
    edit(item,index)

  })

})
}






function del(index){
// gettodo = JSON.parse(localStorage.getItem('todolist'))
todolist.splice(index,1)
localStorage.setItem('todolist', JSON.stringify(todolist))
display()

}



// function edit(task,index){
//   // alert('hi')
//   // gettodo =  JSON.parse(localStorage.getItem('todolist'))
//   var userInput = document.getElementById("inputId");
//   userInput.value = task.title
//   localStorage.setItem('todolist', JSON.stringify(todolist))
  
//   // console.log(title)
// // userInput.value = task.title


  
// }


function edit(item,index){
  var userInput = document.getElementById("inputId");
  // userInput.innerHTML = '';
  // userInput.value = item.title
// addbtn.classList.replace('fa-plus','fa-save')
(async () => {

  const { value: task } = await Swal.fire({
    title: "Edit Your Todo's",
    input: 'text',
    // inputLabel: ",
    inputPlaceholder: 'Write Here'
  })
if (task) {
  // Swal.fire(`Entered email: ${email}`)
// document.querySelector('.fa-save').addEventListener('click',function(){
  todolist[index].title = task
  localStorage.setItem('todolist',JSON.stringify(todolist))

// button.innerHTML = '<i id="addbtn" class="fa-solid fa-plus"></i>'

// })
}
display()

})()

}

display()

// todolist[index].title = prompt('enter')

// addbtn.id = 'addbtn'


// display()





// userInput.value = ''

// display()







// OLD TODO LIST SHOWLIST FUNCTION 

// function createTask() {
//   set()

//   document.getElementById("main").innerText = "";

//   todoList.forEach(function (task, index) {
    
// var mainrow = document.createElement("div")
// mainrow.classList.add("row","d-flex","justify-content-center","mt-2","azlan")
// document.getElementById("main").appendChild(mainrow)


// var innercol = document.createElement("div");
// innercol.classList.add("col-5", "bg-light" , "border","rounded","p-1");
// mainrow.appendChild(innercol)
    
// var row = document.createElement("div")
// row.classList.add("row","m-1")
// innercol.appendChild(row)
//     // var h5_del_edit_col = document.createElement("div");
//     // h5_del_edit_col.classList.add("col", "border", "rounded");
//     // innerrow.appendChild(h5_del_edit_col);
//     // h5_del_edit_col.style.boxShadow = "0px 0px 2px inset";

// var col = document.createElement("div")
// col.classList.add("col","border")
// row.appendChild(col)

//     var inneritemsrow = document.createElement("div");
//     inneritemsrow.classList.add("row", "bg-lgiht", "p-1");
//     col.appendChild(inneritemsrow);

//     var innercol_h5 = document.createElement("div");
//     innercol_h5.classList.add("col-10", "p-0", "m-0");
//     inneritemsrow.appendChild(innercol_h5);

//     var h5 = document.createElement("h5");
//     h5.innerText = task.title
//     innercol_h5.appendChild(h5);

//     var deleteicon = document.createElement("div");
//     deleteicon.classList.add(
//       "col-1",
//       "p-0",
//       "m-0",
//       "d-flex",
//       "justify-content-end",
//       "align-items-center"
//     );
//     deleteicon.innerHTML = '<i class="fa fa-trash">';
//     deleteicon.style.cursor = "pointer";
//     deleteicon.setAttribute("id", "trash");
//     inneritemsrow.appendChild(deleteicon);

//     var editicon = document.createElement("div");
//     editicon.classList.add(
//       "col-1",
//       "p-0",
//       "m-0",
//       "d-flex",
//       "justify-content-end",
//       "align-items-center"
//     );
//     editicon.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
//     inneritemsrow.appendChild(editicon);
//     editicon.style.cursor = "pointer";

//     // innerrow.appendChild(h5_del_edit_col)

//     var daterow = document.createElement("div");
//     daterow.classList.add("row", "p-0", "m-0");
//     innercol.appendChild(daterow);

//     var datecol = document.createElement("div");
//     datecol.classList.add("col", "p-0", "d-flex", "justify-content-end");
//     daterow.appendChild(datecol);

//     var dateparagraph = document.createElement("p");
//     dateparagraph.style.boxShadow = "0px 0px 2px  inset";



//     dateparagraph.innerHTML = "Created at : " + task.createdat;
//     dateparagraph.classList.add("border", "mt-1", "mb-0");
//     datecol.appendChild(dateparagraph);

    
  

//     deleteicon.addEventListener("click", function (e) {
//       del(index);
//     });


//     editicon.addEventListener("click", function (e1) {
//       edit(task);
//     });
//     // document.getElementById('main').appendChild(btn)
//     //     var text = document.createTextNode(task)
//     //     h4.appendChild(text)
//   });
// }
// createTask()

// // del = document.getElementsByClassName("del")
// // del.addEventListener('click',del)
// function del(index) {
//   todoList.splice(index, 1);
//   createTask();
// }


// function edit(task){
//   var userInput = document.getElementById("userinput");
//   // userInput.innerHTML = '';
//   userInput.value = task.title

// document.getElementById("plus").style.display='none'
// var update =  document.getElementById("plus")
// update.classList.replace('fa-plus','fa-check')
// update.style.display = "inline-block"
// document.getElementById('myform').appendChild(update)


// update.addEventListener('click',function(task){

//   document.getElementById("plus").style.display = 'none'
//   button.classList.replace('fa-check','fa-plus')
//   button.style.display = 'inline-block'
//   document.getElementById('myform').appendChild(button)

//   todoList.task.title = userInput.value

// });


  
// }
