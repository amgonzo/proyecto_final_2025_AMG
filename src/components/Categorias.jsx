import Carousel from 'react-bootstrap/Carousel';

function Categorias({ onCategoriaChange }) {
    
      const categorias = 
        [
          {
            "id": 1,
            "name": "clothess",
            "slug": "clothess",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-05-12T13:19:46.000Z",
            "updatedAt": "2025-05-12T16:19:04.000Z"
          },
          {
            "id": 2,
            "name": "Electronics",
            "slug": "electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2025-05-12T13:19:46.000Z",
            "updatedAt": "2025-05-12T13:19:46.000Z"
          },
          {
            "id": 3,
            "name": "Furniture",
            "slug": "furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2025-05-12T13:19:46.000Z",
            "updatedAt": "2025-05-12T16:03:07.000Z"
          },
          {
            "id": 4,
            "name": "Shoes",
            "slug": "shoes",
            "image": "https://i.imgur.com/qNOjJje.jpeg",
            "creationAt": "2025-05-12T13:19:46.000Z",
            "updatedAt": "2025-05-12T13:19:46.000Z"
          },
          {
            "id": 5,
            "name": "Miscellaneous",
            "slug": "miscellaneous",
            "image": "https://i.imgur.com/BG8J0Fj.jpg",
            "creationAt": "2025-05-12T13:19:46.000Z",
            "updatedAt": "2025-05-12T13:19:46.000Z"
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
                        <h5><a href='#' onClick={() => onCategoriaChange(categ.id)} style={{color:"grey"}}>{categ.name}</a></h5>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
    </Carousel>
  );
}

export default Categorias;
