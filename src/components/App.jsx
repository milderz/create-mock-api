import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      description: "A sleek and ergonomic wireless mouse.",
      category: "Electronics",
      price: 25.99,
      stock: 120
    },
    {
      id: 2,
      name: "Bluetooth Headphones",
      description: "Noise-cancelling over-ear headphones.",
      category: "Electronics",
      price: 89.99,
      stock: 60
    },
    {
      id: 3,
      name: "Coffee Mug",
      description: "Ceramic mug with a 12oz capacity.",
      category: "Kitchenware",
      price: 12.49,
      stock: 200
    },
    {
      id: 4,
      name: "Notebook",
      description: "A5 size notebook with 100 pages.",
      category: "Stationery",
      price: 5.99,
      stock: 300
    },
    {
      id: 5,
      name: "Desk Lamp",
      description: "Adjustable LED desk lamp with touch controls.",
      category: "Furniture",
      price: 45.00,
      stock: 80
    }
  ]);

  const handleEditorChange = (value) => {
    try {
      const updatedProducts = JSON.parse(value);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  return (
    <div style={{ display: 'flex', height: '90vh' }}>
      <div style={{ flex: 1 }}>
        <Editor
          height="100%"
          defaultLanguage="json"
          defaultValue={JSON.stringify(products, null, 2)}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
      <div style={{ flex: 1, padding: '10px', overflowY: 'auto', backgroundColor: '#f4f4f4' }}>
        {products.map(product => (
          <div key={product.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
            <h3>{product.name}</h3>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Stock:</strong> {product.stock} units</p>
          </div>
        ))}
      </div>
    </div>
  );
}