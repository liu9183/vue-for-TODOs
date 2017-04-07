// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'todomvc-app-css/index.css'
import Vue from 'vue'


Vue.config.productionTip = false

var filters={
	all(todos){
		return todos
	},
	active(todos){
		return todos.filter(function(todo){
			return !todo.completed
		})
	},
	completed(todos){
		return todos.filter(function(todo){
			return todo.completed
		})
	}
}

var app=new Vue({
	el:'.todoapp',
	data:{
		  newTodo:'',
		  todos:[{
		  	content:"vue",
		  	completed:false
		  }],
		  edited:null,
		  editCache:null,
		  hashName:"all"
	},
	computed:{
		remain(){
			return filters.active(this.todos).length
		},
		isAll:{
			get(){
				return this.remain===0
			},
			set(value){
				this.todos.forEach(function(todo){
					todo.completed=value
					
				})
			}
		},
		filteredTodos(){
			return filters[this.hashName](this.todos)
		}
	},
	methods:{
		addTodo(e){
			if(!this.newTodo){
				return false
			}
			this.todos.push({
				content:this.newTodo,
				completed:false
			})
			this.newTodo=''
		},
		removeTodo(index){
			this.todos.splice(index,1)
		},
		editTodo(todo){
			this.editCache=todo.content
			this.edited=todo
		},
		doneEdit(todo,index){
			if(!todo.content){
				this.removeTodo(index)
			}else{
				this.edited=null
			}
		},
		cancleEdit(todo){
			this.edited=null
			todo.content=this.editCache
		},
		clear(){
			this.todos=filters.active(this.todos)
		}
	},
	directives:{
		focus(el,value){
			if(value){
				el.focus()
			}
		}
	}
})

function hashChange(){
	let hashName = location.hash.replace(/#\/?/,'')
	if(filters[hashName]){
		app.hashName = hashName
	}else{
		location.hash=''
		app.hashName='all'
	}
}
window.addEventListener('hashchange',hashChange)

