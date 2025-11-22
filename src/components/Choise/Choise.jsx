import React, { Component } from 'react';
import StickerList from '../StickerList/StickerList';
class Choice extends Component {
  render() {
    const { stickers, onSelect } = this.props;
    return <StickerList stickers={stickers} onSelect={onSelect} />;
  }
}
export default Choice;