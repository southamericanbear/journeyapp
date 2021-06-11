import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const activeId = useRef(note.id);
  const activeUrl = useRef(note.url);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
    if (note.url !== activeUrl.current) {
      reset(note);
      activeUrl.current = note.url;
    }
  }, [note, reset]);

  const { body, title, id } = formValues;

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="some awesome title"
          className="notes__title-input"
          name="title"
          id=""
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="what happened today"
          className="notes__text-area"
          id=""
          cols="30"
          rows="10"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt={title} />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
