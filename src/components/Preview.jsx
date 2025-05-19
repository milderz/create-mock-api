import '../components/styles/Preview.css';



export default function Preview({ template }) {
 
    if(!template){
      return <div className="preview-container"><p>No template selected</p></div>
    }

    if(template.id === 1){
      return( <div className="preview-container" >
        
        {template.products.map(product => (
          <article key={product.id} className="card">
            <img height="100px" width="100px" src={product.image} alt={product.name} className="product-image" />
            <header className="card-header">
            <p className='card-price'> ${product.price.toFixed(2)}</p>
            <h3 className='card-product-name'>{product.name}</h3>
            </header>
            <p className='card-product-description'>{product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
            <footer className="card-footer">
            
  
            </footer>
          </article>
        ))}
      </div>)
    }

    if(template.id === 2){
      return(  <div className="preview-container" >
      
        
        {template.employees.map(product => (
          <article key={product.id} className="card">
            <img height="100px" width="100px" src={product.profileImage} alt={product.name} className="product-image" />
            <header className="card-header">
            {/* <p className='card-price'> ${product.price.toFixed(2)}</p> */}
            <h3 className='card-product-name'>{product.name}</h3>
            {/* <p className='product-rating'>{'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))}<span className='product-rating-value'>({product.rating})</span></p> */}
            </header>
            <p className='card-product-description'>{product.description}</p>
            <button className="btn btn-primary">Edit profile</button>
            <footer className="card-footer">
            
  
            </footer>
          </article>
        ))}
      </div>)
    }
  
    
}