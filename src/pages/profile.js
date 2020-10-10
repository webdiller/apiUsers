import React, { Fragment, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { GithubContext } from "../context/github/githubContext"
import { BsArrowLeft } from "react-icons/bs";
import Repos from '../components/repos';
const Profile = ({ match }) => {

    const { getUser, user } = useContext(GithubContext);
    const { name } = match.params;
    let history = useHistory();

    useEffect(() => {
        getUser(name);
        // eslint-disable-next-line
    }, []);

    const {
        login,
        avatar_url,
        bio,
        location,
        created_at,
        email,
        html_url,
        updated_at,
        followers,
        following,
        public_repos,
        public_gists
    } = user;

    return (
        <Fragment>
            <div className="col-12">
                <button onClick={() => history.goBack()} className="btn btn-primary mb-3">
                    <BsArrowLeft style={{ marginRight: 10, fontSize: 20 }} />
                Назад</button>

                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={avatar_url} className="card-img" alt="login" />
                        </div>
                        <div className="col-md-8 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Login: {login}</h5>
                                <p className="card-text mb-0">Name: {user.name ? user.name : "–"}</p>
                                <p className="card-text mb-0">Bio: {bio ? bio : "–"}</p>
                                <p className="card-text">Email: {email ? email : "–"}</p>
                                <p className="mb-0 card-text"><small className="text-muted">Дата создания: {created_at}</small></p>
                                <p className="mb-0 card-text"><small className="text-muted">Последнее обновление: {updated_at}</small></p>
                                <p className="mb-0 card-text"><small className="text-muted">Location: {location ? location : "–"}</small></p>
                            </div>
                            <div className="card-body mt-auto pb-0">
                                <button type="button" className="btn btn-sm btn-primary mr-2 mb-2">
                                    Подписчики <span className="badge badge-light">{followers}</span>
                                </button>
                                <button type="button" className="btn btn-sm btn-info mr-2 mb-2">
                                    Подписан <span className="badge badge-light">{following}</span>
                                </button>
                                <button type="button" className="btn btn-sm btn-light mr-2 mb-2">
                                    Репозитории <span className="badge badge-light">{public_repos}</span>
                                </button>
                                <button type="button" className="btn btn-sm btn-dark mb-2">
                                    Gists <span className="badge badge-light">{public_gists}</span>
                                </button>
                            </div>
                            <div className="card-body d-flex align-items-center flex-wrap mt-auto pb-2">
                                <a style={{textDecoration: 'underline'}} rel="noopener noreferrer" target="_blank" href={html_url} className="card-link ml-0 mr-3">Перейти в github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mb-2">
                <Repos name={name} />
            </div>
        </Fragment>
    );
};

export default Profile;