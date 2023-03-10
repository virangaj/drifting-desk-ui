function SolidButton({ title, className }: any) {
	return (
		<button className={`${className && className} btn primary-btn`}>
			{title}
		</button>
	);
}

export default SolidButton;
