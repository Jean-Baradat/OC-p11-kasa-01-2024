import { headingImages } from "@/utils/ImportImages"

export const getImageUrl = file => {
	return headingImages[file]
}
