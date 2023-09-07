interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export const ProductButton = ({ children }: Props) => {
	return (
		<>
			<div className="p-1 bg-slate-200 rounded-sm">ProductImage</div>
			<div>{children}</div>
		</>
	);
};
