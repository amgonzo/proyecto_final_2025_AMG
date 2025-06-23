import Carousel from 'react-bootstrap/Carousel';

function Categorias({ onCategoriaChange }) {
    
      const categorias = 
        [
          {
            "id": 1,
            "name": "Beauty",
            "slug": "beauty",
            "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
            "category":"beauty",
          },
          {
            "id": 2,
            "name": "Fragrances",
            "slug": "fragrances",
            "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
            "category":"fragrances",
          },
          {
            "id": 3,
            "name": "Smartphones",
            "slug": "smartphones",
            "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
            "category":"smartphones",
          },
          {
            "id": 4,
            "name": "Furniture",
            "slug": "furniture",
            "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
            "category":"furniture",
          },
          {
            "id": 5,
            "name": "Groceries",
            "slug": "groceries",
            "image": "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
            "category":"groceries",
          },
          {
            "id": 6,
            "name": "Extras",
            "slug": "extras",
            "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
            "category":"extras",
          },
      ]

    return (
    <Carousel data-bs-theme="dark">
            {categorias.map((categ) => (
                <Carousel.Item key={categ.id}>
                    <div style={{backgroundColor: '#dee2e6', width:'18rem', height: '18rem'}}>
                      <img className="d-block w-100 " src={categ.image} alt={categ.slug} />
                    </div>
                    <Carousel.Caption>
                        <h5><a href='#' onClick={() => onCategoriaChange(categ.category)} style={{color:"grey"}}>{categ.name}</a></h5>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
    </Carousel>
  );
}

export default Categorias;
