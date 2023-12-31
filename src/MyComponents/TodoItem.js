import React, { PureComponent } from 'react'
import logo from '../logo.svg';

export default class TodoItem extends PureComponent {
  render() {
    return (
      <> 
            <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="Img" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </>
    )
  }
}
