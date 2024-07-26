import Accordion from "./components/Accordion"

function App() {

  return (
    <>
      <div className="flex justify-center gap-5 w-full">
        
        <div 
        className="font-play text-3xl w-[30%] leading-relaxed"
        >
          Frequently Asked Questions
        </div>

        <div 
        className="font-titillium w-[60%] flex gap-10 flex-col"
        >
            < Accordion 
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat asperiores optio delectus deserunt expedita cupiditate sed, maxime consectetur perferendis corporis, quibusdam obcaecati nemo? Iure, repellendus fugiat deleniti eveniet ab quam!'}
            />

            < Accordion
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestias.'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere mollitia laborum iste eligendi saepe consectetur incidunt ratione voluptate numquam minus'
            />
            < Accordion 
              title='Lorem, ipsum dolor.'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
            < Accordion 
              title='Lorem ipsum dolor sit amet.'
              content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur ea alias, omnis ut id eveniet nemo temporibus ipsam sequi, nulla assumenda blanditiis ipsum, enim excepturi optio necessitatibus culpa consequatur ipsa.
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed!'
            />
            < Accordion 
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed!'
            />

        </div>
      </div>
    </>
  )
}

export default App
