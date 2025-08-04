import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main className='pt-20 p-4'>
      <h2 className='text-2xl font-bold mb-4'>Home Page</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.id} className='border rounded p-4 shadow'>
            <h3 className='font-bold'>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
