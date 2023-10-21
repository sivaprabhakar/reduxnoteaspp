import React from 'react';
import { useSelector } from 'react-redux';

function Notes() {
  const notes = useSelector(state => state.notes);

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h4 className="mb-0 text-gray-800">My Notes</h4>
        <h6 className="mb-0 text-gray-800">Recently viewed</h6>
        <div className="row each-note">
          {notes.map((e, i) => (
            <div key={i} className="col-xl-3 col-md-6 mb-4 rec-view-card">
              <div className="card shadow h-100 py-1">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1 d-flex justify-content-between align-items-center">
                      <h6 className="tile">{e.title}</h6>
                      <div className="d-flex">
                        <div className="mx" src="./src/assets/edit.svg" alt="edit"></div>
                        <div className="mx-1" src="./src/assets/delete.svg" alt="delete"></div>
                      </div>
                    
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{e.note}</div>
                      <div className="my-3">{e.updatedBefore}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
