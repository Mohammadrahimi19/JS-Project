var TodoInput = document.querySelector('#TodoInput')
var RemoveAllBtn = document.querySelector('#ramoveAll')
var add = document.querySelector('#add')

// بیرون باکس
var TodoBox = document.querySelector('#TodoBox')

var TodoObjects = document.querySelectorAll("#todoObject")


var addbtnBox = document.querySelectorAll('#editBox')
var removeBox = document.querySelectorAll('#removeBox')
var comletedBox = document.querySelectorAll('#completed')
// داخل باکس




// نگه دارندع همه ابجگن ها
var TodoItemsArray = []


// تابع ساخت یک ابجگت از مقدار که کاربر وارد کرده با پارامتر های id ,value
function addTodoItem() {
    let getArray= getlocalstorag(TodoItemsArray)

    let value = TodoInput.value
    if (value === '') { alert('the Box is empty!!') }

    else {
        var TodoObject = {
            id: TodoItemsArray.length + 1,
            Value: value,
        }
        getArray.push(TodoObject)
        GenerateTodoItem(getArray)
        setLocalStore(getArray)
    }
    TodoInput.value = ''
}



// ساخت باکس برای هر ایتم
function GenerateTodoItem(array) {
    TodoBox.innerHTML = ''

    array.forEach((item) => {

        console.log(item.Value);
        TodoBox.insertAdjacentHTML('afterbegin', `
            <div class="flex flex-row items-center p-5 border-2 bg-slate-300 border-black rounded-lg" id="todoObject">
                   <div class="w-full">
                       <input class="w-full bg-transparent rounded-lg  input${item.id}" value="${item.Value}" type="text" name="item" id="item" disabled>
                   </div>
                   <div id="ButtonsBox " class="flex gap-2 p-2">
                       <button id="save" onclick="save(${item.id})"
                          style="display:none;" class="save${item.id} w-52 h-12 border-none rounded-xl bg-green-600   text-white hover:bg-slate-200 hover:text-green-600 transition  duration-700">save!</button>
                       <button id="editBox" onclick="editTodo(${item.id})"
                           class="w-52 h-12 border-none rounded-xl bg-green-600   text-white hover:bg-slate-200 hover:text-green-600 transition  duration-700">Edit</button>
                       <button id="ramoveBox" onclick="removeItem('${item.id}')"
                           class="w-52 h-12  rounded-xl bg-red-600  text-white hover:bg-slate-200 hover:text-red-600  transition  duration-700">Remove
                           Todo </button>
                   </div>
               </div>`)
    })

}


// توابع حذف
function removeAll() {
    TodoBox.innerHTML = ""
    TodoItemsArray = []
    setLocalStore(TodoItemsArray)
}

function removeItem(id) {
    let getArray= getlocalstorag(TodoItemsArray)
    var index = getArray.forEach((item, index) => {
        if (item.id === id) {
            return index
        }
    
    })
    getArray.pop(index)
    GenerateTodoItem(getArray)
    setLocalStore(getArray)
}


// تابع دکمه ادیت
function editTodo(id) {
    let getArray= getlocalstorag(TodoItemsArray)
    let index = getArray.findIndex(res => {
        return res.id === id
    })
    var itemsInputEdit = document.querySelector(`.input${index + 1}`)
    itemsInputEdit.disabled = false
    itemsInputEdit.classList.remove('bg-transparent')
    itemsInputEdit.classList.add('bg-white')
    itemsInputEdit.classList.add('p-5')
    document.querySelector(`.save${index + 1}`).style.display = 'block'
}



// تابع دکمه سیو
function save(id) {
    let getArray= getlocalstorag(TodoItemsArray)
    let index = getArray.findIndex(res => {
        return res.id === id
    })
    var itemsInputEdit = document.querySelector(`.input${index + 1}`)
    getArray[index].Value = itemsInputEdit.value

    GenerateTodoItem(getArray)
    setLocalStore(getArray)
}






//توابع لوکال استروج
function setLocalStore(todo){
    localStorage.setItem('todo',JSON.stringify(todo))
}
function getlocalstorag(){
    let local = JSON.parse(localStorage.getItem('todo'))
    if (local){
       return TodoItemsArray = local
    } else{
       return TodoItemsArray = []
    }
}





add.addEventListener('click', addTodoItem)
RemoveAllBtn.addEventListener('click', removeAll)

document.addEventListener('DOMContentLoaded',()=>{
    let getArray=getlocalstorag()
    GenerateTodoItem(getArray)
})



document.addEventListener('keydown',(e)=>{
    if(e.code==='Enter'){
        addTodoItem()
    }
})