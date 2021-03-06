/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';

class Restaurants extends Component {
  render() {
    var list = this.props.foods.length === 0 ? 
        'empty' :
        (this.props.foods).map(([categories, name, key, photo, price, rating, reviewers, lat, long ]) => {
          return <ListItem key={key}>
                  <Titles>{price} <b>{name}</b></Titles>
                  <Titles footer>{rating}/5 by {reviewers} foodies</Titles>
                  <img style={{ width: '100%', height: '100%' }} src={photo[0]} />
                  <Titles footer margin>
                    <Go onClick={() => this.props.select(name, [lat, long])}>select</Go>
                    <div>{categories.join(' | ')}</div>
                  </Titles>
                </ListItem>
      });

    return (
      <div>
        <ListStyle>
          {list}
        </ListStyle>
        <Arrow>&#8594;</Arrow>
      </div>
    );
  }
}

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-bottom: 80em;
  scroll-snap-type: y proximity;
`

const ListItem = styled.div`
  font-size: 2em;
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 2em;
  scroll-snap-stop: always;
  scroll-snap-align: start;
  background-color: ghostwhite;
  scroll-margin: 5vh;
  padding-top: 5vh;
`

const Titles = styled.div`
  color: ${props => props.footer ? "grey" : "chocolate"};
  font-size: ${props => props.footer ? "1.2em" : "1.4em"};
  line-height: ${props => props.footer ? "1.2em" : "1em"};
  margin-bottom: ${props => props.margin ? "2em" : "0em"};
  margin-top: ${props => props.footer ? ".3em" : "0em"};
  font-weight: 400;
  display: ${props => props.footer ? "flex" : "initial"};;
`

const Go = styled.button`
  font-size: .9em;
  height: 1.2em;
  border: 2px solid grey;
  border-radius: 10px;
  margin-right: .5em;
`

const Arrow = styled.span`
  font-size: 50px;
  position: absolute;
  top: 5vh;
  left: 0;
  z-index: 1;
`

export default Restaurants