import React from 'react';

import api from '../../helpers/api';
import { Dialog, GridList, GridTile } from 'material-ui';

import c from './LostItems.scss';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
  },
};

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};


class LostItems extends React.Component {
  state = {
    items: [],
    selectedItem: null
  };

  componentDidMount() {
    api.get(`/lost-items`).then(response => {
      this.setState({
        items: response,
      })
    })
  }

  handleItemClick = (item) => () => {
    window.dataLayer.push({
      "event": "lost-item-show"
    });

    this.setState({
      selectedItem: item,
    })
  };

  handleClose = () => {
    this.setState({
      selectedItem: null
    })
  };

  render() {
    return (
      <div>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          {this.state.items.map((tile) => (
            <GridTile
              key={tile.id}
              onClick={this.handleItemClick(tile)}
            >
              <img alt="Залишена річ" src={tile.img} />
            </GridTile>
          ))}
        </GridList>

        <Dialog
          modal={false}
          open={this.state.selectedItem !== null}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle}
        >
          <img
            onClick={this.handleClose}
            className={c.modalImg}
            alt="Залишена річ у повний розмір"
            src={this.state.selectedItem && this.state.selectedItem.img}
          />
        </Dialog>
      </div>
    )
  }
}

export default LostItems;
