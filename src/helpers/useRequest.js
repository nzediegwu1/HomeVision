import { useState } from 'react';
import axios from 'axios';
import { errorHandler } from '.';

export default ({ path }) => {
  const [state, setState] = useState({
    loading: false,
    response: {},
    error: '',
  });
  const fetchData = async () => {
    try {
      setState({ ...state, loading: true });
      const { data: response } = await axios.get(path);
      setState({ ...state, response });
      return response;
    } catch (error) {
      errorHandler({ error, state, setState });
    }
  };
  return [state, setState, fetchData];
};
