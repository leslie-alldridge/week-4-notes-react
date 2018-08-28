import React from 'react'
import Circle from './Circle'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      circles: [
        {
          cx: props.width / 2,
          cy: props.height / 2,
          level: 0,
          r: 256
        }
      ]
    }
  }

  render() {
    
    return (
        <svg width={this.props.width} height={this.props.height}>
          {
            this.state.circles.map((circle, i) => {
              return <Circle key={'circle' + i} cx={circle.cx} cy={circle.cy} r={circle.r} h={this.handleClick} level={circle.level} />
              
            })
          }
        </svg>
      

    )
  }
}

export default App