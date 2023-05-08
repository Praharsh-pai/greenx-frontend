import React from 'react'
import styles from '../css/Loading.css'
const Loading = () => {
  return (
    <div className="containerload">
    <div className="tree">
      <div className="branch" style={{'--x':0}}>
        <span style={{'--i':0}}></span>
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
      </div>
      <div className="branch" style={{'--x':1}}>
        <span style={{'--i':0}}></span>
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
      </div>
      <div className="branch" style={{'--x':2}}>
        <span style={{'--i':0}}></span>
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
      </div>
      <div className="branch" style={{'--x':3}}>
        <span style={{'--i':0}}></span>
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
      </div>
      <div className="stem">
      <span style={{'--i':0}}></span>
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
      </div>
      <span className="shadow"></span>
    </div>
  </div>
  )
}

export default Loading