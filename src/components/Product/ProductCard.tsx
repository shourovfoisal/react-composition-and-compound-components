import { ReactNode } from "react";

// all items should be optional
interface Props {
	image?: ReactNode;
	info?: ReactNode;
	action?: ReactNode;
}

export const ProductCard = ({ image, info, action }: Props) => {
	return (
		<div className="flex flex-col gap-3">
			{image}
			{info}
			{action}
		</div>
	);
};
