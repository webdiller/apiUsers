import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
    const {avatar_url, login, type} = user;
    
    return (
        <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <div className="card">
                <img src={avatar_url} className="card-img-top item__img" alt={login}></img>
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Тип: {type}</h6>
                    <Link to={`/profile/${login}`} className="card-link">Подробнее</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;