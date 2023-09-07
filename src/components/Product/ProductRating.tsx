import { Product } from "./ProductPage";

interface Props {
	rating?: Product["rating"];
}

export const ProductRating = ({ rating }: Props) => {
	return (
		<div>
			Reviews: {rating?.reviews} | Stars: {rating?.stars}
		</div>
	);
};
