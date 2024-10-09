import type { Story, Variant } from 'histoire'

type Meta = {
  wrapper?: boolean
}
type StoryWithMeta = Story & {
  meta?: Meta
}
type VariantWithMeta = Variant & {
  meta?: Meta
}
export type { StoryWithMeta, VariantWithMeta }
