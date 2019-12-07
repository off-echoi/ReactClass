import React from 'react';
import style from './ProductRow.module.scss';
import className from 'classnames'

export const ProductRow = (props) => {
  return (
    // [key] => computed property {[1+2]:'aaa'}
    <tr className={className({[style.stock] : !props.stocked},'foo',{bar: false},[style.baz])}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};