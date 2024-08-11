import React, { useContext } from 'react';
import CollectionsContext from '../../contexts/CollectionsContext';
import ProductsContext from '../../contexts/ProductsContext';
import FilterButton from './FilterButton';

const FilteredBar = ({ setFilteredProducts }) => {
  const { collections } = useContext(CollectionsContext);
  const { products } = useContext(ProductsContext);

  const handleFilter = async (filterType) => {
    if (filterType === 'all') {
      setFilteredProducts(products);
    } else {
      const col = collections.find(edge => edge.node.handle === filterType);
      const idCol = col.node.id.split('/').pop();

      let query = `{
        collection(id: "gid://shopify/Collection/${idCol}") {
          products(first: 20) {
            edges {
              node {
                id
                title
                description
                featuredImage {
                  id
                  url
                }
                variants(first: 3) {
                  edges {
                    node {
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`;

      try {
        const request = await fetch(`https://mock.shop/api?query=${encodeURIComponent(query)}`);
        const response = await request.json();
        setFilteredProducts(response.data.collection.products.edges);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex gap-4'>
        <FilterButton label="All" filterType="all" handleFilter={handleFilter} />
        <FilterButton label="Accessories" filterType="accessories" handleFilter={handleFilter} />
        <FilterButton label="Featured" filterType="featured" handleFilter={handleFilter} />
        <FilterButton label="Unisex" filterType="unisex" handleFilter={handleFilter} />
      </div>
    </div>
  );
};

export default FilteredBar;
