import React, { PureComponent } from 'react'
import TodoItem from "./TodoItem";


{/*This Code teaches a lot about how to set up a card layout like amazon. A responsive one, one which works well on phone */}
export default class Todos extends PureComponent {
    render() {
        let els = [1, 2, 3,4,5,6,7,8];
        return (
            <>
            {/*Flex to go yo new line, flexwrap to make us go to next line */}
            <div style = {{display: 'flex', justifyContent: 'center', margin: '20px 20px 20px 20px', flexWrap: 'wrap'}}>
                {
                    els.map((el) => ( 
                        <div style={{ display: 'inline-block'}}>
                            <div style={{ margin: '20px 20px 20px 20px' }}>
                                <TodoItem />
                            </div>
                        </div>

                    ))

                }
                </div>



            </>
        )
    }
}
