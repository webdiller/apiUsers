import React, { useContext, useState } from 'react';
import { GithubContext } from '../context/github/githubContext';

const Search = () => {
  const github = useContext(GithubContext);
  const [value, setValue] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (!value) {
      github.clearUsers();
    } else {
      github.search(value);
    }
  }

  const onChange = e => {
    setValue(e.target.value);
  }

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <form onSubmit={onSubmit} className="form-group">
          <label htmlFor="username">Поиск по пользователям</label>

          <div className="input-group mb-3">
            <input
              id="username"
              type="text"
              className="form-control"
              value={value}
              onChange={onChange}
              placeholder="Введите ник пользователя"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="submit" id="button-addon2">Искать</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;