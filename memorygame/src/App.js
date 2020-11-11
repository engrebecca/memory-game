import React, { Component } from "react";
import AlbumImg from "./components/Album";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import albums from "./albums.json";
// import "./App.css";

class App extends Component {
    // Setting this.state.albums to the albums json array
    // this.state.clicked is a set that keeps track of what albums have been clicked
    // this.state.highScore keeps track of the high score
    state = {
        albums: albums,
        clicked: new Set(),
        highScore: 0
    };

    validateClick = id => {
        // Finds the album with specific id in this.state.albums
        const selectAlbum = this.state.albums.find(album => album.id === id);
        // Set this.state.clicked set includes the selected album, end game since it has been selected before
        if (this.state.clicked.has(selectAlbum)) {
            // End game and set this.state to include a new set that is empty to start a new game
            this.setState(state => ({
                ...state,
                clicked: new Set(),
                // Add logic for clicked correct/incorrect
            }))
        } else {
            // If this.state.clicked doesn't include the slected album, add the album to the clicked set 
            // Update high score to reflect either the number of correct albums selected or the existing high score, whichever is larger
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
