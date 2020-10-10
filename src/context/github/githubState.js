import Axios from 'axios';
import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { githubReducer } from './githubReducer';
import {
    GITHUB_SEARCH_USERS,
    GITHUB_CLEAR_USERS,
    GITHUB_GET_REPOS,
    GITHUB_SET_LOADING,
    GITHUB_GET_USER
} from '../types';

export const GithubState = ({ children }) => {

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const URL = 'https://api.github.com/search';

    const [state, dispatch] = useReducer(githubReducer, initialState);

    //*** Получить пользователей 
    const search = async value => {
        const response = await Axios.get
            (`${URL}/users?q=${value}`)
        dispatch({
            type: GITHUB_SEARCH_USERS,
            payload: response.data.items
        })
    }

    //*** Получить пользователя 
    const getUser = async name => {
        const response = await Axios.get
            (`https://api.github.com/users/${name}`)
        dispatch({
            type: GITHUB_GET_USER,
            payload: response.data
        })
    }

    //*** Получить репозитории 
    const getRepos = async name => {
        const response = await Axios.get
            (`https://api.github.com/users/${name}/repos?per_page=10&`)
        dispatch({
            type: GITHUB_GET_REPOS,
            payload: response.data
        })
    }

    //*** Очистить пользователей
    const clearUsers = () => {
        dispatch({
            type: GITHUB_CLEAR_USERS
        })
    }

    //*** Поставить загрузку
    const setLoading = () => {
        dispatch({
            type: GITHUB_SET_LOADING
        })
    }

    const { user, users, loading, repos } = state;

    return (
        <GithubContext.Provider value={{
            user, users, repos, loading,
            getUser, search, getRepos, clearUsers, setLoading
        }}>
            {children}
        </GithubContext.Provider>
    )
}