import './index.css';
import  {ClassRoom}  from './pages/ClassroomPage';
import Header from './components/HeaderComponent';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import TodoPage  from './pages/TodoPage';
import React from 'react'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer, compose (
  applyMiddleware(
    thunk, logger
  )
))
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/rooms" >
              <ClassRoom />
          </Route>
          <Route exact path="/todo">
                <TodoPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
