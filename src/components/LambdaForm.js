import React from 'react'
import AWS from 'aws-sdk';
import { useState } from 'react';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID ,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});

export const LambdaForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(null);
    const [msg, setMsg] = useState(null);

    const sendToLambda = (e) => {
        const lambda = new AWS.Lambda();
        const payload = {
            name: name,
            address: address,
            quantity: quantity
        }
        const params = {
            FunctionName: "testReact",
            Payload: JSON.stringify(payload),
        };
        return lambda.invoke(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {
                const response = JSON.parse(data.Payload)
                console.log(response);
                setTotalPrice(response.precioTotal);
                setMsg(response.msg)
            }
        });
    }

    return (
        <div>
            <form style={{display: "flex", flexDirection: "column"}}>
                <label>Ingresar nombre:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Ingresar direccion:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <label>Ingresar cantidad:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={()=>sendToLambda()}>Upload</button>
            {totalPrice && (<div>
                <h4>Precio total: </h4>{totalPrice}
                <h4>Mensaje: </h4>{msg}
            </div>)}
        </div>

    )
}
