import React from 'react'
import { Button, ListGroup, ListGroupItem, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { completeNote, removeNote } from '../redux/actions'

const Notes = (props)=>{

    const submitHandler = id =>{
        props.removeNote(id)
    }

    const HandleCheckbox = (id) =>{
        props.completeNote(id)
    }

    if(props.notes.length !== 0){
        return(
            <ListGroup className="mt-3">
                {props.notes.map( note =>{

                    let classes = ['note']
                    if(note.completed){
                        classes.push('completed')  
                    }
                    return(
                        <ListGroupItem key={note.id}>
                        <div className={classes.join(' ')}>
                            <div className="title pl-2">
                                <Input type="checkbox" checked={note.completed} onChange={()=>HandleCheckbox(note.id)}></Input>
                                <strong>{note.title}</strong>
                            </div>
                            <Button type='button' color="danger" size="sm"
                              onClick={()=> submitHandler(note.id)}
                            >
                                  &times;
                            </Button>
                        </div>
                    </ListGroupItem>
                    )     
                }
                )}
            </ListGroup>
        )
    }
    else return(
        <p>У Вас немає подій!</p>
    )
}

const mapStateToProps = (state)=>{
    
    return state.notes
}

const mapDispatchToProps = {
   removeNote: removeNote,
   completeNote: completeNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);