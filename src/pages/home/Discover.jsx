import React, { useState, useContext } from 'react';
import ProductsContext from '../../contexts/ProductsContext';
import ProductCard from '../../components/ProductCard';
import FilterBar from './FilterBar';
import Loader from '../../components/Loader';

const Discover = () => {
  const { products, loading, error } = useContext(ProductsContext);
  const [visibleCount, setVisibleCount] = useState(6); // Nombre d'éléments visibles
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleViewMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prevCount => prevCount + 6); // Affiche 6 éléments supplémentaires
      setIsLoadingMore(false);
    }, 500); // Simule un chargement avec un délai de 500ms
  };

  const handleViewLess = () => {
    setVisibleCount(6); // Réinitialise à 6 éléments
  };

  if (loading) return  <Loader/>
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
     <h2 className='font-semibold text-center text-black font-chillax text-2xl mb-10'>Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
     </h2>
     <div className='md:px-20 px-0 mt-10'>
      
      <div className='grid grid-cols-3 gap-4'>
        {products.slice(0, visibleCount).map(product => (
          <ProductCard key={product.node.id} product={product} />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleViewMore}
      className="border-[1px] border-black  text-black hover:text-white bg-transparent hover:bg-black transition-all duration-100 scale-105 px-4 py-1 rounded-full flex items-center gap-1"
          >
            View More
            {isLoadingMore && (
             <Loader/>
          )}
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