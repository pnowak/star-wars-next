import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import { ListItem } from './ListItem';
import { Film, FilmAttributes } from '../interfaces/films.interface';
import { FETCH_FILMS_REQUEST } from '../actions';

type FilmsProps = {
  // filmsList: Film;
  category: string;
};

export const FilmsList = ({ category }: FilmsProps) => {
  const films = (useSelector(
    (state: RootState) => state.films
  ) as unknown) as Film;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_FILMS_REQUEST,
    });
  }, [dispatch]);

  console.log('FilmsList', films);

  return (
    <ul>
      {films.data &&
        films.data.map((item: FilmAttributes) => (
          <li key={item.created}>
            <ListItem category={category} name={item.title} />
          </li>
        ))}
    </ul>
  );
};
