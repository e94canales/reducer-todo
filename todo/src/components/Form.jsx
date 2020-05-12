import React from 'react'

const Form = props => {

    return (
        <div className='formContainer'>
            <form onSubmit={props.onTodoSubmit}>
                <input 
                name='todoForm'
                value={props.inputValue}
                onChange={props.onInputChange}
                placeholder='Add Todo'>
                </input>
            </form>
            <button onClick={props.onClearSubmit}>Clean</button>
        </div>
    )
}

export default Form