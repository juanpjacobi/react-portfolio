import portfolioApi from '../api/portfolioApi';
import { useApi } from '../context/PortfolioContext';

export const useProjects = () => {
  const { dispatch } = useApi();

  const getProjects = async () => {
    dispatch({ type: 'REQUEST' });
    try {
      const response = await portfolioApi.get('/api/projects/');
      dispatch({ type: 'PROJECTS', payload: response.data.projects });

    } catch (error) {
      dispatch({ type: 'FAILURE', payload: error });
        console.log(error)
    }
  };


  return { getProjects };
};
