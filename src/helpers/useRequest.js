import { useState } from 'react';
import axios from 'axios';

const homesUrl = process.env.REACT_APP_HOMES_URL;
export default () => {
  const [state, setState] = useState({
    loading: false,
    response: [],
  });
  const fetchData = async ({ page }) => {
    try {
      setState({ ...state, loading: true });
      const link = `${homesUrl}/?page=${page}&per_page=6`;
      const { data: response } = await axios.get(link);
      setState({
        response: state.response.concat(response.houses),
        loading: false,
      });
      return response;
    } catch (error) {
      setState({ ...state, loading: false });
    }
  };
  return [state, fetchData];
};
