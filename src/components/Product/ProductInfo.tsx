import { ProductCategory } from "./ProductCategory";
import { Product } from "./ProductPage";
import { ProductPrice } from "./ProductPrice";
import { ProductRating } from "./ProductRating";
import { ProductTitle } from "./ProductTitle";

interface Props {
	title?: string;
	category?: string;
	rating?: Product["rating"];
	price?: number;
}

export const ProductInfo = ({ title, category, rating, price }: Props) => {
	return (
		<div>
			<div className="p-1 bg-slate-200 rounded-sm">ProductInfo</div>
			<ProductTitle title={title} />
			<ProductCategory category={category} />
			<ProductRating rating={rating} />
			<ProductPrice price={price} />
		</div>
	);
};
