import { useSearch } from "../contexts/Search";
import ProductCard from "../components/ProductCardM";
import SearchProductCard from "../components/cards/SearchProductCard";
import Jumbotron from "../components/cards/Jumbotron";

export default function Search() {
  const [values, setValues] = useSearch();

  console.log(values);

  return (
    <>
      <Jumbotron
        title="Search results"
        subTitle={
          values?.results?.length < 1
            ? "No products found"
            : `Found ${values?.results?.length} products`
        }
      />

      <div className="container mt-3">
        <div className="row">
          {values?.results?.map((p) => (
            <div key={p._id} className="col-md-4">
              {/* <ProductCard product={p} /> */}
              <SearchProductCard product={p}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
