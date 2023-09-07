import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const ProductCategory = ({ children }: Props) => {
	return <div>{children}</div>;
};
