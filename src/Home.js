import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product';
import { db } from './firebase'
import Slide from './Slide'

function Home() {
    const [products, setProducts] = useState([])
    const [clothes, setClothes] = useState([])

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = []
            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        })
    }

    const getClothes = () => {
        db.collection('Clothes').onSnapshot((snapshot) => {
            let tempClothes = []
            tempClothes = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    clothes: doc.data()
                }
            ));
            setClothes(tempClothes);
        })
    }

    useEffect(() => {
        console.log("Call products");
        getProducts()
        getClothes()
    }, [])


    return (
        <Container>
            <Slide />
            <h1>Electronics</h1>
            <hr />
            <Content>
                {
                    products.map((data) => (
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    ))
                }
            </Content>
            <h1>Clothing</h1>
            <hr />
            <Content>
                {
                    clothes.map((data) => (
                        <Product
                            title={data.clothes.name}
                            price={data.clothes.price}
                            rating={data.clothes.rating}
                            image={data.clothes.image}
                            id={data.id}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    h1{
            margin-top: 30px;
    }
    
`

const Content = styled.div`
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        flex-direction: row;
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 900px){
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 0;
            margin-top: 10px;
        }
        
`
