import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const ProductPrice = ({ children }: Props) => {
	return <div>Price: {children}</div>;
};
