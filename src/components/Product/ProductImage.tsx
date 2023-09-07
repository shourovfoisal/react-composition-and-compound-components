interface Props {
	image?: string;
}

export const ProductImage = ({ image }: Props) => {
	return (
		<>
			<div className="p-1 bg-slate-200 rounded-sm">Product Image</div>
			<div>{image}</div>
		</>
	);
};
