import React, { Component } from 'react';
import { CircularProgress, Dialog, FlatButton, GridTile } from 'material-ui';
import { GridList } from 'material-ui/GridList/index';
import Book from './Book';

import api from '../../helpers/api';
import c from './LatestArrivals.scss';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class LatestArrivalsContainer extends Component {
  state = {
    bookList: null,
    selectedBook: null
  };

  componentWillMount() {
    api.get('/latest-arrivals').then(response => {
      this.setState({
        bookList: response.items
      })
    })
  }

  handleTileClick = (book) => () => {
    window.dataLayer.push({
      "event": "latest-arrival-show"
    });

    this.setState({
      selectedBook: book
    })
  };

  handleClose = () => {
    this.setState({
      selectedBook: null
    })
  };

  render() {
    const { bookList, selectedBook } = this.state;

    return (
      <div>
        <div>
          {
            bookList ? (
              <GridList cellHeight={220}>
                {
                  bookList.map((book, i) => (
                    <GridTile
                      key={i}
                      onTouchTap={this.handleTileClick(book)}
                    >
                      <img alt={`Обкладинка до книги ${book.title}`} src={book.image} />
                    </GridTile>
                  ))
                }
              </GridList>
            ) : (
              <div className={c.loadingWrap}>
                <CircularProgress size={60} thickness={7} />
              </div>
            )
          }
        </div>
        <Dialog
          actions={[
            <FlatButton
              label="Закрити"
              primary={true}
              onClick={this.handleClose}
            />
          ]}
          modal={false}
          open={selectedBook !== null}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle}
        >
          <Book book={selectedBook} onBack={this.handleClose} />
        </Dialog>
      </div>
    )
  }
}

export default LatestArrivalsContainer;
