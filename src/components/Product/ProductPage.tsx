import { ProductCard } from "..";
import { ProductButton } from "./ProductButton";
import { ProductCategory } from "./ProductCategory";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { ProductPrice } from "./ProductPrice";
import { ProductRating } from "./ProductRating";
import { ProductTitle } from "./ProductTitle";

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
				<ProductInfo>
					<ProductCategory>{product.category}</ProductCategory>
					<ProductTitle>{product.title}</ProductTitle>
					<ProductRating>{product.rating.stars}</ProductRating>
					<ProductPrice>{product.price}</ProductPrice>
				</ProductInfo>
			}
			action={<ProductButton>Add To Cart</ProductButton>}
		/>
	);
};
