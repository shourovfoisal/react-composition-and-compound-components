import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const ProductTitle = ({ children }: Props) => {
	return <div>{children}</div>;
};
