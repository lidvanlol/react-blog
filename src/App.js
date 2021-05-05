import React from "react";
import { Provider } from "react-redux";
import Blog from "./components/Blog";
import { Store } from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Blog />
      </div>
    </Provider>
  );
}

export default App;
