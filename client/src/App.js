import React, { useState } from 'react';
import { Route } from "react-router-dom";


import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      
      <Route path='/' exact component={MovieList}/>

      <Route
        path="/movies/:id"
        render={routeProps => {

          return (
            <Movie
              match={routeProps.match}
              history={routeProps.history}
              location={routeProps.location}
              key={routeProps.key}
              movies={Movie}
            />
          );
        }}
      />

    </div>
  );
};

export default App;
