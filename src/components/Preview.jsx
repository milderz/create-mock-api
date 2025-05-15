import '../components/styles/Preview.css';



export default function Preview({ products }) {
    return( <div className="preview-container" >
        {products.map(product => (
          <article key={product.id} className="card">
            <img height="100px" width="100px" src={product.image} alt={product.name} className="product-image" />
            <header className="card-header">
            <p className='card-price'> ${product.price.toFixed(2)}</p>
            <h3 className='card-product-name'>{product.name}</h3>
            <p className='product-rating'>{'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))}<span className='product-rating-value'>({product.rating})</span></p>
            </header>
            <p className='card-product-description'>{product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
            <footer className="card-footer">
            

            </footer>
          </article>
        ))}
      </div>)
}