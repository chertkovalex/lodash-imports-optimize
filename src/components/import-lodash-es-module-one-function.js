import React, { Component } from "react";
import map from "lodash-es/map";

export const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5];

export const printArrayInline = arr => {
  return (
    <span>
      [
      {map(arr, (n, i) => {
        if (i < arr.length - 1) {
          return n + ", ";
        }
        return n + "";
      })}
      ]
    </span>
  );
};

export default class LodashUsage extends Component {
  render() {
    const printableNumbers = printArrayInline(numbers);
    return (
      <div>
        <h2>const numbers = {printableNumbers};</h2>
      </div>
    );
  }
}
