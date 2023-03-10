function SolidButton({ title, className }: any) {
	return (
		<button className={`${className && className} solid-btn primary-btn`}>
			{title}
		</button>
	);
}

export default SolidButton;
