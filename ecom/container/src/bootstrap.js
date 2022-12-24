import { mount as ProductMount } from "products/ProductsIndex";
import { mount as CartMount } from "carts/CartShow";

ProductMount(document.querySelector("#my-products"));
CartMount(document.querySelector("#my-carts"));
console.log("Container");
