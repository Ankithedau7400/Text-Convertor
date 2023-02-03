// import React,{useState} from "react"
// import { withRouter } from "react-router-dom";

export default function About(props) {
//     const [myStyle, setmyStyle] = useState({   
//          color : 'black',
//     backgroundColor: 'white'
// })


  let myStyle = {
    color:props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
  
  }
// const [btntext, setbtntext] = useState("Enable Dark Mode")
  //  const toggleStyle = ()=>{
  //      if(myStyle.color === 'black'){
  //          setmyStyle({
  //           color : 'white',
  //           border: '1px solid white',
  //           backgroundColor: 'black'
  //          })
  //          setbtntext("Enable light Mode")

  //      }
  //      else{
  //       setmyStyle({
  //           color : 'black',
  //           backgroundColor: 'white'
  //          })
  //          setbtntext("Enable Dark Mode")
  //      }
  //  } 
  return (
    <div>
      <div className="container" style = {{color: props.mode ==='dark'?'white':'#042743'}}>
          <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample" style = {myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style = {myStyle}
              >
               <strong> Analzye your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style = {myStyle}>
                TextUtils gives you a way to nanlyze your text quickly and efficiently. Be it word count, character count or reverse text.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style = {myStyle}
              >
               <strong> Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style = {myStyle}>
                TextUtils i sa free character counter tools that provides instant character count and word count 
                statistics for a given text. TextUtills reports the number of words and charactes. Thus it is 
                suitable for writng text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style = {myStyle}
              >
                <strong>Browser Comatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style = {myStyle}>
               This word counter software works in any web Browsersuch as Chrome ,Firefox, Internet Explore,
               Safari, Opera. It suits to count character in facebook,blog,books,excel document,essays,etc.
              </div>
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
  );
}
