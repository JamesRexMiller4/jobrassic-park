import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker';
// 1
// import { ApolloProvider } from 'react-apollo'
// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// const API_PASSWORD = process.env.REACT_APP_API_PASSWORD

// // 2
// const httpLink = createHttpLink({
//   uri: `http://mongodb+srv://giannuz1:${API_PASSWORD}@cluster0-omm8r.mongodb.net/jobrassic_park_db?retryWrites=true&w=majority`
// })
// // 3
// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })
// // 4

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister();


