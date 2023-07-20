import React,{useState}from 'react'
 

export default function Textform(props) 
{
    const upperClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
      props.showAlert("success","Text has been converted to uppercase!")

    }
     
    const lowerClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("success","Text has been converted to lowercase!")

  }
  const clearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("success","Text has been cleared!")

}
    const handleOnChage=(event)=>{
        setText(event.target.value)
        
        
    }

    const handleCopy=()=>
    {
     var text= document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("success","Text has been coppied to clipboard!")

    }

    let SpaceRemove=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("success","Extra spaces has been removed!")

    }
    
    const [text, setText] = useState("Enter the text");

  
  return (

   <>
  <div className="mb-3 my-3 " >
    <label for="mybox" className="form-label"><h2>{props.heading}</h2></label>
    <textarea className="form-control"style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8" value={text} onChange={handleOnChage}></textarea>
  </div>
  <div className="btn btn-primary mx-3" onClick={upperClick}>Change to Uppercase</div>
  <div className="btn btn-primary mx-3" onClick={lowerClick}>Change to Lowecase</div>
  <div className="btn btn-primary mx-3" onClick={clearClick}>Clear</div>
  <div className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</div>
  <div className="btn btn-primary mx-3" onClick={SpaceRemove}>Remove Extra Space</div>

  <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08*text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to the text-box to preview it"}</p>

  </div>

  </>
  
  )
}
