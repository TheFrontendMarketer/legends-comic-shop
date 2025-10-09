import {defineField, defineType, defineArrayMember} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule) => [
        Rule.required().error('Post title is required'),
        Rule.max(100).warning('Post title should be less than 100 characters'),
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => [
        Rule.required().error('Slug is required for URL generation'),
      ],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      group: 'content',
      rows: 3,
      description: 'Brief summary of the post for previews and SEO',
      validation: (Rule) => [
        Rule.max(200).warning('Excerpt should be less than 200 characters'),
      ],
    }),
    defineField({
      name: 'author',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'reference', to: {type: 'author'}})],
      validation: (Rule) => [
        Rule.required().error('At least one author is required'),
      ],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      group: 'content',
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
      ],
      validation: (Rule) => [
        Rule.required().error('Featured image is required'),
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      group: 'content',
      validation: (Rule) => [
        Rule.required().error('Post content is required'),
      ],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      group: 'settings',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => [
        Rule.required().error('Publication date is required'),
      ],
    }),
    defineField({
      name: 'status',
      type: 'string',
      group: 'settings',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Published', value: 'published'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => [
        Rule.required().error('Post status is required'),
      ],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      group: 'settings',
      initialValue: false,
      description: 'Mark this post as featured',
    }),
    defineField({
      name: 'seoTitle',
      type: 'string',
      group: 'seo',
      description: 'Custom SEO title (defaults to post title)',
      validation: (Rule) => [
        Rule.max(60).warning('SEO title should be less than 60 characters'),
      ],
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Custom SEO description (defaults to excerpt)',
      validation: (Rule) => [
        Rule.max(160).warning('SEO description should be less than 160 characters'),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.0.name',
      media: 'mainImage',
      status: 'status',
    },
    prepare(selection) {
      const {author, status} = selection
      return {
        ...selection,
        subtitle: `${author ? `by ${author}` : 'No author'} • ${status || 'draft'}`,
      }
    },
  },
})
