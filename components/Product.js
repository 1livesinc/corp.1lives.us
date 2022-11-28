/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import toast from "react-hot-toast";
import {useRecoilState} from "recoil"
import { cartState } from "../atoms/cartState";


const Product = ({product}) => {

    const [cartItem, setCartItem] = useRecoilState(cartState)

    const addItemToCart = ()=> {

        if(cartItem.findIndex(pro => pro.id === product.id) === -1){
            setCartItem(prevState => [...prevState, product] )
        }else{
            setCartItem(prevState => {
                return prevState.map((item)=> {
                    return item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                })
            })
        }
                toast(`${product.name} added to cart`)
    }

  return (
    <div className="card p-2">
      <Link href={`/product/${product.slug}`} >
        <img
       
          src={product.image}
          alt={product.name}
          className="rounded shadow "
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">Brand: {product.brand}</p>
        <p className="mb-2">${product.price}</p>
        <button className="primary-button" type="button" onClick={addItemToCart}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product