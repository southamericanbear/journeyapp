import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntrie = ({ body, date, title, id, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, body, title, url }));
  };

  return (
    <div
      onClick={handleEntryClick}
      className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-contenr">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
