import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="some awesome title"
          className="notes__title-input"
          name=""
          id=""
        />
        <textarea
          name=""
          placeholder="what happened today"
          className="notes__text-area"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://www.astrobitacora.com/wp-content/uploads/2017/09/milky-way.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
