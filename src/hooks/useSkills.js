import portfolioApi from '../api/portfolioApi';
import { useApi } from '../context/PortfolioContext';

export const useSkills = () => {
  const { dispatch } = useApi();

  const getSkills = async () => {
    dispatch({ type: 'REQUEST' });
    try {
      const response = await portfolioApi.get('/api/skills/');
      dispatch({ type: 'SKILLS', payload: response.data.skills });

    } catch (error) {
      dispatch({ type: 'FAILURE', payload: error });
        console.log(error)
    }
  };


  return { getSkills };
};
