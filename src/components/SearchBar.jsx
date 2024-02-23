import { useState } from 'react';

function SearchBar(props) {
  const { products, setProducts, fullList } = props;

  // make state for each input
  const [isChecked, setIsChecked] = useState(false);
  const [searchFilterProducts, setSearchFilterProducts] = useState(fullList);

  const handleSearchBar = (inputString) => {
    if (!isChecked) {
      const filteredAllProducts = fullList.filter((product) => {
        return product.name.startsWith(inputString);
      });
      setProducts(filteredAllProducts);
      setSearchFilterProducts(filteredAllProducts);
    } else {
      const filteredCheckedProducts = products.filter((product) => {
        return product.name.startsWith(inputString);
      });
      setProducts(filteredCheckedProducts);
    }
  };

  // FUNCTION for filtering with checkbox
  const handleInStock = (isChecked) => {
    setIsChecked(isChecked);
    //console.log(isChecked);
    if (isChecked) {
      const productsInStock = products.filter((product) => {
        return product.inStock;
      });
      setProducts(productsInStock);
    } else {
      setProducts(searchFilterProducts);
    }
  };

  return (
    <div id="search-bar-component">
      <label htmlFor="searchBar" id="search-bar-label">
        Search
      </label>
      <input
        type="text"
        name="searchBar"
        id="search-bar-input"
        onChange={(event) => {
          handleSearchBar(event.target.value);
        }}
      />

      <div id="checkbox-container">
        <input
          type="checkbox"
          name="checkBox"
          id="check-box"
          onChange={(event) => {
            handleInStock(event.target.checked);
          }}
        />
        <label htmlFor="checkBox" id="check-box-label">
          {' '}
          only show products in stock
        </label>
      </div>
    </div>
  );
}
export default SearchBar;
