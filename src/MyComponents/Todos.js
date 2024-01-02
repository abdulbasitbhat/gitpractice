import React from 'react'
import TodoItem from "./TodoItem";


{/*This Code teaches a lot about how to set up a card layout like amazon. A responsive one, one which works well on phone */}
export default function Todos(props) {
  return (
    <>
            <h2 style={{ textAlign:'center', marginTop:'20px'}}>Todos</h2>
            <div style = {{display: 'flex', justifyContent: 'center', margin: '20px 20px 20px 20px', flexWrap: 'wrap'}}>
            

                {
                    props.todos.map((todo) => ( 
                        <div style={{ display: 'inline-block'}}>
                            <div style={{ margin: '20px 20px 20px 20px' }}>
                                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                            </div>
                        </div>

                    ))

                }
                </div>



            </>
  )
}


