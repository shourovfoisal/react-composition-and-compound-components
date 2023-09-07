import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const ProductRating = ({ children }: Props) => {
	return <div>Stars: {children}</div>;
};
