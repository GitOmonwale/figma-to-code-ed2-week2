import React, { useState, useContext, useEffect } from 'react';
import ProductsContext from '../../contexts/ProductsContext';
import ProductCard from '../../components/ProductCard';
import FilterBar from './FilterBar';
import Loader from '../../components/Loader';

const Discover = () => {
  const { products } = useContext(ProductsContext);  
  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]); 

  const handleViewMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prevCount => prevCount + 6);
      setIsLoadingMore(false);
    }, 500);
  };

  const handleViewLess = () => {
    setVisibleCount(6);
  };
 
  return (
    <>
      <h2 className='font-semibold text-center text-black font-chillax text-2xl mb-10'>
        Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
      </h2>
      <FilterBar setFilteredProducts={setFilteredProducts} />
      <div className='lg:px-20 md:px-10 px-0 mt-10'>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {filteredProducts.slice(0, visibleCount).map(filteredProduct => (
            <ProductCard key={filteredProduct.node.id} product={filteredProduct} />
          ))}
        </div>
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleViewMore}
              className="border-[1px] border-black  text-black hover:text-white bg-transparent hover:bg-black transition-all duration-100 scale-105 px-4 py-1 rounded-full flex items-center gap-1"
            >
              View More
              {isLoadingMore && <Loader />}
            </button>
          </div>
        )}
        {visibleCount > 6 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleViewLess}
              className="border-[1px] border-black  text-black hover:text-white bg-transparent hover:bg-black transition-all duration-100 scale-105 px-4 py-1 rounded-full"
            >
              View Less
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Discover;
