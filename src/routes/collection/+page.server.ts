import { load as loadColors } from '../+page.server';
 import { load as dynamicColors } from '../create/+page.server';
const { colors } = loadColors();
export function load() {
	return { colors ,dynamicColors:dynamicColors().colors};
}

export const actions = {
	removeColor: async ({ request }) => {
		const formData = await request.formData();
		const hiddenData: FormDataEntryValue | null = `${formData.get('hidden')}`;
		const data = hiddenData ? JSON.parse(hiddenData) : {};
		const foundObjectIndex = colors.findIndex((obj) => {
			return (
				obj.isLike === data.isLike &&
				obj.colors.every((color, index) => color === data.colors[index])
			);
		});
		if (foundObjectIndex !== -1) colors.splice(foundObjectIndex, 1);
	}
};
