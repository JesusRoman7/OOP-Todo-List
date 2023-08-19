const form = document.querySelector('[data-form');
const lists = document.querySelector('[data-lists');
const input = document.querySelector('[data-input')

let todoArr = [];

//Form 
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let id = Number(Math.random() * 100000);
    console.log(id);
    const todo = new Todo(id, input.value);
    console.log(todo);
    todoArr = [...todoArr, todo]
    console.log(todoArr);
    UI.displayData(); //llamandolo para que nos lo imprima
    UI.clearInput();

    //Remove from the dom
    UI.removeTodo();
})

//OOP 
class Todo{
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }

}

//UI
class UI{
    static displayData(){
        let displayData = todoArr.map(item =>{
            const {id, todo} = item;
            return `
            <div class="todo">
                <p>${todo}</p>
                <span class="remove" data-id= ${id}>
                    X
                </span>
            </div>
            `
        })
        lists.innerHTML = (displayData).join(" "); //join nos sirve para librarnos de las extra commas
    }

    static clearInput(){
        input.value = "";
    }

    static removeTodo(){
        lists.addEventListener('click', (e)=>{
            if(e.target.classList.contains("remove")){
                console.log('remove text');
                e.target.parentElement.remove();
            }
            let btnId = e.target.dataset.id;
            //remove from array
            UI.removeArrayTodo(btnId);
        });
    }

    static removeArrayTodo(id){
        todoArr = todoArr.filter((item)=> item.id !== id)
    }
}