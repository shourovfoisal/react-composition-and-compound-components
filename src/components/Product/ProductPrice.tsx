interface Props {
	price?: number;
}

export const ProductPrice = ({ price }: Props) => {
	return <div>{price}</div>;
};
