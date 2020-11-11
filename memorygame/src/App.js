import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import AlbumImg from "./components/Album";
import albums from "./albums.json";
// import "./App.css";

class App extends Component {
    // Setting this.state.albums to the albums json array
    // this.state.clicked is a set that keeps track of what albums have been clicked
    // this.state.highScore keeps track of the high score
    state = {
        albums: albums,
        clicked: new Set(),
        message: "Click an image to begin",
        highScore: 0
    };

    validateClick = id => {
        // Finds the album with specific id in this.state.albums
        const selectAlbum = this.state.albums.find(album => album.id === id);
        // Set this.state.clicked set includes the selected album, end game since it has been selected before
        if (this.state.clicked.has(selectAlbum)) {
            // End game and set this.state to include a new set that is empty to start a new game
            // Set message to display you guessed incorrect
            this.setState(state => ({
                ...state,
                clicked: new Set(),
                message: "You guessed incorrect!"
            }))
        } else {
            // If this.state.clicked doesn't include the slected album, add the album to the clicked set 
            // Update high score to reflect either the number of correct albums selected or the existing high score, whichever is larger
            // Set mesage to display you guessed correct
            this.setState(state => ({
                ...state,
                clicked: state.clicked.add(selectAlbum),
                highScore: Math.max(state.clicked.size, state.highScore),
                message: "You guesed correct!"
            }))
        }
    };

    // Map over this.state.album and render a album image component for each album object
    render() {
        return (
            <Wrapper>
                <Navbar title="Music Album Memory Game" message={this.state.message} score={this.state.clicked.size} highScore={this.state.highScore} />
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
