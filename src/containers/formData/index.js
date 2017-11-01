import React from 'react';
import './formData.css';

export default class FormSet extends React.Component {
  render() {
    return (
      <div className="formData">
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1" placeholder="kdjaskjdsnskajn ksjndkjasnjk"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>
        <label htmlFor="input1">Abcd</label>
        <input type="text" id="input1"/>

        <label htmlFor="input1">
          Abcd
          <input type="radio" id="input1"/>
          Abcd
          <input type="radio" id="input1"/>
          Abcd
          <input type="radio" id="input1"/>
          
        </label>

        <label htmlFor="input1">
          <input type="checkbox" id="input1"/>
          Abcd
          <input type="checkbox" id="input1"/>
          Abcd
          <input type="checkbox" id="input1"/>
          Abcd
          <input type="checkbox" id="input1"/>
          Abcd
        </label>
        <label htmlFor="input1">Abcd</label>
        <textarea name="" id=""></textarea>
        <select name="" id="">
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
        </select>
        <button>Submit</button>
      </div>
    );
  }
}