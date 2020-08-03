import React from "react";
import RelatedProducts from "./RelatedProducts";
import AppleProducts from "./AppleProducts";

export default function SingleProduct(config) {


    return (
        <div>
            <AppleProducts config={config}/>
        </div>
    );
}
