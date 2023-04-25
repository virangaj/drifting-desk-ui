function SolidButton({ title, className }: any) {
	return (
		<button
			className={`${
				className && className
			} solid-btn primary-btn  border border-primary`}
		>
			{title}
		</button>
	);
}

export default SolidButton;
