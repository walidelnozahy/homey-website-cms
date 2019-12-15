import React from 'react'

const ArrowLeft = ({ className }) => (
	<div className={className}>
		<svg
			width="19"
			height="28"
			viewBox="0 0 19 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d)">
				<path
					d="M14.0837 0.162922C13.981 0.05944 13.8416 0.000862362 13.6958 2.17356e-05C13.6235 -0.000655436 13.5518 0.0134429 13.4851 0.041454C13.4184 0.0694652 13.3581 0.110799 13.308 0.162922L4.16223 9.30864C4.11087 9.35933 4.07009 9.41972 4.04225 9.48631C4.01441 9.55289 4.00008 9.62433 4.00008 9.6965C4.00008 9.76867 4.01441 9.84011 4.04225 9.9067C4.07009 9.97328 4.11087 10.0337 4.16223 10.0844L13.308 19.232C13.3582 19.2858 13.4188 19.3289 13.4861 19.3587C13.5534 19.3886 13.626 19.4046 13.6996 19.4058C13.7732 19.4071 13.8463 19.3935 13.9145 19.3659C13.9828 19.3383 14.0448 19.2972 14.0968 19.2452C14.1489 19.1931 14.1899 19.1311 14.2175 19.0629C14.2451 18.9946 14.2587 18.9215 14.2575 18.8479C14.2563 18.7743 14.2402 18.7017 14.2104 18.6345C14.1805 18.5672 14.1374 18.5066 14.0837 18.4563L5.32581 9.6965L14.0837 0.93864C14.1348 0.887815 14.1754 0.827384 14.2031 0.76082C14.2308 0.694256 14.245 0.622874 14.245 0.550781C14.245 0.478688 14.2308 0.407307 14.2031 0.340743C14.1754 0.27418 14.1348 0.213746 14.0837 0.162922V0.162922Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d"
					x="0.00012207"
					y="0"
					width="18.2575"
					height="27.4059"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	</div>
)
export default ArrowLeft
