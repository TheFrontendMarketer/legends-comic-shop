import type {StructureResolver} from 'sanity/structure'
import {
  createContentGroup,
  createPostsByCategory,
  createPostStatusList,
  createFeaturedPostsList,
  createAdminSection,
} from './helpers'

export const structure: StructureResolver = (S, context) => {
  // Check if user is administrator
  const isAdmin = context.currentUser?.roles.find((role) => role.name === 'administrator')
  
  return S.list()
    .title('Local Legends')
    .items([
      // Content Management
      createContentGroup(S),
      
      S.divider(),
      
      // Posts by Category (Dynamic filtered lists)
      createPostsByCategory(S),
      
      S.divider(),
      
      // Post Status Views
      S.listItem()
        .title('Post Status')
        .child(
          S.list()
            .title('Post Status')
            .items([
              createFeaturedPostsList(S),
              createPostStatusList(S, 'published', 'Published Posts'),
              createPostStatusList(S, 'draft', 'Draft Posts'),
              createPostStatusList(S, 'archived', 'Archived Posts'),
            ])
        ),
      
      // Admin-only section
      ...(isAdmin ? [
        S.divider(),
        createAdminSection(S),
      ] : []),
    ])
}
