/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CartList = ({data}) => {

const {name, image, quantity, price} = data;

  return (
    <div>
        <div className="bg-white max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-center">

            <img className="h-[100px]" src={image} alt="" />

            <div>
                <div className="font-bold text-2x1">{name}</div>
                <div>Qty: {quantity}</div>
            </div>


            <div className="text-3xl font-bold">${price * quantity}</div>

        </div>



    </div>
  )
}

export default CartList