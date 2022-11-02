import React from 'react';
import { useState, useEffect } from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

let App = function() {
  
let [data, setData] = useState(null);
let [requestParams, setRequestParams] = useState({});
  let setURL = (requestParams) => {
    setRequestParams(requestParams)
  }
useEffect(() => {
  const fetchData = async (requestParams) => {
    let res = await fetch(requestParams.url);
    let json = await res.json();
    setData(json);
  }
  fetchData(requestParams);
}, [requestParams])
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={setURL} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  }

export default App;