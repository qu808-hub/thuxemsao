import React from 'react';
import './App.css';

const ProductInfo: React.FC = () => {
  const product = {
    title: 'Chat GPT Thực Chiến',
    author: 'Dự Dương, Phan Trách Bản, Lý Trí Minh',
    price: '110.000đ',
    originalPrice: '160.000đ',
    description: 'Trong thời đại hiện nay, tất cả mọi thứ đều có thể được hỗ trợ và cải thiện...',
    img: 'https://via.placeholder.com/300',
    similarBooks: [
      { title: 'AI - Công Cụ Nâng Cao Hữu Ích', price: '213.400đ', img: 'https://via.placeholder.com/180' },
      { title: 'Combo 2 Cuốn AI và ChatGPT', price: '113.162đ', img: 'https://via.placeholder.com/180' },
      { title: 'Tìm Hiểu Về AI', price: '129.000đ', img: 'https://via.placeholder.com/180' },
    ]
  };

  return (
    <div className="product-info">
      <div className="product-details">
        <div className="product-image">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="product-info-text">
          <h2>{product.title}</h2>
          <p className="author">Tác giả: {product.author}</p>
          <p className="price">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{product.originalPrice}</span>
          </p>
          <p className="description">{product.description}</p>
        </div>
      </div>

      <div className="similar-books">
        <h3>Sản phẩm tương tự</h3>
        <div className="book-list">
          {product.similarBooks.map((book, index) => (
            <div key={index} className="book-item">
              <img src={book.img} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <ProductInfo />
    </div>
  );
}

export default App;
