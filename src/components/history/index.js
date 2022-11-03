import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
var JSONPretty = require('react-json-pretty');
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

export default function History(props){
    let resultsFunction = () => {
        let array = [];
        if( props.resultsHistory.results.length !== 0){
          array = props.resultsHistory.results.map(result => {
                return <Accordion.Item>
                    <Accordion.Header> {result.method} : {result.url}</Accordion.Header>
                    <Accordion.Body>
                    <JSONPretty id='json-pretty' data={JSON.stringify(result.data)}></JSONPretty>
                    </Accordion.Body>
                    </Accordion.Item>
           })
        }
      return array;
    }
    return (<>
        <p>History</p>
        <Accordion>{ props.resultsHistory.results.length !== 0 ? resultsFunction() : []}</Accordion>
        {/* <JSONPretty id='json-pretty' data={props.resultsHistory.results.length !== 0 ? JSON.stringify(props.resultsHistory.results[0].data , undefined, 2) : null}></JSONPretty> */}
        </>)
}