import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailContext from '../../contexts/ProductDetailsContext';
import ProductsContext from '../../contexts/ProductsContext';
import CartContext from '../../contexts/CartContext';
import Button from '../../components/Button';
import SizeButton from './SizeButton';

// Mappage des noms de couleurs avec les classes CSS de Tailwind pour les couleurs de fond
const colorMap = {
  Green: 'bg-green',
  Purple: 'bg-purple',
  Ocean: 'bg-turquoise',
  Olive: 'bg-brown',
};

// Fonction pour mélanger un tableau (utilisée pour choisir des produits aléatoires)
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ProductDetail = () => {
  // Extraction de l'ID du produit depuis l'URL
  const { id } = useParams();

  // Accès au contexte des détails du produit
  const { product, fetchProduct } = useContext(ProductDetailContext);

  // État pour stocker les produits aléatoires
  const [randomProducts, setRandomProducts] = useState([]);

  // Accès au contexte des produits (liste complète des produits)
  const { products } = useContext(ProductsContext);

  // Accès au contexte du panier pour ajouter des produits
  const { addToCart } = useContext(CartContext);

  // État pour stocker la variante sélectionnée du produit
  const [selectedVariant, setSelectedVariant] = useState(null);

  // useEffect pour recharger la page lorsque l'onglet devient visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.location.reload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // useEffect pour récupérer les détails du produit lorsque l'ID change
  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  // useEffect pour sélectionner des produits aléatoires lorsque la liste de produits est disponible
  useEffect(() => {
    if (products.length) {
      setRandomProducts(shuffleArray(products).slice(0, 4));
    }
  }, [products]);

  // useEffect pour définir la première variante du produit comme sélectionnée par défaut
  useEffect(() => {
    if (product && !selectedVariant) {
      setSelectedVariant(product.variants.edges[0].node);
    }
  }, [product, selectedVariant]);

  // Affichage d'un message de chargement si les détails du produit ne sont pas encore disponibles
  if (!product) {
    return <div>Loading...</div>;
  }

  // Récupération des variantes du produit
  const variants = product.variants.edges;

  // Fonction pour gérer la sélection d'une variante
  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant.node);
  };

  return (
    <div className='mt-44'>
      <div className='grid md:grid-cols-2 grid-cols-1 mt-10 gap-10'>
        <div className='rounded-3xl'>
          <img
            src={selectedVariant ? selectedVariant.image.url : product.featuredImage.url}
            alt={product.title}
            className='rounded-3xl'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='font-chillax font-semibold'>{product.title}</h2>
          <p className='font-archivo font-semibold flex gap-2'>CAD
            <span className='flex items-center justify-center'>
              <span className='text-base'>$</span>
              <span>{selectedVariant ? selectedVariant.price.amount : variants[0]?.node.price.amount}</span>
            </span>
          </p>

          {selectedVariant && selectedVariant.title.includes('/') ? (
            <div>
              <p>Color: {selectedVariant.title.split('/')[1].trim()}</p>
              <div className='flex gap-1'>
                {[...new Set(variants.map(v => v.node.title.split('/')[1].trim()))].map((color) => (
                  <span
                    key={color}
                    className={`rounded-full h-6 w-6 ${colorMap[color]}`}
                    onClick={() => handleVariantSelect(variants.find(v => v.node.title.includes(color)))}
                  ></span>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p></p>
            </div>
          )}

          <div className='flex gap-2 flex-col'>
            <span className='font-medium font-archivo'>Size:</span>

            {/* Si le titre est un entier (ex: tailles numérotées) */}
            {Number.isInteger(Number(variants[0].node.title.trim())) ? (
              <div className='flex gap-2'>
                {variants.map((variant) => (
                  <Button key={variant.node.id} buttonNames={variant.node.title} />
                ))}
              </div>
            ) : (
              <>
                {/* Si le titre contient un slash, indiquant couleur/size */}
                {variants[0].node.title.includes('/') ? (
                  <SizeButton size={selectedVariant ? selectedVariant.title.split('/')[0].trim() : variants[0].node.title.split('/')[0].trim()} />
                ) : (
                  <div>
                    {/* Si le titre est une chaîne de caractères sans slash */}
                    <p><SizeButton size={selectedVariant ? selectedVariant.title : variants[0].node.title} /></p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <button 
            onClick={() => 
            {addToCart(product, product.id);
              alert('Your product has been successfully added to the cart!');  
            }} 
            className="border-[1px] border-black text-black hover:text-white bg-transparent hover:bg-black transition-all duration-100 scale-105 px-4 py-2 rounded-full">
              Add to cart
            </button>
            <button className="border-[1px] border-black text-black hover:text-white bg-transparent hover:bg-black transition-all duration-100 scale-105 px-4 py-2 rounded-full">
              Buy now
            </button>
          </div>
          <div className='flex gap-2 flex-col'>
            <h3 className='font-chillax font-medium text-black'>Description</h3>
            <p className='text-gray-300 font-archivo'>{product.description}</p>
          </div>
        </div>
      </div>

      <div className='my-14'>
        <h2 className='font-chillax font-semibold text-3xl mb-5'>You may also like</h2>
        <div className='sm:flex grid sm:grid-cols-2 grid-cols-1 w-full sm:overflow-x-auto overflow-hidden sm:flex-nowrap flex-wrap items-center gap-2 scrollbar-hidden'>
          {randomProducts.map((product) => (
            <div key={product.node.id} className='flex gap-2 flex-col sm:w-96 w-full flex-shrink-0'>
              <img src={product.node.featuredImage.url} alt={product.node.title} className='rounded-xl' />
              <h3 className='font-chillax font-medium text-black'>{product.node.title}</h3>
              <p className='text-gray-300 font-archivo'>CAD {product.node.variants.edges[0]?.node.price.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
