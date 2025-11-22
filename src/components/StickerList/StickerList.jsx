import React, { Component } from 'react';
import styled from 'styled-components';
import Sticker from '../Sticker/Sticker';
const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
`;
class StickerList extends Component {
  render() {
    const { stickers = [], onSelect } = this.props;
    return (
      <Wrapper>
        {stickers.map((s) => (
          <Sticker key={s.label} img={s.img} label={s.label} onSelect={onSelect} />
        ))}
      </Wrapper>
    );
  }
}
export default StickerList;