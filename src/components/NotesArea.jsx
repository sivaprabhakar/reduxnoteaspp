import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addNote } from '../notesSlice';

function NotesArea() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addNote(values));
  };

  return (
    <div className="bg-light mx-4 mt-5 mb-5 static-top py-5 px-3" style={{ height: "fit-content" }}>
      <div className="row">
        <Formik
          initialValues={{
            title: "",
            note: ""
          }}
          onSubmit={handleSubmit}
        >
          <Form className="mr-auto ml-md-0 md-100 navbar-search">
            <h2>Add a Note</h2>
            <div className="mb-3">
              <label htmlFor="title" className="form-label"></label>
              <Field
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="note" className="form-label"></label>
              <Field
                as="textarea"
                className="form-control"
                name="note"
                id="note"
                rows="3"
                placeholder="Take a note"
                />
            </div>
            <Button type="submit" className="btn">Submit</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default NotesArea;
