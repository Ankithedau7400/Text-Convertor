import React,{useState} from 'react'


export default function Textform(props) {
    
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
        
    }
    const handleCopy =()=>{
        console.log("I am copy")
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copy to Clipboard","success");
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
        
    }
    const handleReverseClick = ()=>{
        console.log("Lowercase was Clicked" + text);
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Reverse String!","success");
        
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    
    return (

        <>
        <div className = "container" style={{color: props.mode==='dark'?'grey':'#042743'}}>
            <h1 className="my-4" >{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} style={{backgroundColor : props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'#042743'}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleReverseClick}>Reverse String</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
