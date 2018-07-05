import React, { Component } from 'react';
import './worldcup.css';


class WorldCup extends Component {
    render() {
        const {title, img, desc} = this.props; 
        const players = this.props.players.map((x, i) => (
            <li key={i}>{x}</li>
            ));
        return (
        <div className="team-section">
            <div className="team-img">
                <img    
                src={img}
                alt="England shirt"
                />
            </div>
            <div className="team-content">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="team-players">
                    <ul>
                        {players}
                    </ul>
                </div>
            </div>
        </div>
        );
    }
};

export default WorldCup;