import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;

    // fetch('http://127.0.0.1:3080/api/getItems')
    fetch('files/items.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let newData = []
        data.forEach(e => newData.push({
          id: e.Item_Id,
          title: e.TypeItem,
          author: e.Country,
          price: e.Value,
          image: `./img/${e.TypeItem}.png`
        }));
        return (newData);
      })
      .then(data => setBooks(data));
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <div>
        <Menu />
        <Filter />
        {/* <Grid container spacing={2} sx={{justifyContent: 'space-between'}}> */}
        <Grid container spacing={2}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Grid>
      </div>
    );
  }
}

export default App;
