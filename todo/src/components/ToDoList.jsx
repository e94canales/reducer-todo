import React from 'react'

const ToDoList = props => {

    return (
        <div className='toDoContainer'>
        {
          props.todoList.map( t => {
            return (
              <div onClick={props.onToggle} id={t.id} key={t.id} className={`${t.completed ? 'completed' : 'not'}`}>
                {t.item}
              </div>
            )
          })
        }
      </div>
    )
}

export default ToDoList