import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Row, Col } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import cards from "./cards.json"
import './App.css';

class App extends Component {
  // set state to cards json array
  state = {
    cards,
    score: 0,
    topscore: 0
  };

  resetGame = () => {
    // update topscore if applicable
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score }, function() {
        console.log(this.state.topscore);
      });
    }
    // reset all card clicked to 0
    this.state.cards.forEach(card => {
      card.clicked = 0;
    });
    // reset score to 0
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((e, i) => {
      if(e.id === id) {
        if(cards[i].clicked === 0) {
          cards[i].clicked = 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        }
        else {
          this.resetGame();
        }
      }
    });
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron score={this.state.score} topscore={this.state.topscore}/>
        {this.state.cards.map(card => (
          <ImageCard
            clickCount={this.clickCount}
            id={card.id}
            image={card.image}
            key={card.id}
          />
        ))}
      </Container>
    );
  }
}

export default App;
