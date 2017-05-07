import React, {Component} from 'react';
import {IconButton} from "material-ui";
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import injectSheet from 'react-jss';
import styles from './LatestArrivalsStyles'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {hideBar, showBar} from "../../actions/app";

class BookContainer extends Component {
    context = {
        router: React.PropTypes.object
    };

    componentWillMount() {
        this.props.hideBar();
        if (!this.props.book) {
            this.props.router.push('/latest-arrivals');
        }
    }

    goBack = () => {
        this.props.showBar();
        this.props.onBack();
    };

    render() {
        const {classes, book} = this.props;
        return (
            <div>
                <div className={classes.articleHeader}>
                    <div className={classes.articleHeaderActions}>
                        <IconButton onTouchTap={this.goBack}>
                            <ArrowBack color={'#fff'}/>
                        </IconButton>
                    </div>
                    <img className={classes.articleCover}
                         src={book.image}
                         alt={`Обкладинка до книги ${book.title}`}/>
                </div>
                <div className={classes.container}>
                    <h1>{book.title}</h1>
                    <div className={classes.articleContent}>
                        {book.legend}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showBar,
    hideBar
}, dispatch);

export default connect(null, mapDispatchToProps)(injectSheet(styles)(BookContainer));