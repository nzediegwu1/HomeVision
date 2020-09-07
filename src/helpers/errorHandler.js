export default ({ error, state = {}, setState }) => {
  const { message, response } = error;
  if (response?.data) {
    return setState({ ...state, loading: false, error: response.data.message });
  }
  setState({ ...state, loading: false, error: message });
};
