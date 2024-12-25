import { type SchemaTypeDefinition } from 'sanity'
import blogs from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs],
}
