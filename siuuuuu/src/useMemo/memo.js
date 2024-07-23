import { useMemo, useState } from "react";

export const ProductList = ({ products }) => {
    const [selectProduct, setSelectProduct] = useState([]);
    const totalPrice = useMemo(() => {
      console.log("render");
      return selectProduct.reduce((total, product) => total + product.price, 0);
    }, [selectProduct]);
    const toggleProduct = (product) => {
      setSelectProduct((prevSelected) =>
        prevSelected.includes(product)
          ? prevSelected.filter((p) => p !== product)
          : [...prevSelected, product]
      );
    };
    return (
      <>
        <div>
          <h1>Total Price : ${totalPrice}</h1>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name}-${product.price}
                <button onClick={() => toggleProduct(product)}>
                  {selectProduct.includes(product) ? "Remove" : "Add"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );

  //không sử dụng memo
//   const [selectProduct, setSelectProduct] = useState([]);

//   const totalPrice = selectProduct.reduce((total, product) => {
//     console.log("Tính toán lại tổng giá trị");
//     return total + product.price;
//   }, 0);

//   const toggleProduct = (product) => {
//     setSelectProduct((prevSelected) =>
//       prevSelected.includes(product)
//         ? prevSelected.filter((p) => p !== product)
//         : [...prevSelected, product]
//     );
//   };

//   return (
//     <div>
//       <h1>Total Price: ${totalPrice}</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <button onClick={() => toggleProduct(product)}>
//               {selectProduct.includes(product) ? "Remove" : "Add"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
};
