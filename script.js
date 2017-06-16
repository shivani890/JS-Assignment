
function newActivity() {
 var inputValue = document.getElementById("myInput").value;

 if (inputValue) {
  var todoItem = document.createElement("li");

  var todoText = document.createTextNode(inputValue);
  
  todoItem.appendChild(todoText);
  
  document.getElementById("toDoList").appendChild(todoItem);
  
  var button = document.createElement('button');
  
  button.innerText = 'X';
  
  todoItem.appendChild(button);

  // delete todo item 

  button.addEventListener('click', function() {
     toDoList.removeChild(todoItem);
  });



} else {
 alert("please enter a todo item")
}
return false;
} 

