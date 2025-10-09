import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Category title is required'),
        Rule.max(50).warning('Category title should be less than 50 characters'),
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => [
        Rule.required().error('Slug is required for URL generation'),
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'Brief description of what this category covers',
    }),
    defineField({
      name: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Purple', value: 'purple'},
          {title: 'Orange', value: 'orange'},
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
      description: 'Color theme for this category',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
