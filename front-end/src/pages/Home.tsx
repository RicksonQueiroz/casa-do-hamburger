import { useEffect, useState, type SetStateAction } from "react";
import Products from "../components/Products";
import type { ProductType } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [product, setProduct] = useState<ProductType[]>([]);

  const handleDeleteProduct = (id: number) => {
    setProduct((prev) => prev.filter((p) => p.id !== id));
  };
  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/product");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleCategory = (newCategory: SetStateAction<string>) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const selected =
      "w-24 text-sm font-bold md:text-md cursor-pointer border border-[#f2daac] md:w-32 rounded-md bg-[#f2daac] text-black h-7 md:h-[35px] flex justify-center items-center";
    const notSelected =
      "w-24 text-sm font-bold md:text-md cursor-pointer border border-[#f2daac] md:w-32 rounded-md bg-[#161410] text-[#f2daac] h-7 md:h-[35px] flex justify-center items-center hover:bg-[#f2daac] hover:text-black";

    return category === categoryName ? selected : notSelected;
  };

  const filteredProducts = product.filter((p) => p.category === category);

  return (
    <div className="text-white md:w-[737px] mx-auto w-full px-3 md:px-0">
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
        {product
          .filter((p) => p.category === category)
          .map((p) => (
            <Products key={p.id} {...p} onDelete={handleDeleteProduct} />
          ))}

        {filteredProducts.length === 0 && (
          <p className="text-white">Não há produtos nesta categoria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
