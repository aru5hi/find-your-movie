import React from 'react';
import MainComponent from './components/Main/Main';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <MainComponent/>
    </div>
    </Provider>
  );
}

export default App;
