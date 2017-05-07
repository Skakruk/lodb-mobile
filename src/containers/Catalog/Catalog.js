import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import injectSheet from 'react-jss';
import CircularProgress from 'material-ui/CircularProgress';
import {termAutocomplete, catalogInit, performSearch} from '../../actions/catalog';
import {Tabs, Tab} from 'material-ui/Tabs';
import styles from './CatalogStyles'

class CatalogContainer extends Component {
    state = {
        authorsSource: [],
        titlesSource: [],
        terms: {
            author: "",
            title: ""
        },
        results: {
            loading: false,
            list: null
        }
    };

    chlibCookies = [];

    componentWillMount() {
        this.setSearchDB('books');
    }

    setSearchDB(db) {
        this.setState({
            ...this.state,
            db
        });
        catalogInit(db)
            .then(response => {
                this.chlibCookies = response.cookie;
            })
    }

    handleUpdateAuthorInput = (value) => {
        this.setState({
            ...this.state,
            terms: {
                ...this.state.terms,
                author: value
            }
        });
        if (value.length > 0 && this.state.terms.title.length === 0) {
            termAutocomplete('author', value, this.chlibCookies)
                .then(response => {
                    this.setState({
                        ...this.state,
                        authorsSource: response.map(itm => itm.value)
                    })
                })
        }
    };

    handleChangeType = (value) => {
        this.setState({
            ...this.state,
            terms: {
                author: "",
                title: ""
            }
        }, () => {
            this.setSearchDB(value);
        })
    };

    handleUpdateTitleInput = (value) => {
        this.setState({
            ...this.state,
            terms: {
                ...this.state.terms,
                title: value
            }
        });
        if (value.length > 0 && this.state.terms.author.length === 0) {
            termAutocomplete('title', value, this.chlibCookies)
                .then(response => {
                    this.setState({
                        ...this.state,
                        titlesSource: response.map(itm => itm.value)
                    })
                })
        }
    };

    handleSearch = () => {
        this.setState({
            ...this.state,
            results: {
                loading: true,
                total: 0,
                list: null
            }
        });
        performSearch(
            {
                ...this.state.terms,
                db: this.state.db
            }, this.chlibCookies).then(response => {
            this.setState({
                ...this.state,
                results: {
                    loading: false,
                    total: response.total,
                    list: response.items
                }
            })
        })

    };

    render() {
        const {results, authorsSource, titlesSource, terms} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <Tabs
                    onChange={this.handleChangeType}
                >
                    <Tab label="Книжки" value="books"></Tab>
                    <Tab label="Статті" value="articles"></Tab>
                    <Tab label="Диски" value="discs"></Tab>
                </Tabs>
                <div className={classes.fieldSet}>
                    <AutoComplete
                        dataSource={authorsSource}
                        onUpdateInput={this.handleUpdateAuthorInput}
                        floatingLabelText="Автор"
                        filter={() => true}
                        fullWidth={true}
                        searchText={terms.author}
                    />
                    <AutoComplete
                        dataSource={titlesSource}
                        onUpdateInput={this.handleUpdateTitleInput}
                        floatingLabelText="Назва"
                        filter={() => true}
                        fullWidth={true}
                        searchText={terms.title}
                    />
                </div>
                <RaisedButton disabled={results.loading} onTouchTap={this.handleSearch} label="Шукати" primary={true}
                              fullWidth={true}/>
                <div className={classes.resultsContainer}>
                    {
                        results.list ? (
                            results.total > 0 ?
                                (<div>
                                    <h4 className={classes.foundResultsCount}>Знайдено матеріалів: {results.total}</h4>
                                    {
                                        results.list.map((item, i) => (
                                            <div className={classes.resultItem} key={i}>
                                                <h4>{item.author}</h4>
                                                <p>{item.description}</p>
                                                {
                                                    item.source ?
                                                        <span className={classes.source}>{item.source}</span> : null
                                                }
                                                {
                                                    item.categories ? ( <div className={classes.categoriesList}>
                                                        { item.categories.slice(0, 7).map((category, i) => (
                                                            <span key={i}>{category}</span>)) }
                                                    </div>) : null
                                                }
                                            </div>
                                        ))
                                    }
                                </div>)
                                : (<div>
                                <h4>Нажаль, за даним запитом матеріалів не знайдено.</h4>
                            </div>)
                        ) : null
                    }
                </div>
                {
                    results.loading &&
                    <div className={classes.loadingWrap}><CircularProgress size={60} thickness={7}/></div>
                }
            </div>
        )

    }
}

export default injectSheet(styles)(CatalogContainer);