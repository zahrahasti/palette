import type { ShallowRef } from 'vue'
import { secretKey, supabaseUrl } from '@/lib/supabaseClient'
import { nextTick, shallowRef } from 'vue'
const colorPalettes: ShallowRef<{ colors: any }[]> = shallowRef([])
const offset = shallowRef(0)
const isLoading = shallowRef(false)
const fetchPalettes = async (tagColor: string) => {
  if (isLoading.value) return
  isLoading.value = true

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/color_palettes?select=colors&category=eq.${tagColor}&offset=${offset.value}&limit=4`,
      {
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json'
        }
      }
    )
    const data = await response.json()
    console.log(data)
    if (data.length > 0) {
      colorPalettes.value = [...colorPalettes.value, ...data]
      offset.value += 4
    }
  } catch (error) {
    throw Error(error instanceof Error ? error.message : String(error))
  } finally {
    isLoading.value = false
    nextTick()
  }
}

export { fetchPalettes, colorPalettes }
