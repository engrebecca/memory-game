# Music Album Memory Game

## Description
Test your memory and see how many music albums you can click without repeating yourself! Music Album Memory Game is a fun app that challenges users to remember what images they have already clicked. A point is given for every music album that is clicked which hasn't been selected before. Try to get all 12 or set a new top score.

## Features
* React is used to create the application and the user interface components
    * There are separate components for the wrapper, container, navbar, jumbotron, album, and footer
    * App.js is a class based stateful component that imports all the other components
    * As a stateful component, App.js provides the logic of the game. It tracks which music albums have been selected and keeps track of the score and top score.
    * A function is used to validate a user's selection each time they click a music album


## Built With
* [React.js](https://reactjs.org/) - a front-end JavaScript library for building user interfaces and UI components
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [JSX](https://reactjs.org/docs/introducing-jsx.html) - a syntax extension to JavaScript used in React to describe whta a UI should look like
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - defines styling on the HTML page
* [Bootstrap](https://getbootstrap.com/) - CSS framework used to build mobile responsive websites
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub

## Deployed Link
[Music Album Memory Game](https://engrebecca.github.io/memory-game/) - See it online

![Music Album Memory Game](assets/memory_game.gif)

## Code
The below code demonstrates how React combines all the separate components to render what a user sees as a complete functional application

        render() {
            return (
                <Wrapper>
                    <Navbar title="Music Album Memory Game" message={this.state.message} score={this.state.clicked.size} highScore={this.state.highScore} />
                    <Jumbotron>Jumbotron</Jumbotron>
                    <Container>
                        {this.state.albums.map(album => (
                            <AlbumImg
                                key={album.id}
                                name={album.name}
                                image={album.image}
                                onClick={() => this.validateClick(album.id)}
                            />
                        ))}
                    </Container>
                    <Footer text="Music Album Memory Game"></Footer>
                </Wrapper>
            );
        }

## Credits
[Unsplash](https://unsplash.com/photos/W8BRzoUTHNA) - image in jumbotron

## License
This project is licensed under the MIT license.

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)
