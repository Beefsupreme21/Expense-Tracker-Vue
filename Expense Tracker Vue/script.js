let id = 0


const app = Vue.createApp({
    data() {
        return {
          item: '',
          date: '',
          amount: '',
          rowData:[]
        }
    },
    methods: {
        addExpense() {
            let my_object = {
                newDate:this.date, 
                newTodo:this.item,
                newAmount:this.amount,
            }
            this.rowData.push(my_object)

            this.item = '';
            this.date = '';
            this.amount = '';
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)
        }, 
        clearList() {
            this.rowData = []
        }
    }
})


// addItem(){
//     var my_object = {
//       mail:this.mail,
//       date:this.date,
//       adress:this.adress,
//       company: this.company,
//       fliers: this.fliers
//     };
//     this.rowData.push(my_object)

    this.mail = '';
    this.date = '';
    this.adress = '';
    this.company = '';
    this.fliers = '';
//   }

//   this.todos.push({ id: id++, text: this.newTodo })
//   this.dates.push({ text: this.newDate })
//   this.amounts.push({ text: this.newAmount })
//   this.newTodo = ''