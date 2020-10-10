const handlers = {
    GITHUB_SEARCH_USERS: (state, { payload }) => ({ ...state, users: payload, loading: false }),
    GITHUB_CLEAR_USERS: (state, action) => ({ ...state, users: [], loading: false }),
    GITHUB_GET_REPOS: (state, action) => ({ ...state, repos: action.payload, loading: false }),
    GITHUB_GET_USER: (state, action) => ({ ...state, user: action.payload, loading: false }),
    GITHUB_SET_LOADING: (state, action) => ({ ...state, loading: true }),
    DEFAULT: state => state
}

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}