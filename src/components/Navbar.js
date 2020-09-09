import React, { useState, useEffect } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { logo } from '../images';
import { useRequest } from '../helpers';

/**
 * @description Renders a sticky bootstrap navbar
 *
 * @returns {React.Component} NavBar Component
 */
const NavBar = ({ children }) => {
  const [state, setState] = useState({
    page: 1,
    searchKey: '',
    errors: 0,
    response: [],
    loading: false,
    hasMore: true,
  });

  const [resources, fetchResource] = useRequest();
  const { page } = state;

  const fetchData = () => {
    fetchResource({ page }).then((res) => {
      setState({
        ...state,
        page: page + 1,
        searchKey: '',
        hasMore: true,
        ...res,
      });
    });
  };

  useEffect(fetchData, []);

  const searchHomes = ({ target }) => {
    const text = target.value.toLowerCase();
    const response = resources.response.filter(
      (value) =>
        value.address.toLowerCase().includes(text) ||
        value.homeowner.toLowerCase().includes(text)
    );
    const hasMore = !Boolean(text);
    setState({
      ...state,
      searchKey: text.toLowerCase(),
      response,
      hasMore,
      page: hasMore ? page + 1 : page,
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
            onChange={searchHomes}
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
