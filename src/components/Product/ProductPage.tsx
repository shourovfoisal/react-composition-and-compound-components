import { ProductCard } from "..";
import { ProductButton } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

export interface Product {
	id: number;
	image: string;
	title: string;
	category: string;
	rating: {
		stars: number;
		reviews: number;
	};
	price: number;
}

const product: Product = {
	id: 1,
	image: "image.jpg",
	title: "This is product title",
	category: "Product category",
	rating: { stars: 4, reviews: 4 },
	price: 8.95,
};

export const ProductPage = () => {
	return (
		<ProductCard
			image={<ProductImage image={product.image} />}
			info={
				<ProductInfo
					title={product.title}
					category={product.category}
					rating={product.rating}
					price={product.price}
				/>
			}
			action={<ProductButton>Add To Cart</ProductButton>}
		/>
	);
};
