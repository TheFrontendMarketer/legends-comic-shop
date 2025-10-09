import type {StructureBuilder} from 'sanity/structure'

/**
 * Helper function to create filtered post lists by status
 */
export const createPostStatusList = (S: StructureBuilder, status: string, title: string) =>
  S.listItem()
    .title(title)
    .child(
      S.documentList()
        .apiVersion('2024-06-01')
        .title(title)
        .schemaType('post')
        .filter(`_type == "post" && status == "${status}"`),
    )

/**
 * Helper function to create filtered post lists by featured status
 */
export const createFeaturedPostsList = (S: StructureBuilder) =>
  S.listItem()
    .title('Featured Posts')
    .child(
      S.documentList()
        .apiVersion('2024-06-01')
        .title('Featured Posts')
        .schemaType('post')
        .filter('_type == "post" && featured == true'),
    )

/**
 * Helper function to create posts by category structure
 */
export const createPostsByCategory = (S: StructureBuilder) =>
  S.listItem()
    .title('Posts by Category')
    .child(
      S.documentTypeList('category')
        .title('Posts by Category')
        .child((categoryId) =>
          S.documentList()
            .apiVersion('2024-06-01')
            .title('Posts')
            .filter('_type == "post" && $categoryId in categories[]._ref')
            .params({categoryId}),
        ),
    )

/**
 * Helper function to create content management group
 */
export const createContentGroup = (S: StructureBuilder) =>
  S.listItem()
    .title('Content')
    .child(
      S.list()
        .title('Content')
        .items([
          S.documentTypeListItem('post').title('Blog Posts'),
          S.documentTypeListItem('author').title('Authors'),
          S.documentTypeListItem('category').title('Categories'),
        ])
    )

/**
 * Helper function to create admin section
 */
export const createAdminSection = (S: StructureBuilder) =>
  S.listItem()
    .title('Administration')
    .child(
      S.list()
        .title('Administration')
        .items([
          S.listItem()
            .title('All Documents')
            .child(
              S.list()
                .title('All Documents')
                .items(S.documentTypeListItems()),
            ),
        ])
    )
