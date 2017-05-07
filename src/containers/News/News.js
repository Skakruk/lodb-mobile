import React, {Component} from 'react';
import {connect} from "react-redux";
import TimeAgo from 'timeago-react';
import injectSheet from 'react-jss';
import IconButton from 'material-ui/IconButton';
import CircularProgress from 'material-ui/CircularProgress';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Share from 'material-ui/svg-icons/social/share';
import {bindActionCreators} from "redux";
import styles from './NewsStyles';
import {articleById} from '../../actions/news';
import {showBar, hideBar} from '../../actions/app';
import Parser from 'html-react-parser';

class NewsComponent extends Component {
    context = {
        router: React.PropTypes.object
    };

    componentWillMount() {
        const {params: {id}, articles} = this.props;
        this.props.hideBar();
        if (!articles.list[id]) {
            this.props.articleById(id);
        }
    }

    goBack = () => {
        this.props.showBar();
        this.props.router.push(`/`);
    };

    render() {
        const {params: {id}, articles, classes} = this.props;
        const activeArticle = articles.list[id];
        return (<div>
            {
                articles.loading && (<div className={classes.loading}><CircularProgress size={60} thickness={7}/></div>)
            }

            {
                activeArticle ? (
                    <div>
                        <div className={classes.articleHeader}>
                            <div className={classes.articleHeaderActions}>
                                <IconButton onTouchTap={this.goBack}>
                                    <ArrowBack color={'#fff'}/>
                                </IconButton>
                                <IconButton>
                                    <Share color={'#fff'}/>
                                </IconButton>
                            </div>
                            {
                                activeArticle.cover ?
                                    ( <img className={classes.articleCover}
                                           src={activeArticle.cover}
                                           alt={`Головне зображення для статті ${activeArticle.title}`}/>) :
                                    null
                            }
                        </div>
                        <div className={classes.container}>
                            <h1>{activeArticle.title}</h1>
                            <h3><TimeAgo
                                datetime={activeArticle.publishedAt}
                                locale='uk'/></h3>
                            <div className={classes.articleContent}>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(NewsComponent));