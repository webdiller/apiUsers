import React, { useContext } from 'react';
import Card from '../components/card';
import Search from '../components/search';
import { Puff } from 'svg-loaders-react'
import { GithubContext } from '../context/github/githubContext';

const Home = () => {

    const { loading, users } = useContext(GithubContext);

    return (
        <div className="col-12">
            <Search />
            <div className="row">
                {loading ?
                    (<div className="col-12 col-md-6"><Puff stroke="#007bff" /></div>)
                    :
                    users.map(user => (
                        <Card user={user} key={user.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;