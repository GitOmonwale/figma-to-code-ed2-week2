import React, { useContext, useState } from 'react';
import ProductsContext from '../../contexts/ProductsContext';
import FilterButton from './FilterButton.jsx';

const FilterBar = () => {
  const { products } = useContext(ProductsContext);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Accessories', 'Featured', 'Unisex'];


  const getCountForCategory = (category) => {
    if (category === 'All') return products.length;
    return products.filter(product => product.node.category === category).length;
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="flex flex-wrap my-4 items-center justify-center gap-5">
      {categories.map(category => (
        <FilterButton
          key={category}
          label={category}
          count={getCountForCategory(category)}
          onClick={handleFilterChange}
        />
      ))}
    </div>
  );
};

export default FilterBar;
