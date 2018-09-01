import React from 'react'

const Cell = ({cell, checkPairs}) => {
  return <div onClick={() => checkPairs(cell)} className="cell column">
    {cell.isVisible && cell.value}
  </div>
}

export default Cell