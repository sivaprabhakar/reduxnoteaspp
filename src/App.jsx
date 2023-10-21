import React from 'react';
import SideBar from './components/SideBar';
import Notes from './components/Notes';
import { Provider } from 'react-redux';
import { store } from './store';
import NotesArea from './components/NotesArea';

function App() {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <SideBar />
            <NotesArea />
            <div className="container-fluid">
             
              <Notes />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
