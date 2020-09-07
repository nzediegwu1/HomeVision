import { useState } from 'react';
import axios from 'axios';

const homesUrl = process.env.REACT_APP_HOMES_URL;

/**
 * @description Custom hook for handling api requests
 *
 * @returns {Array} List of utils for handling api calls
 */
const useRequest = () => {
  const [state, setState] = useState({
    loading: false,
    response: [],
  });
  /**
   * @description Enables you to fetch homes data from the server
   *
   * @param {Object} prop.page Page number to fetch data
   * @returns {Array} List of home objects
   */
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

export default useRequest;
