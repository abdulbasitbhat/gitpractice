import React from 'react'
import logo from '../logo.svg';

export default function TodoItem(props) {
  return (
    <> 
            <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="Img" />
                <div className="card-body">
                    <h3 className="card-title">{props.todo.title}</h3>
                    <h4>{props.todo.desc}</h4>
                    {/* () => props.onDelete(props.todo)  used this instead of props.onDelete(props.todo) becasue later is called on every reload*/}
                    <button type="button" className="btn btn-info" onClick={() => props.onDelete(props.todo)}>Delete</button>
                </div>
            </div>
      </>
  )
}

