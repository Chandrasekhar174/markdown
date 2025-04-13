import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable';
import {marked, Marked} from 'marked' 
const App = () => {
    
    const [content,setContent]=useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, <div></div>, between 2 backticks.`);
    const nodeRef=useRef(null);
    function handleChange(e){
        setContent(e.target.value);
    }

  return (
    <div>
        <Draggable nodeRef={nodeRef}>
            <textarea ref={nodeRef} id="editor" value={content} onChange={handleChange} />
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} id="preview" value={content} dangerouslySetInnerHTML={{__html:marked(content)}}  readOnly />
        </Draggable>
       
    </div>
  )
}
export default App;
