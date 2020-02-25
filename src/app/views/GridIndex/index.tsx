import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { TopBar } from '../../components/TopBar';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Grid } from '../../components/Grid';

const USERS_QUERY = gql`
  query {
    users {
      department
      failureRate
    }
  }
`;

interface IHeroIndexProps {}

const GridContainer = styled.div`
  display: flex;
  padding: 10px;
  align-self: center;
  max-width: 1150px;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const GridIndex: React.FC<IHeroIndexProps> = () => {
  const {
    data: { users: users },
    error,
    loading,
  } = useQuery(USERS_QUERY);

  if (error) {
    return handleError(error.message);
  }

  if (loading) {
    return handleLoading();
  }

  console.log(users);

  return (
    <main>
      <TopBar />
      <Section heading={'Organization Risk Matrix'} paragraph={``} />

      {/** Improve this section. Data provided is defined on top in GraphQL query. You can decide what you use and what you dont't.*/}
      <GridContainer>{<Grid users={users} />}</GridContainer>

      <Footer />
    </main>
  );
};
