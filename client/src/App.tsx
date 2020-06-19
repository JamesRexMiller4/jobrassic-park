import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_QUERY = gql`
  query {
    job {
      _id
      date_posted
      description
      job_title
      name
      url
    }
  }
`

interface job {
  id: string,
  description: string,
  url: string,
  name: string,
  date_posted: Date
}

function App() {

  const { data } = useQuery<job>(GET_QUERY)

  console.log(data)

  return (
        <p>
          {data}
        </p>
  );
}

export default App;
