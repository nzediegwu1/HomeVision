import React, { useState, useEffect } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { logo } from '../images';
import { useRequest } from '../helpers';

const NavBar = ({ children }) => {
  // console.log('response.loaind', state.newResources);

  // create new resources
  // use main response to search
  // return reduced response

  const [resources, fetchResource] = useRequest();

  const [state, setState] = useState({
    hasMore: true,
    page: 1,
    searchKey: '',
    ...resources,
  });
  const fetchData = () => {
    const { page } = state;
    fetchResource({ page }).then((res) => {
      if (!res) return setState({ ...state, hasMore: false });
      setState({ ...state, page: page + 1, hasMore: true });
    });
  };

  useEffect(fetchData, []);

  const handleChange = ({ target }) => {
    const text = target.value.toLowerCase();
    // console.log('resource response>>>', resources.response);

    const response = state.response.filter(
      (value) =>
        value.address.toLowerCase().includes(text) ||
        value.homeowner.toLowerCase().includes(text)
    );
    // console.log('filtered response>>>', response);

    // resources.response = response;
    setState({
      ...state,
      searchKey: text.toLowerCase(),
      response,
    });
  };

  return (
    <>
      <Navbar
        bg="dark"
        sticky="top"
        variant="dark"
        className="justify-content-between"
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="app-logo" /> HomeVision
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            value={state.searchKey}
            onChange={handleChange}
            placeholder="Search homes"
            className="mr-sm-2"
          />
        </Form>
      </Navbar>
      {children({ ...state, fetchData })}
    </>
  );
};

export default NavBar;
