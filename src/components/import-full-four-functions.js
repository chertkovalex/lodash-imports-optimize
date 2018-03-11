import React, { Component } from 'react';
import _ from 'lodash';

const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5];

export const printArrayInline = arr => {
  return (
    <span>
      [
      {_.map(arr, (n, i) => {
        if (i < arr.length - 1) {
          return n + ', ';
        }
        return n + '';
      })}
      ]
    </span>
  );
};

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

export const uniqExampleDom = () => {
  const uniqNumbers = _.uniq(numbers);
  const printableUniqNumbers = printArrayInline(uniqNumbers);

  return (
    <div>
      <h2>uniq</h2>
      <p>const uniqNumbers = _.uniq(numbers);</p>
      <p>Result: {printableUniqNumbers}</p>
    </div>
  );
};

export const tailExampleDom = () => {
  const tailNumbers = _.tail(numbers);
  const printableTailNumbers = printArrayInline(tailNumbers);

  return (
    <div>
      <h2>tail</h2>
      <p>const tailNumbers = _.tail(numbers);</p>
      <p>Result: {printableTailNumbers}</p>
    </div>
  );
};

export const timesExampleDom = () => {
  const randomNumbers = _.times(8, getRandomNumber);
  const printableRandomNumbers = printArrayInline(randomNumbers);

  return (
    <div>
      <h2>times</h2>
      <p>{`const getRandomNumber = () => {
                    return Math.round(Math.random() * 100);
                };`}</p>
      <p>const randomNumbers = _.times(8, getRandomNumber);</p>
      <p>Result: {printableRandomNumbers}</p>
    </div>
  );
};

export default class LodashUsage extends Component {
  render() {
    const printableNumbers = printArrayInline(numbers);
    return (
      <div>
        <h2>const numbers = {printableNumbers};</h2>
        {uniqExampleDom()}
        {tailExampleDom()}
        {timesExampleDom()}
      </div>
    );
  }
}
