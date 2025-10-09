import {defineType, defineArrayMember} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  icon: DocumentTextIcon,
  of: [
    defineArrayMember({
      name: 'block',
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            name: 'link',
            title: 'URL',
            type: 'object',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) => [
                  Rule.required().error('URL is required for links'),
                ],
              },
              {
                name: 'blank',
                title: 'Open in new tab',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          validation: (Rule) => [
            Rule.required().error('Alt text is required for accessibility'),
          ],
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
  ],
})
