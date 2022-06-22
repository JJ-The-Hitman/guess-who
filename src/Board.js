import React from "react";
import Tile from "./Tile.js"
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
            iheight: props.iheight,
            iwidth: props.iwidth
        };
    }

    render() {
        var board = [];
        var row = [];
        for (var y = 0; y < this.state.iheight; y++) {
            row = []
            for (var x = 0; x < this.state.iwidth; x++) {
                row.push(<Tile
                    key={"" + x + "," + y}
                    src="https://cdn.discordapp.com/attachments/891716034942353448/988849528327262248/Idiot1.png"
                    iwidth={this.state.iwidth}
                />);
            }
            board.push(<div className="Row" key={y} style={{height: (1 / this.state.iheight * 100) - .5 + "%"}}>{row}</div>);
        }
        return (
            <div className="Board">{board}</div>
        );
    }
}

export default Board