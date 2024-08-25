import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>Shop</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>

      <h1 style={styles.heading}>Welcome to Blossom Flower Shop</h1>
      <p style={styles.text}>
        Discover our beautiful selection of flowers, perfect for any occasion.
      </p>
      <img
        src="https://i.pinimg.com/564x/03/a5/54/03a55424fc227d04780799036f391020.jpg"
        alt="Featured Flower"
        style={styles.image}
      />

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <img 
            src="https://i.pinimg.com/564x/ba/61/e6/ba61e604032318c4dd33c940683867d6.jpg"
            alt="Rose Bouquet"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Rose Bouquet</h3>
          <p style={styles.cardDescription}>
            A classic arrangement of red roses, perfect for expressing love.
          </p>
        </div>
        <div style={styles.card}>
          <img 
            src="https://i.pinimg.com/564x/d4/97/ec/d497ecd82efaf060582d45b0595ac7b5.jpg"
            alt="Tulip Arrangement"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Tulip Arrangement</h3>
          <p style={styles.cardDescription}>
            Bright and cheerful tulips that bring joy to any space.
          </p>
        </div>
        <div style={styles.card}>
          <img 
            src="https://i.pinimg.com/564x/c6/6a/c0/c66ac0edecfbde826dba45722c18a864.jpg"
            alt="Sunflower Vase"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Sunflower Vase</h3>
          <p style={styles.cardDescription}>
            Sunny sunflowers in a charming vase, perfect for uplifting spirits.
          </p>
        </div>
        <div style={styles.card}>
          <img 
            src="https://i.pinimg.com/564x/f4/23/87/f4238757728e1858a02bfd7ef2234e17.jpg"
            alt="Orchid Arrangement"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Orchid Arrangement</h3>
          <p style={styles.cardDescription}>
            Elegant orchids that add a touch of sophistication to any room.
          </p>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2024 Blossom Flower Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff0f0',
    padding: '20px',
  },
  navbar: {
    width: '100%',
   
    padding: '10px 0',
    marginBottom: '20px',
    position: 'relative', // Ensures it spans the full width
    left: 0,
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: '3rem',
    margin: '20px 0',
    color: '#d32f2f',
  },
  text: {
    fontSize: '1.5rem',
    margin: '10px 0',
    color: '#666',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '20px',
    textAlign: 'center',
    flex: '1',
    minWidth: '220px',
    maxWidth: '280px',
  },
  cardImage: {
    width: '100%',
    height: '200px', // Fixed height for uniformity
    objectFit: 'cover', // Ensures the image covers the entire area without distortion
    borderRadius: '5px',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '1.1rem',
    color: '#777',
  },
  footer: {
    width: '100%',
    padding: '10px 0',
    textAlign: 'center',
    
    color: 'black',
    
    left: 0,
    marginTop: '40px',
  },
};

export default HomePage;
