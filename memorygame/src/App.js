import React from "react";
import AlbumImg from "./components/Album";
import Wrapper from "./components/Wrapper";
import albums from "./albums.json";
import "./App.css";

function App() {
    return (
        <Wrapper>
            <h1 className="title">Friends List</h1>
            <Album
                image={friends[0].image}
            />
        </Wrapper>
    );
}

export default App;
