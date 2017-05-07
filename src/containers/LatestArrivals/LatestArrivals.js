import React, {Component} from 'react';
import injectSheet from 'react-jss';
import {getLatest} from '../../actions/latestArrivals';
import {
    CircularProgress, GridTile
} from "material-ui";
import styles from './LatestArrivalsStyles'
import {GridList} from "material-ui/GridList/index";
import Book from "./Book";

class LatestArrivalsContainer extends Component {
    state = {
        bookList: null,
        selectedBook: null
    };

    componentWillMount() {
        getLatest().then(response => {
            this.setState({
                ...this.state,
                bookList: response.items
            })
        })
    }

    handleTileClick = (book) => () => {
        this.setState({
            ...this.state,
            selectedBook: book
        })
    };

    handleBackBtn = () => {
        this.setState({
            ...this.state,
            selectedBook: null
        })
    };

    render() {
        const {bookList, selectedBook} = this.state;
        const {classes} = this.props;
        return (
            <div>
                {
                    selectedBook ? (
                        <Book book={selectedBook} onBack={this.handleBackBtn}/>
                    ) : (
                        <div>
                            <h1>Нові надходження</h1>

                            {
                                bookList ? (
                                    <GridList cellHeight={220}>
                                        {
                                            bookList.map((book, i) => (
                                                <GridTile key={i} onTouchTap={this.handleTileClick(book)}>
                                                    <img alt={`Обкладинка до книги ${book.title}`} src={book.image}/>
                                                </GridTile>
                                            ))
                                        }
                                    </GridList>) :
                                    <div className={classes.loadingWrap}><CircularProgress size={60} thickness={7}/></div>
                            }
                        </div>
                    )
                }

            </div>
        )
    }
}

export default injectSheet(styles)(LatestArrivalsContainer);