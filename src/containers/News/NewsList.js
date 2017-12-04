import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardActions, CardText, CardTitle, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import TimeAgo from 'timeago-react';

import { latestNews } from '../../actions/news';

import c from './News.scss';

class NewsContainer extends Component {
  componentWillMount() {
    this.props.latestNews();
  }

  handleTransition = (id) => () => {
    this.props.history.push(`/news/${id}`);
  };

  render() {
    const { articles, latestNewsIds } = this.props;

    return (
      <div className={c.newsContainer}>
        {
          latestNewsIds.ids.length > 0 ?
            latestNewsIds.ids
              .map(id => articles.list[id])
              .map(news => {
                let title = (
                  <CardTitle
                    title={news.title}
                    subtitle={(
                      <TimeAgo
                        datetime={news.publishedAt}
                        locale='uk'
                      />
                    )}
                  />
                );

                let link = null;

                if (['news', 'article'].includes(news.type)) {
                  link = <FlatButton
                    onTouchTap={this.handleTransition(news.id)}
                    label="Читати далі"
                  />;
                } else if (news.type === 'reference') {
                  link = <a rel="noopener" href={news.content} target="_blank">
                    <FlatButton label="Читати далі" />
                  </a>;
                }

                return (
                  <Card key={news.id} className={c.newsCard}>
                    {
                      news.cover
                        ? (
                          <CardMedia overlay={title}>
                            <img src={news.cover}
                                 alt={`Головне зображення для статті ${news.title}`}
                            />
                          </CardMedia>
                        )
                        : title
                    }
                    <CardText className={c.newsIntro}>{Parser(news.introtext)}</CardText>
                    <CardText className={c.newsContent} expandable={true}>
                      {Parser(news.content)}
                    </CardText>
                    <CardActions>{link}</CardActions>
                  </Card>
                )
              }) : null
        }
        {articles.loading && ( <div className={c.newsLoading}>
          <span>Завантажуємо новини</span>
          <CircularProgress size={60} thickness={7} />
        </div>)
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  latestNews
}, dispatch);

const mapStateToProps = state => ({
  articles: state.articles.list,
  latestNewsIds: state.articles.latest
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsContainer));
