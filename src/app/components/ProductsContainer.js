export default function ProductsContainer() {
    const products = async () => {
        try {
            const res = await fetch("https://api.printify.com/v1/shops/:shop_id/products.json");
            const data = await res.json();
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    }
}