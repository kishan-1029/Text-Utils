import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase is clicked: " + text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase!!","success");
    }
    const handleloClick=()=>{
        
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert("converted to lowercase!!","success");
    }
    const handleclearClick=()=>{
        
        let newText=""
        setText(newText)
        props.showAlert("clear all text !!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on change ");
        setText(event.target.value);
         
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("all text copy!!","success");
    }
    const [text,setText]=useState("");
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading} </h1>    
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uparcase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>clear text </button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>copy text </button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>your text summary</h2>
    <p>{text.split(" ").length}words and {text.length}caracters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter somethig in the textbox above to preview it here"}</p>
</div>
</>
  )
}
