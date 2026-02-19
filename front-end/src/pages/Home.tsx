import { useEffect, useState, type SetStateAction } from "react";
import { Link } from "react-router";
import Product from "../components/Product";
import type { ProductType } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [product, setProduct] = useState<ProductType[]>([]);
  const filteredProducts = product.filter((singleProduct) => {
    return singleProduct.category == category;
  });
  console.log(filteredProducts);
  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/product");
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleCategory = (newCategory: SetStateAction<string>) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: String) => {
    const selectedElement =
      "w-24 text-sm font-bold md:text-md cursor-pointer border-1 border-[#f2daac] md:w-32 rounded-md bg-[#f2daac] text-black  h-7 md:h-[35px]  flex justify-center items-center";
    const notSelectedElement =
      "w-24 text-sm font-bold md:text-md cursor-pointer border-1 border-[#f2daac] md:w-32 rounded-md bg-[#161410] text-[#f2daac]  h-7 md:h-[35px]  flex justify-center items-center hover:bg-[#f2daac] hover:text-black";
    if (category == categoryName) {
      return selectedElement;
    } else {
      return notSelectedElement;
    }
  };
  return (
    <div className="text-white md:w-[737px]  mx-auto w-full px-3 md:px-0">
      <div className="flex gap-3 md:py-4 py-1">
        <div
          className={getCategoryClass("Hamburguer")}
          onClick={() => handleCategory("Hamburguer")}
        >
          Hambúrguer
        </div>

        <div
          className={getCategoryClass("Bebidas")}
          onClick={() => handleCategory("Bebidas")}
        >
          Bebidas
        </div>

        <div
          className={getCategoryClass("Porções")}
          onClick={() => handleCategory("Porções")}
        >
          Porções
        </div>
      </div>
      <p className="uppercase gap-2 font-bold text-[#f2daac] mb-2">
        {category}
      </p>
      <div className="flex flex-col gap-1 md:gap-4">
        {filteredProducts.map(
          (product: {
            category: string;
            id: number;
            name: string;
            image: string;
            price: number;
            description: string;
          }) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ),
        )}
        {filteredProducts.length == 0 && (
          <p className="text-white">Não há produtos nesta categoria.</p>
        )}
      </div>
    </div>
  );
};
export default Home;
