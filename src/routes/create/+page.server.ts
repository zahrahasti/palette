
const colors: { isLike: boolean; colors: string[] }[] = [];
export function load() {
	return { colors };
}

export const actions = {
	addToCreation: async ({ request }) => {
		const formData = await request.formData();
		const hiddenData: FormDataEntryValue | null = `${formData.get('hidden')}`;
		const data = hiddenData ? JSON.parse(hiddenData) : {};
		colors.push(data);
 	}
}