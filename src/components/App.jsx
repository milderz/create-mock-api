import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Preview from './Preview';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';



export default function App() {
  const [productsData, setProductsData] = useState({
    totalResults: 5,
    totalPages: 1,
    currentPage: 1,
    resultsPerPage: 5,
    products: [
      {
        id: 1,
        name: "Wireless Mouse",
        description: "A sleek and ergonomic wireless mouse.",
        category: "Electronics",
        price: 25.99,
        stock: 120,
        rating: 4.5,
        image: "https://img.freepik.com/free-vector/realistic-round-box-mockup_52683-87713.jpg"
      },
      {
        id: 2,
        name: "Bluetooth Headphones",
        description: "Noise-cancelling over-ear headphones.",
        category: "Electronics",
        price: 89.99,
        stock: 60,
        rating: 4.7,
        image: "https://img.freepik.com/free-vector/realistic-round-box-mockup_52683-87713.jpg"
      },
      {
        id: 3,
        name: "Coffee Mug",
        description: "Ceramic mug with a 12oz capacity.",
        category: "Kitchenware",
        price: 12.49,
        stock: 200,
        rating: 4.2,
        image: "https://img.freepik.com/free-vector/realistic-round-box-mockup_52683-87713.jpg"
      },
      {
        id: 4,
        name: "Notebook",
        description: "A5 size notebook with 100 pages.",
        category: "Stationery",
        price: 5.99,
        stock: 300,
        rating: 4.0,
        image: "https://img.freepik.com/free-vector/realistic-round-box-mockup_52683-87713.jpg"
      },
      {
        id: 5,
        name: "Desk Lamp",
        description: "Adjustable LED desk lamp with touch controls.",
        category: "Furniture",
        price: 45.00,
        stock: 80,
        rating: 4.6,
        image: "https://img.freepik.com/free-vector/realistic-round-box-mockup_52683-87713.jpg"
      }
    ]
  });

  const handleEditorChange = (value) => {
    try {
      const updatedProducts = JSON.parse(value);
      setProductsData(updatedProducts);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  return (
    // <div style={{ display: 'flex', height: '550px' }}>
    //   <div style={{ flex: 1 }}>
    //     <Editor
    //       height="100%"
    //       defaultLanguage="json"
    //       defaultValue={JSON.stringify(productsData.products, null, 2)}
    //       theme="vs-dark"
    //       onChange={handleEditorChange}
    //     />
    //   </div>
    //  <Preview products={productsData.products} />
    // </div>
    <PanelGroup direction="horizontal" style={{ height: '550px' }}>
      <Panel defaultSize={50} minSize={20}>
        <Editor
          height="100%"
          defaultLanguage="json"
          defaultValue={JSON.stringify(productsData.products, null, 2)}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </Panel>
      <PanelResizeHandle style={{ width: "20px", backgroundColor: "var(--dark-bg)", display: "grid", placeItems: "center"} }>
      <svg class="OG5fOa_Icon AzW8qW_ResizeHandleThumb" viewBox="0 0 24 24" data-direction="horizontal"><path fill="currentColor" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path></svg> 
      </PanelResizeHandle>
      
      <Panel defaultSize={50} minSize={20}>
        <Preview products={productsData.products} />
      </Panel>
    </PanelGroup>
  );
}