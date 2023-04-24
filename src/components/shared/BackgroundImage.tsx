import HeroTexture from '../../images/hero-texture.png';
function BackgroundImage() {
	return (
		<div
			id='back-img'
			style={{
				background: `url(${HeroTexture}) center no-repeat`,
				backgroundSize: '100%',
				position: 'absolute',
				zIndex: -10,
				height: '500px',
				top: '80px',
				overflow: 'hidden',
				width: '100%',
				transform: 'scaleY(2)',
			}}
		></div>
	);
}

export default BackgroundImage;
