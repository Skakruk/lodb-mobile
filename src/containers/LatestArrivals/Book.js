import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { hideBar, showBar } from '../../actions/app';

import c from './LatestArrivals.scss';

class BookContainer extends Component {
  componentWillMount() {
    if (!this.props.book) {
      this.props.history.push('/latest-arrivals');
    }
  }

  render() {
    const { book } = this.props;

    return (
      <div className={c.container}>
        <img className={c.articleCover}
             src={book.image}
             alt={`Обкладинка до книги ${book.title}`} />
        <h1>{book.title}</h1>
        <div className={c.articleContent}>
          {book.legend}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  showBar,
  hideBar
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(BookContainer));
