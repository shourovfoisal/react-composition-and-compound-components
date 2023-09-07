import { ReactNode } from "react";
interface Props {
	children: ReactNode;
}

export const ProductInfo = ({ children }: Props) => {
	return (
		<div>
			<div className="p-1 bg-slate-200 rounded-sm">ProductInfo</div>
			{children}
		</div>
	);
};
