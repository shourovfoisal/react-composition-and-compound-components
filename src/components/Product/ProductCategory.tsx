interface Props {
	category?: string;
}

export const ProductCategory = ({ category }: Props) => {
	return <div>{category}</div>;
};
