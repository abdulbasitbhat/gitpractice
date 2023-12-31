import React, { PureComponent } from 'react'
import TodoItem from "./TodoItem";



export default class Todos extends PureComponent {
    render() {
        let els = [1, 2, 3];
        return (
            <>
                {
                    els.map((el) => (
                        <div style={{ display: 'inline-block' }}>
                            <div style={{ margin: '20px 20px 20px 20px' }}>
                                <TodoItem />
                            </div>
                        </div>
                    ))

                }



            </>
        )
    }
}
