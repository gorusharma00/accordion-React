import React from "react";

function Accordion({title, content}) {
  const toggle = (e) => {

    const accordionItem = e.currentTarget;
    const content = accordionItem.querySelector('.accordion-content')
    const icon = accordionItem.querySelector('i');


    const allAccordions = document.querySelectorAll('.accordion-item');

    allAccordions.forEach((item) => {
      if(item !== accordionItem){
        const itemContent = item.querySelector('.accordion-content')
        const itemIcon = item.querySelector('i');
        itemContent.style.display = 'none';
        itemIcon?.classList.remove('bx-minus-circle')
        itemIcon?.classList.add('bx-plus-circle');
      }
    });

    if(content.style.display === 'none' || content.style.display === ''){
      content.style.display = 'block';
      icon?.classList.remove('bx-plus-circle')
      icon?.classList.add('bx-minus-circle');
    }else{
      content.style.display = 'none';
      icon?.classList.remove('bx-minus-circle');
      icon?.classList.add('bx-plus-circle');
    }
    
  }
  return (
    <>
      <div 
      className="accordion-item flex gap-3 flex-col cursor-pointer border-b-2 border-[#B6B8C4] border-solid pb-4 "
      onClick = {toggle}
      >
        <div className="flex justify-between text-2xl font-semibold">
          <h3>{title}</h3>
          <i className="bx bx-plus-circle text-xl"></i>
        </div>

        <div 
        className="accordion-content hidden"

        >
          <p className="text-base font-medium">
            {content}
          </p>
        </div>

      </div>
    </>
  );
}

export default Accordion;
