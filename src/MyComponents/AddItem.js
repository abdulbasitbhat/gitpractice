import React, { useState } from 'react'

export default function AddItem(props) {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        console.log(title,desc);
        {/*e.preventDefault();*/}
        if (!title || !desc){alert("Please Fill Both Values");}
        props.addTodo(title,desc);
        console.log(title,desc);
        
    }

    
  return (
    <>
    <h2 style={{ textAlign:'center', marginTop:'20px'}}>Add Todo</h2>
    <div style = {{margin: '20px 20px 20px 20px'}}>
        
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc" value = {desc} onChange={(e)=>setDesc(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
</form>
    </div>
    </>
  )
}
