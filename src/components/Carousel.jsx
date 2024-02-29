import React, { useEffect, useState } from "react"
import { PropTypes } from "prop-types"
import carouselIcon from "@/assets/images/chevron-icon.svg"

const Carousel = ({ pictures }) => {
	const [carouselImageList, setCarouselImageList] = useState([
		`<img src=${pictures[0]} alt="" />`,
	])
	const [index, setIndex] = useState(0)

	useEffect(() => {
		let newCarouselImageList = [...carouselImageList]

		let alt = `${index + 1}${
			index === 0 ? "ère" : "ème"
		} image de l'appartement`

		newCarouselImageList[index] = `<img src=${pictures[index]} alt="${alt}" />`

		setCarouselImageList(newCarouselImageList)
		// eslint-disable-next-line
	}, [index])

	const loadAllCarouselSlide = () => {
		if (index === 0 && carouselImageList.length !== pictures.length) {
			let newCarouselImageList = [...carouselImageList]

			pictures.forEach((picture, index) => {
				let alt = `${index + 1}${
					index === 0 ? "ère" : "ème"
				} image de l'appartement`

				newCarouselImageList[index] = `<img src=${picture} alt="${alt}" />`

				setCarouselImageList(newCarouselImageList)
			})
		}
	}

	const handleClickNext = () => {
		setIndex(prevIndex => (prevIndex + pictures.length + 1) % pictures.length)
	}

	const handleClickPrevious = () => {
		loadAllCarouselSlide()
		setIndex(prevIndex => (prevIndex + pictures.length - 1) % pictures.length)
	}

	return (
		<div className="carousel">
			{pictures.length > 1 && (
				<>
					<button
						className="btn-previous btn remove-btn-default-style"
						onClick={handleClickPrevious}
					>
						<img
							src={carouselIcon}
							alt="Aller à gauche"
						/>
					</button>
					<button
						className="btn-next btn remove-btn-default-style"
						onClick={handleClickNext}
					>
						<img
							src={carouselIcon}
							alt="Aller à droite"
						/>
					</button>
				</>
			)}

			<div
				className="slide-container"
				style={{
					transform: `translateX(${-100 * index}%)`,
				}}
			>
				{pictures.map((_, key) => {
					return (
						<div
							className={`slide${index === key ? " active" : ""}`}
							// eslint-disable-next-line
							key={key}
							dangerouslySetInnerHTML={{
								__html: carouselImageList[key],
							}}
						/>
					)
				})}
			</div>
		</div>
	)
}

Carousel.propTypes = {
	pictures: PropTypes.arrayOf(PropTypes.string),
}

export default Carousel
