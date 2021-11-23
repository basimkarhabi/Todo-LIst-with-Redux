import React from 'react'
import styles from './AddTodo.styles.js'

function AddTodo() {
    return (
        <div>
            <input style={styles.inputField}  placeholder= "Enter what should I do" />
            <button style= {styles.submitButtom} ></button>
        </div>
    )
}

export default AddTodo
