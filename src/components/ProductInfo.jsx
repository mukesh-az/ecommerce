
import { useState, useEffect } from 'react';
import {CardWrapper, flexStyles} from "../style/cardWrapper";

import styled, { css } from "styled-components";
import Card from 'react-bootstrap/Card';
import productsData from '../data/products.json';
import CardImage from '../components/cardImage';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom'
import { useParams } from "react-router";
import AddToCartButton from '../components/AddToCartButton';


const ProductInfo = () => {
  let params = useParams();
  
  const [product, setProduct] = useState();

   



    const handleOnChange = (e, type) => {
      console.log("ENTERED:");
  

  };

    useEffect(() => {

       const foundProduct = productsData.find(item => item.id.toString() === params.id);
       if (!foundProduct) {
         window.location.href = `/No-Record-Found`;
         return;
       }
       setProduct(foundProduct);
    }, []);



  return (
    <>
    {product && (
      <div class="row mt-3">
        <div class="col-2"></div>

  <div class="col-8">
     <div className="d-flex flex-row" style={{ maxWidth: '100%', justifyContent: 'left', flexWrap: 'wrap'
      } }>

            <div class="row">
              <div class="col-6">
                <CardImage text="img-1" height="300px" />
              </div>
              <div class="col-6">

                    <Card
                      bg={"light"}
                      key={product.id}
                      style={{ width: '45rem', marginBottom: '1rem', marginRight: '1rem' }}
                    >
                      <Card.Header>{product.title}</Card.Header>
                      <Card.Body>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Header>

                         <AddToCartButton product={product} />

                        </Card.Header>
                    </Card>
                
              </div>
            </div>


      
      </div>

  </div>
  <div class="col-2"></div>

</div>)}
</>
  )
}

export default ProductInfo
