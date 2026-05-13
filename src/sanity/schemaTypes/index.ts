import { type SchemaTypeDefinition } from 'sanity'

import show from './show'
import siteSettings from './siteSettings'
import contactSubmission from './contactSubmission'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [show, siteSettings, contactSubmission],
}
