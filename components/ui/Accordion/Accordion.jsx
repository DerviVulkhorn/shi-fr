import "./AccordionStyle.css"
import { useState } from "react"

function Accordion({ title, content }){
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordion(){
        
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return(
      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
          {title}
        </div>
        {isOpen && (<div className="accordion-content">{content}</div>)}
      </div>
    )
}

export default Accordion;