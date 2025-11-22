import React, { Component } from 'react';
import styled from 'styled-components';
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  width: 96px;
  transition: transform .12s, box-shadow .12s;
  &:hover { transform: translateY(-3px); box-shadow: 0 6px 14px rgba(0,0,0,.08); }
`;
const Img = styled.img`
  width: 64px;
  height: 64px;
`;
const Label = styled.span`
  font-size: 13px;
  color: #222;
  text-align: center;
`;
class Sticker extends Component {
  handleClick = () => {
    const { label, onSelect } = this.props;
    if (onSelect) onSelect(label);
  };
  render() {
    const { img, label } = this.props;
    return (
      <Button onClick={this.handleClick} aria-label={label}>
        <Img src={img} alt={label} />
        <Label>{label}</Label>
      </Button>
    );
  }
}
export default Sticker;