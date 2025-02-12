import { Brands } from "../components/home/Brands"
import { FeatureGrid } from "../components/home/FeatureGrid"
import { ProductGrid } from "../components/home/ProductGrid"
import { allCelulares, popularCelulares, recentCelulares } from "../data/initialData"
import { prepareProducts } from "../helpers"

export const HomePage = () => {
    const preparedRecentProducts = prepareProducts(recentCelulares);
    const preparedPopularProducts = prepareProducts(popularCelulares);

    return (
        <div>
            <FeatureGrid />

            <ProductGrid
                title='Nuevos productos'
                products={preparedRecentProducts}
            />

            <ProductGrid
                title='Productos Desctacados'
                products={preparedPopularProducts}
            />

            <Brands />


        </div>
    )
}