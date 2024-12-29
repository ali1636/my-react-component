import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); // Retrieve the product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Static product list (can be fetched from an API in a real app)
    const products = [
      {
        id: '1',
        name: 'Headphones',
        price: 119.99,
        description: 'High-quality 2x noise-canceling headphones.',
        image: 'https://fonepro.pk/wp-content/uploads/2020/12/as-images.apple-6.png.webp',
      },
      {
        id: '2',
        name: 'Shoes',
        price: 98.99,
        description: 'Stylish sports shoes designed for comfort and performance.',
        image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f0ecd816-0bad-42ab-a76f-28c494a3534e/AIR+JORDAN+1+MID+%28GS%29.png',
      },
      {
        id: '3',
        name: 'Jacket',
        price: 79.99,
        description: 'A stylish leather jacket perfect for winter weather.',
        image: 'https://www.thejacketmaker.ie/cdn/shop/files/Mystical_Black_Leather_Jacket_2e4fb493-b499-4195-8c70-ffe1a7699d10.jpg?v=1734703148',
      },
      {
        id: '4',
        name: 'Watch',
        price: 350.99,
        description: 'A luxury watch with elegant design and advanced features.',
        image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_2440/v1/catalogue/2024/upright-bba-with-shadow/m128239-0066',
      },
      {
        id: '5',
        name: 'Bracelet',
        price: 39.99,
        description: 'A sleek diamond tennis bracelet with a timeless design.',
        image: 'https://www.oliverheemeyer.com/cdn/shop/products/DiamondTennisBraceletWG5.0ct.png?v=1646841824&width=1946',
      },
      {
        id: '6',
        name: 'Macbook M3 AIR',
        price: 999.99,
        description: 'The latest MacBook Air with M3 chip, ultra-fast performance.',
        image: 'https://www.alphastore.com.kw/wp-content/uploads/2024/03/mba13-m3-midnight-gallery5-202402-600x461.jpg',
      },
    ];

    // Find the product based on the id from the URL
    const foundProduct = products.find((product) => product.id === id);
    setProduct(foundProduct);
  }, [id]); // Dependency array only includes 'id' because products are static here

  // Show a loading state while waiting for product data
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container animate">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h1>{product.name}</h1>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
