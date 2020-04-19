import { transformedDataInterface } from '../../types/transformer'
import {default as transformer, getField } from './transformerModule'

export default async (data) => {
  return transformer(data, async (data): Promise<transformedDataInterface> => {
    // return format
    return <transformedDataInterface>{
      id: data.sys.id,
      createdAt: data.sys.createdAt,
      updatedAt: data.sys.updatedAt,
      fields: {
        type: data.sys.contentType.sys.id,
        classes: getField(data, 'classes', []).join(' '),
        items: getField(data, 'sections')
      }
    }
  })
}
// let sections = {
//   items: [data]
// }
// // overwrite if already a section
// if (data.sys.contentType.sys.id === 'section') {
//   sections = {
//     items: this.getContent(data, 'sections'),
//     classes: (this.getContent(data, 'classes') || []).join(' ')
//   }
// }
// // transform items
// sections.items = sections.items.map(section => {
//   return new Transform[section.sys.contentType.sys.id](section).first()
// })
//
// return sections
