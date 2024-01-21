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
    <div className="bg-light mt-5 mb-5 static-top py-5 px-3" style={{ minHeight: "fit-content" }}>
      <div className="row">
        <Formik
          initialValues={{
            title: "",
            note: ""
          }}
          onSubmit={handleSubmit}
        >
          <Form className="mr-auto ml-md-0 w-100 navbar-search">
            <h2>Add a Note</h2>
            <div className="mb-3">
              <label htmlFor="title" className="form-label"></label>
              <Field
                type="text"
                className="form-control"
                name="title"
                id="exampleFormControlInput1"
                placeholder="Title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="note" className="form-label"></label>
              <Field
                as="textarea"
                className="form-control"
                name="note"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter note"
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
