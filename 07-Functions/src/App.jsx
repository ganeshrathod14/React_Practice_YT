import React from 'react'

const App = () => {

  const scrolling = (val) => {

    if( val > 0)
    {
      console.log("Sidha Scrolling")
    }
    else
    {
      console.log("Ulta Scrolling")
    }

  }

  return (
    <>
    <div onWheel={(elem)=> {
        scrolling(elem.deltaY)
    }}>
      <div className="page1">Page 1</div>
      <div className="page2">Page 2</div>
      <div className="page3">Page 3</div>
    </div>

    </>
  )
}

export default App