import React from 'react';

const Repo = ({ repo }) => {

    const { name, created_at, html_url, description, forks, watchers } = repo;

    return (
        <div className="col-sm-6 d-flex mb-3">
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Название: {name}</h5>
                    <p className="card-text mb-0">Описание: {description ? description : "–"}</p>
                    <p className="card-text">Дата создания: {created_at}</p>
                    <a rel="noopener noreferrer" target="_blank" href={html_url} className="btn btn-sm btn-primary">Перейти в репозиторий</a>
                </div>
                <div className="card-body mt-auto py-0">
                    <button type="button" className="btn btn-sm btn-secondary mr-2 mb-2">
                        Форки <span className="badge badge-light">{forks}</span>
                    </button>
                    <button type="button" className="btn btn-sm btn-light mb-2">
                        Наблюдают <span className="badge badge-light">{watchers}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Repo;