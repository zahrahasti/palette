import { it, expect, vi } from 'vitest'
import { usePaletteStore } from '@/stores/palette'
import { createRandomColorPalette } from './colorGenerator'
import { mount } from '@vue/test-utils'
import LikeBtn from '@/components/common/Buttons/LikeBtn/LikeBtn.vue'
import { createTestingPinia } from '@pinia/testing'

const colors = createRandomColorPalette()
it('should initialize the store with localStorage data if available', async () => {
  const wrapper = mount(LikeBtn, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          stubActions: false
        })
      ]
    },
    props: {
      clicked: false,
      colors
    }
  })
  const paletteStore = usePaletteStore()
  const btnLike = wrapper.find('[data-test="btn-like"]')
  await btnLike.trigger('click')
  expect(btnLike.classes()).toContain('bg-gray-100')
  expect(JSON.stringify(paletteStore.colorPalettes)).to.be.equal(JSON.stringify([colors]))

  await btnLike.trigger('click')
  expect(btnLike.classes()).not.toContain('bg-gray-100')
  paletteStore.removeColorPalette(colors)
  expect(paletteStore.colorPalettes).to.be.empty
})
