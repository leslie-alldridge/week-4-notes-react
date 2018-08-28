import React from 'react'
import { getColor } from '../color'

class Circle extends React.Component {
  constructor(props) {
    super(props)
    

    this.state = {
        circles: []
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

    handleMouseOver() {
    if(!this.state.circles.length)
        this.setState({
            circles: [
                {
                    cx: this.props.cx - this.props.r,
                    cy: this.props.cy,
                    level: this.props.level + 1,
                    r: this.props.r/2,
                    level: 1
                },
                {
                    cx: this.props.cx + this.props.r,
                    cy: this.props.cy,
                    level: this.props.level + 1,
                    r: this.props.r/2,
                    level: 2
                },
                {
                    cx: this.props.cx,
                    cy: this.props.cy - this.props.r,
                    level: this.props.level + 1,
                    r: this.props.r/2,
                    level: 3
                },
                {
                    cx: this.props.cx,
                    cy: this.props.cy + this.props.r,
                    level: this.props.level + 1,
                    r: this.props.r/2,
                    level: 4
                }
            ]
        })
    }

    render() {
        let rand = Math.floor(Math.random() * 11);  
        const color = getColor(rand)
    return (
        <g>
            <circle fill={color} cx={this.props.cx} cy={this.props.cy} r={this.props.r} 
            onMouseOver={this.handleMouseOver}  />
            {
                this.state.circles.map((circle, i) => {
                    return <Circle key={'circle' + i} cx={circle.cx} cy={circle.cy} r={circle.r} fill={color} />
                })
            }
    
        </g>
    
    )}
}

export default Circle