import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      board: createBoard(4),
      visibilityCount: []
    }
   
    this.checkPairs = this.checkPairs.bind(this);
    this.getBoardWithCellVisibility = this.getBoardWithCellVisibility.bind(this)
    this.checkContents = this.checkContents.bind(this);
  }

  checkPairs(cell) {
    console.log('checking a cell');
    const isVisible = true
    console.log(cell);
    this.setState({
        board:     this.getBoardWithCellVisibility(this.state.board, cell, isVisible),
        visibilityCount: this.checkContents(cell)
        //this.state.visibilityCount.push(cell) 
    })  
    console.log(this.state);
    
      // const isHidden = false
      // this.setState({
      //   selectedCells: this.updateSelectedCells(this.state.selectedCells, cell),
      //   board: this.getBoardWithCellVisibility(this.state.board, cell, isHidden)
      // })
      // this.hideUnmatchedCells()
    }
   
    

    checkContents(cell){
      if(this.state.visibilityCount.length > 0) {
        if(this.state.visibilityCount.length == 2){
          console.log('you already picked two');
          // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% left off here
        }
        if (this.state.visibilityCount[0].value == cell.value) return []
      }
      console.log(cell);
      return [...this.state.visibilityCount, cell]
    }
  
  getBoardWithCellVisibility(board, cell, value){
    console.log('get board' + value)
    return board.map(row => {
      return row.map(c => {
        const newCell = {
          id: c.id,
          value: c.value,
          isVisible: value
        }
        return c.id === cell.id ? newCell : c
      })
    })
    
  }

  

  render () {
    const width = this.props.width
    const board = this.state.board
    const rowHeight = width / board.length

    return <div
      style={{width: width, height: width}}
      className="column board has-text-centered">

      {board.map((row, rid) => {
        // render a row (of cells) on the board
        return <div key={'row' + rid}
          className="row columns"
          style={{height: rowHeight}}>
          {row.map(cell => {
            // render each cell within a row, using the Cell.jsx component
            return <Cell key={cell.id} cell={cell} checkPairs={this.checkPairs}/>
          })}
        </div>
      })}
    </div>
  }
}

export default Board
