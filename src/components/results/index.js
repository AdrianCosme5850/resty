import React from 'react';
import './results.scss';
var JSONPretty = require('react-json-pretty');
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

export default function Results(props) {
  
    return (
      <section>
        {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
        <JSONPretty id='json-pretty' data={props.data ? JSON.stringify(props.data, undefined, 2) : null} theme={JSONPrettyMon}></JSONPretty>
      </section>
    );
  };