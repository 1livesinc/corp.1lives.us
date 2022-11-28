import Hero from "../components/Hero";
import  Layout  from "../components/Layout";
import Product from "../components/Product";
import data from "../utils/data";
import { sliderdata } from '../utils/DataSource';

export default function Home() {
  return (


   <Layout title="Home Page">
    <Hero sliderdata={sliderdata}/>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {data.map((product) => (
                <Product product={product} key={product.slug}></Product>
              )
              
              )}
            </div>
   </Layout>

  );
}
