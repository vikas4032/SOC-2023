import React, { useState } from 'react'


export const Addtodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("can not be empty")
        }
        props.adddtodo(title,desc)

    }
    return (<>
        <div className = "container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
            <div class="mb-3">
                <label for="title" value = {title} onChange={(e)=>{settitle(e.target.value)}} class="form-label">Todo Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
                    
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Discription</label>
                <input type="text" value = {desc} onChange={(e)=>{setdesc(e.target.value)}} class="form-control" id="desc"/>
            </div>
        
            <button type="submit" class="btn btn-sm btn-success">Submit</button>
        </form>
    </div>
    </>
    )
}
