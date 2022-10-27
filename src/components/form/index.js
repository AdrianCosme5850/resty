import React from 'react';

import './form.scss';



export default function Form(props){
  function handleSubmit(e) {
    e.preventDefault();
    console.log();
    console.log()
    console.lg
    const formData = {
      method: e.target.elements.method.value,
      url: e.target.elements.url.value,
    };
    props.handleApiCall(formData);
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input data-testid='inputForm' name='url' type='text' />
            <button data-testid='submitButton' type="submit">GO!</button>
          </label>
            <input type='radio' id="get" name='method' value='GET'></input>
            <label>GET</label>
            <input type='radio' id="post" name='method' value='POST'></input>
            <label >POST</label>
            <input type='radio' id="put" name='method' value='PUT'></input>
            <label>PUT</label>
            <input type='radio' id="delete" name='method' value='DELETE'></input>
            <label >DELETE</label>
        </form>
      </>
    );
  }

