import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import IconButton from 'material-ui/IconButton';
import CircularProgress from 'material-ui/CircularProgress';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Share from 'material-ui/svg-icons/social/share';
import Parser from 'html-react-parser';

import { articleById } from '../../actions/news';
import { showBar, hideBar } from '../../actions/app';

import c from './News.scss';

class NewsComponent extends Component {
  componentWillMount() {
    const { match: { params: { id } }, articles } = this.props;
    this.props.hideBar();

    if (!articles.list[id]) {
      this.props.articleById(id);
    }
  }

  componentWillUnmount() {
    this.props.showBar();
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.history.push(`/`);
  };

  render() {
    const { match: { params: { id } }, articles } = this.props;
    const activeArticle = articles.list[id];

    return (<div>
      {
        articles.loading && (
          <div className={c.loading}><CircularProgress size={60} thickness={7} /></div>)
      }

      {
        activeArticle ? (
          <div>
            <div className={c.articleHeader}>
              <div className={c.articleHeaderActions}>
                <IconButton onTouchTap={this.goBack}>
                  <ArrowBack color={'#fff'} />
                </IconButton>
                <IconButton>
                  <Share color={'#fff'} />
                </IconButton>
              </div>
              {
                activeArticle.cover ?
                  ( <img className={c.articleCover}
                         src={activeArticle.cover}
                         alt={`Головне зображення для статті ${activeArticle.title}`} />) :
                  null
              }
            </div>
            <div className={c.container}>
              <h1>{activeArticle.title}</h1>
              <h3>
                <TimeAgo
                  datetime={activeArticle.publishedAt}
                  locale='uk' />
              </h3>
              <div className={c.articleContent}>
                {Parser(activeArticle.content)}
              </div>
            </div>
          </div>
        ) : null
      }

    </div>)
  }
}

const mapStateToProps = state => ({
  articles: state.articles.list
});

const mapDispatchToProps = dispatch => bindActionCreators({
  articleById,
  hideBar,
  showBar
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsComponent));
