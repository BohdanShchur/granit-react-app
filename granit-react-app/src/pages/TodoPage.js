import React, { useState } from 'react'
import { Input, Form, FormGroup, Button } from 'reactstrap'
import  Notes  from '../components/NotesComponent'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

const TodoPage = ( props )=>{
    const[notes, setNote] = useState('')  
    
    const submitHandler = event =>{
        event.preventDefault()
        props.createPost(newNote)
        setNote('')
    }
    
    const newNote = {
        title: notes,
        id: Date.now().toString(),
        completed: false
    }

    const inputChangeHandler = event =>{
        event.persist()
        setNote(event.target.value)
    }

    return(
        <div className="container">
            <Form onSubmit={submitHandler}>
                <FormGroup className="mt-3">
                    <Input type="text" value={notes} 
                        onChange={inputChangeHandler}
                        name="title"
                        placeholder="Введіть подію" />
                        <Button type="submit" color="success">Submit</Button>
                </FormGroup>
                <hr/>
               <Notes />
            </Form>
        </div>
    )
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(TodoPage)