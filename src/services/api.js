import axios from 'axios';

const API_BASE_URL = '';

const fetchGraphQLData = async (query) => {
  try {
    const response = await axios.post(API_BASE_URL, {
      query: query
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data.data; // Adapter selon la structure de la réponse de l'API
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchProducts = async () => {
  const query = `
    {
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
  `;
  const data = await fetchGraphQLData(query);
  return data.products.edges.map(edge => edge.node); // Adapter selon la structure de la réponse
};

export const fetchProductById = async (id) => {
  const query = `
    {
      product(id: "${id}") {
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
  `;
  const data = await fetchGraphQLData(query);
  return data.product; // Adapter selon la structure de la réponse
};


import React, { useState, useContext } from 'react';
import ProductsContext from '../../contexts/ProductsContext';
import ProductCard from '../../components/ProductCard';
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

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products.slice(0, visibleCount).map(product => (
          <ProductCard key={product.node.id} product={product} />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleViewMore}
            className="border-2 border-black text-black py-2 px-4 rounded-3xl flex"
          >
            View More
            {isLoadingMore && (
            <Loader/> // Style à ajouter pour spinner
          )}
          </button>
          
        </div>
      )}
      {visibleCount > 6 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleViewLess}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            View Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Discover;
