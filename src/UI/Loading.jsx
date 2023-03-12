import React from 'react'

const Loading = () => {
  return (<div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
    <p className='custom-text text-aqua-50 text-2xl bg-brown-50 title'>Loading</p>
    <div className="lds-spinner title"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading