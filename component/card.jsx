import React from 'react'
import memory from '../src/assets/images/icon-memory.svg'
import reaction from '../src/assets/images/icon-reaction.svg'
import verbal from '../src/assets/images/icon-verbal.svg'
import visual from '../src/assets/images/icon-visual.svg'

const Card = () => {
  return (
    <div className="card">
        <div className="col1">
            <h2>Your Result</h2>
            <div className="circle">
                <h2>76</h2>
                <p>of 100</p>
            </div>
            <h1>Great</h1>
            <p>You scored higher than 65% of <br /> the people who have taken <br /> these tests.</p>
        </div>
        <div className="col2">
            <div className="tittle">
            Summary
            </div>
            <ul>
                <li>
                    <div className="part">
                    <img src={reaction} alt="reaction_icon" />
                    <h2>Reaction</h2>
                    </div>
                    <h2>80 / 100</h2>
                </li>
                <li>
                    <div className="part">
                    <img src={memory} alt="memory_icon" />
                    <h2>Memory</h2>
                    </div>
                    <h2>92 / 100</h2>
                </li>
                <li>
                    <div className="part">
                    <img src={verbal} alt="verbal_icon" />
                    <h2>Verbal</h2>
                    </div>
                    <h2>61 / 100</h2>
                </li>
                <li>
                    <div className="part">
                    <img src={visual} alt="visual_icon" />
                    <h2>Visual</h2>
                    </div>
                    <h2>72 / 100</h2>
                </li>
            </ul>
            <button>Continue</button>
        </div>
    </div>
  )
}

export default Card
