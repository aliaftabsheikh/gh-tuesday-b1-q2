import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './productSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
