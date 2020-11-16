import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives = ["mummy", "dady", "bhai", "siso"];
        return (
            <div id="main">
                <ol key= "relativeList">
                {
                    relatives.map((relative , idx) =>(
                        <li key={"relativeListItem" + (idx +1)}>{relatives}</li>
                    ))
                }
                </ol>
            </div>
        );
    }
}


export default App;
