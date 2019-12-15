import React from 'react'

const ArrowRight = ({ className }) => (
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
					d="M4.91633 19.243C5.01897 19.3465 5.15844 19.4051 5.30419 19.4059C5.37652 19.4066 5.44823 19.3925 5.51493 19.3645C5.58162 19.3364 5.64189 19.2951 5.69205 19.243L14.8378 10.0973C14.8891 10.0466 14.9299 9.98619 14.9577 9.91961C14.9856 9.85303 14.9999 9.78158 14.9999 9.70941C14.9999 9.63725 14.9856 9.5658 14.9577 9.49922C14.9299 9.43264 14.8891 9.37225 14.8378 9.32156L5.69205 0.173898C5.64176 0.12014 5.58117 0.0770482 5.51389 0.0471864C5.44661 0.0173246 5.374 0.00130339 5.3004 7.6268e-05C5.2268 -0.00115086 5.1537 0.0124412 5.08546 0.0400435C5.01722 0.0676458 4.95523 0.108694 4.90318 0.160746C4.85113 0.212797 4.81008 0.274789 4.78248 0.34303C4.75487 0.411271 4.74128 0.484368 4.74251 0.55797C4.74374 0.631571 4.75976 0.704174 4.78962 0.771458C4.81948 0.838741 4.86257 0.899329 4.91633 0.949616L13.6742 9.70941L4.91633 18.4673C4.8652 18.5181 4.82462 18.5785 4.79694 18.6451C4.76925 18.7117 4.75499 18.783 4.75499 18.8551C4.75499 18.9272 4.76925 18.9986 4.79694 19.0652C4.82462 19.1317 4.8652 19.1922 4.91633 19.243V19.243Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d"
					x="0.742432"
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
export default ArrowRight
