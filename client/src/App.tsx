import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { createApolloClient } from './realm/realmApolloClient';

import * as RealmWeb from "realm-web";

const REALM_APP_ID = "jobrassic_park_db";
const App = new RealmWeb.App({ id: REALM_APP_ID });


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

function app() {

  const { data } = useQuery<job>(GET_QUERY)

  console.log(data)

  return (
    <App>
    <div id='root'>
        <p>
          {data}
        </p>
    </div>
    </App>
  );
}

export default App;
