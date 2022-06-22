import React from "react";
import './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
            name: props.name,
            src: props.src,
            iwidth: props.iwidth,
            color: "brown",
            idisplay: "inline",
            handleClick: this.handleClick
        };
    }

    handleClick() {
        if (!this.state.flipped) {
            this.setState({flipped: true});
            this.flip();
        }
    }

    flip() {
        this.setState({color: "black", idisplay: "none"})
    }

    render() {
        return (
            <div className="Tile" style={{backgroundColor: this.state.color, width: (1 / this.state.iwidth * 100) - .5 + "%"}} onClick={() => this.handleClick()}>
            <img src={this.state.src} alt="Missing YOUR FACE" style={{display: this.state.idisplay}} onClick={() => this.handleClick()}/>
            </div>
        )
    }
}

export default Tile