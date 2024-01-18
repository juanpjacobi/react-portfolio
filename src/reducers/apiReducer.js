export const apiReducer = (state, action) => {
    switch (action.type) {
      case 'REQUEST':
        return { ...state, loading: true, error: null, projects: [], skills: [] };
      case 'SKILLS':
        return { ...state, loading: false, skills: action.payload};
        case 'PROJECTS':
            return { ...state, loading: false, projects: action.payload };
      case 'FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };