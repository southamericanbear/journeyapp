import React from "react";

export const JournalEntrie = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.astrobitacora.com/wp-content/uploads/2017/09/milky-way.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">A new day</p>
        <p className="journal__entry-contenr">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday </span>
        <h4>28</h4>
      </div>
    </div>
  );
};
