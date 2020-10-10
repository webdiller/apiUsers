import React, { Fragment, useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContext';
import { Puff } from 'svg-loaders-react'
import Repo from './repo';

const Repos = ({ name }) => {

    const { getRepos, repos, loading } = useContext(GithubContext);

    useEffect(() => {
        getRepos(name);
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            {loading ?
                (<div><Puff stroke="#007bff" /></div>)
                :
                (
                    <div className="row">
                        {repos.map(repo => (
                            <Repo key={repo.id} repo={repo} />
                        ))}
                    </div>
                )
            }
        </Fragment>


    );
};

export default Repos;