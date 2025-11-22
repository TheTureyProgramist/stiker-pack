import './App.css';
import styled from 'styled-components';
import { Component } from 'react';
import Choice from './components/Choise/Choise';
import stickersData from './data/stickers.json';
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 24px;
`;
const SelectedText = styled.div`
  margin-top: 18px;
  font-weight: 600;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: '' };
  }
  handleSelect = (name) => {
    this.setState({ selected: name });
  };
  render() {
    const { selected } = this.state;
    return (
      <Container className="App">
        <Choice stickers={stickersData} onSelect={this.handleSelect} />
        <SelectedText>
          {selected ? `Вибраний стiкер: ${selected}` : 'Не обрано!'}
        </SelectedText>
      </Container>
    );
  }
}
export default App;