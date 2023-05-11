import React from 'react';
import { useState, useEffect } from 'react';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App(){

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    // // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: requestParams.url},
    //     {name: 'fake thing 2', url: requestParams.url},
    //   ],
    // };
    // setData(data);
    setRequestParams( requestParams );
  }

  useEffect(() => {
    console.log('FETCHING DATA', requestParams);
    async function getData(){
      try {
        let req = await fetch(requestParams.url);
        let jsonData = await req.json();
        let data = {
          count: jsonData.count,
          results: jsonData
        }
        setData(data);
      } catch (e) {
        console.log('FETCH ERROR:', e);
      }
    }
    getData();
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>
        Request Method: {requestParams.method}
      </div>
      <div>
        URL: {requestParams.url}
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  )
}

export default App;