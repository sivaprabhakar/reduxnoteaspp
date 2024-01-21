import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, editNote, deleteNote } from '../notesSlice';

import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteNote(index));
  };

  const handleInputChange = (e, i, field) => {
    const updatedNotes = [...notes];
    updatedNotes[i][field] = e.target.value;
    dispatch(editNote(updatedNotes));  // Assuming you have an editNote action
  };

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h4 className="mb-0 text-gray-800">My Notes</h4>
        <h6 className="mb-0 text-gray-800">Recently viewed</h6>
        <div className="row flex-wrap">
          {Array.isArray(notes) &&
            notes.map((e, i) => (
              (e.title || e.note) && (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 mr-3">
                  <div className="card shadow h-100 py-1">
                    <div className="card-body">
                      <div className="text-xs font-weight-bold text-uppercase mb-1 d-flex justify-content-between">
                        {editIndex === i ? (
                          <input
                            onBlur={() => setEditIndex(null)}
                            onChange={(event) => handleInputChange(event, i, 'title')}
                            value={e.title}
                            style={{
                              border: 'none',
                              backgroundColor: 'transparent',
                              outline: 'none',
                            }}
                          />
                        ) : (
                          <h5
                            onClick={() => setEditIndex(null)}
                            style={{
                              marginBottom: '0.5rem',
                              cursor: 'pointer',
                            }}
                          >
                            {e.title}
                          </h5>
                        )}
                        <div>
                          <img
                            className="mx"
                            src={editIcon}
                            alt="edit"
                            onClick={() => handleEdit(i)}
                            style={{ cursor: 'pointer' }}
                          />
                          <img
                            className="mx-1"
                            src={deleteIcon}
                            alt="delete"
                            onClick={() => handleDelete(i)}
                            style={{ cursor: 'pointer' }}
                          />
                        </div>
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {editIndex === i ? (
                          <textarea
                            onBlur={() => setEditIndex(null)}
                            onChange={(event) => handleInputChange(event, i, 'note')}
                            value={e.note}
                            style={{
                              border: 'none',
                              resize: 'none',
                              width: '100%',
                              backgroundColor: 'transparent',
                              height: '140px',
                              overflow: 'hidden',
                              outline: 'none',
                            }}
                          />
                        ) : (
                          <p>{e.note}</p>
                        )}
                      </div>
                      <div className="my-3">{e.updatedBefore}</div>
                    </div>
                  </div>
                </div>
              )
            ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
