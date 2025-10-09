import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Author name is required'),
        Rule.max(100).warning('Author name should be less than 100 characters'),
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => [
        Rule.required().error('Slug is required for URL generation'),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Author profile photo',
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
      description: 'Brief biography of the author',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
