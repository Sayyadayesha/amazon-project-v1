
import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

            <div className="home--row">
            <Product 
            id="01"
            title="See U in C by Ali Karim Sayed (Author)"
            price={4424.56}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          
            />
            
            <Product 
            id="02"
            title="Redmi Note 10S (Deep Sea Blue, 6GB RAM, 64GB Storage)"
            price={14900.00}
            image="https://images-eu.ssl-images-amazon.com/images/I/51DzWEDHU6L._SX300_SY300_QL70_FMwebp_.jpg"
          
            />
            
            <Product 
            id="03"
            title="OnePlus 80 cm (32 inches) "
            price={15999.00}
            image="https://m.media-amazon.com/images/I/71vZypjNkPS._SL1500_.jpg"
            />
            <Product 
            id="04"
            title="Fundamentals Analog Blue Dial Women's Watch"
            price={1450.00}
            image="https://m.media-amazon.com/images/I/91fNyxeUNbL._AC_UL480_FMwebp_QL65_.jpg"
          
            />

           <Product 
            id="05"
            title="Amazon Echo Dot (3Rd Gen) Voice Activated Speaker With Clock, White"
            price={3999.00}
            image="https://th.bing.com/th?id=OPA.JGBshSy1Z9UvsA474C474&w=248&h=248&o=5&dpr=1.25&pid=21.1"
          
            />

           <Product 
            id="06"
            title="WIDEWINGS LED Bright Outdoor"
            price={379.00}
            image="https://m.media-amazon.com/images/I/61NLJOLfK+S._SL1108_.jpg"
          
            />
            
            </div>
            <div className="home--row">
            <Product 
            id="07"
            title="Genie Camellia 27 litres Pink School Backpack "
            price={966.00}
            image="https://m.media-amazon.com/images/I/71ghDQNr4GL._SL1500_.jpg"
            />
            <Product 
             id="08"
             title=" ASUS TUF Dash F15 (2021),Graphics Gaming Laptop (16GB RAM/512GB..."
             price={95990.00}
            image="https://m.media-amazon.com/images/I/81mLxU0CcAL._SL1500_.jpg"
            />
            </div>
            <div className="home--row">
            <Product
             id="09"
             title="BIRD'S MIND Virat Kohli Wall Hanging Synthetic Wood Photo "
             price={19000.00}
            image="https://m.media-amazon.com/images/I/81yMRPgRM8S._SL1500_.jpg"
            />
            </div>

          </div>  
        </div>
    )
}

export default Home