import React from "react";
import { Link } from "react-router-dom";
const FilmList = ({ list }) => {
  // console.log(match);

  // >
  return (
    <ul>
      {list &&
        list.map(elem => (
          <li key={elem.id}>
            <Link to={`/movies/${elem.id}`}>
              {elem.title || elem.original_title || elem.original_name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default FilmList;
