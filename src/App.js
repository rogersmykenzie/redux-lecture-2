import React from "react";
import { Provider } from "react-redux";
import CharacterList from "./components/CharacterList";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {/* <Router> */}
      <div className="App">
        <CharacterList />
      </div>
      {/* </Router> */}
    </Provider>
  );
}

export default App;
