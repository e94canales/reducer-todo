export const initialState = {
    todoInput: '',
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },

        {
            item: 'Get groceries',
            completed: false,
            id: 3892987588
        },

        {
            item: 'Feed the cats',
            completed: false,
            id: 3892987587
        },

        {
            item: 'Make dinner',
            completed: false,
            id: 3892987586
        },

        {
            item: 'Go to sleep',
            completed: false,
            id: 3892987585
        }
    ]
        
    
}
export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_TODO_INPUT':
            return {
                ...state,
                todoInput: action.payload
            }
        case 'SET_NEW_TODO':
            return {
                ...state,
                todo: [...state.todo, action.payload],
                todoInput: ''
            }
        case 'TOGGLE_COMPLETED':
            return {
                todo: state.todo.map( e => {
                    if (e.id == action.payload){
                        return {...e, completed: !e.completed}
                    } else {
                        return e
                    }
                })
            }
        case 'CLEAR':
            return {
                ...state,
                todo: state.todo.filter( e => {
                    if (e.completed === false){
                        return e
                    }
                })
            }
        default:
            return state
    }
}