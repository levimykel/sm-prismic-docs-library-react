import {
  PropTypes as DefaultPropTypes,
  arrayOf,
  shape,
  number,
  string,
  bool,
} from 'prop-types'

export const booleanType = bool

export const documentType = ({ data }) => (
  shape({
    id: string.isRequired,
    uid: string,
    type: string.isRequired,
    first_publication_date: string,
    last_publication_date: string,
    data: shape(data),
  })
)

export const embedType = shape({
  html: string,
  thumbnail_url: string,
})

export const groupType = (fields) => arrayOf(shape(fields))

export const imageType = shape({
  alt: string,
  url: string,
})

export const keyTextType = string

export const linkType = shape({
  id: string,
  type: string,
  lang: string,
  uid: string,
  link_type: string,
  isBroken: bool,
})

export const richTextType = arrayOf(shape({
  type: string.isRequired,
  text: string.isRequired,
  spans: arrayOf(shape({
    start: number,
    end: number,
    type: string,
    data: shape({
      label: string,
      link_type: string,
      url: string,
      target: string,
      id: string,
      type: string,
      lang: string,
      uid: string,
      isBroken: bool,
    }),
  })),
}))

export const selectType = string

export const sliceType = ({ primary, items }) => (
  shape({
    slice_type: string.isRequired,
    slice_label: string,
    items: arrayOf(shape(items)),
    primary: shape(primary),
  })
)

export const sliceZoneType = arrayOf(sliceType({}))

export const tagsType = arrayOf(string)

export const PropTypes = DefaultPropTypes

const PrismicTypes = {
  boolean: booleanType,
  document: documentType,
  embed: embedType,
  group: groupType,
  image: imageType,
  keyText: keyTextType,
  link: linkType,
  richText: richTextType,
  select: selectType,
  slice: sliceType,
  sliceZone: sliceZoneType,
  tags: tagsType,
}

export default PrismicTypes
