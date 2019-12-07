import React from 'react';

export const SearchBar = (props) => {
  return (
    <div>
      <input placeholder="search..." type="text" value={props.keyword}
             onChange={(e)=>props.setKeyword(e.target.value)} />
      <br/>
      <input type="checkbox" name="" id="goo"
             checked={props.stockCheck}
             onChange={(e)=>props.setStockCheck(e.target.checked)}
      />
      <label htmlFor="goo" >Only show pruducts in stock</label>
    </div>
  );
}