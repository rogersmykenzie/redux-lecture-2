import React from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CharacterList />
      </div>
    </Provider>
  );
}

export default App;
