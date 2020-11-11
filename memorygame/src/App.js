import React, { Component } from "react";
import AlbumImg from "./components/Album";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import albums from "./albums.json";
// import "./App.css";

class App extends Component {
    // Setting this.state.albums to the albums json array
    state = {
        albums: albums,
        clicked: new Set(),
        highScore: 0
    };

    validateClick = id => {
        // Filter this.state.albums for albums with an id not equal to the id being removed
        const selectAlbum = this.state.albums.find(album => album.id === id);
        // Set this.state.friends equal to the new friends array
        if (this.state.clicked.has(selectAlbum)) {
            // End game
            this.setState(state => ({
                ...state,
                clicked: new Set(),
                // Add logic for clicked correct/incorrect
            }))
        } else {
            this.setState(state => ({
                ...state,
                clicked: state.clicked.add(selectAlbum),
                highScore: Math.max(state.clicked.size, state.highScore)
                // Add logic for clicked correct/incorrect
            }))
        }
    };

    // Map over this.state.album and render a album image component for each album object
    render() {
        return (
            <Wrapper>
                <Title>Music Album Memory Game</Title>
                <span>Score: {this.state.clicked.size}</span>
                <span>Top Score: {this.state.highScore}</span>
                {this.state.albums.map(album => (
                    <AlbumImg
                        // removeFriend={this.removeFriend}
                        key={album.id}
                        name={album.name}
                        image={album.image}
                        onClick={() => this.validateClick(album.id)}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
