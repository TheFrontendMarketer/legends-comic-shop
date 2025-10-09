# Image Guidelines for Local Legends Blog

## 📸 Quick Reference

| Content Type        | Size       | Aspect Ratio | Format  | File Size |
| ------------------- | ---------- | ------------ | ------- | --------- |
| **Author Photos**   | 400x400px  | 1:1 (Square) | JPG/PNG | < 100KB   |
| **Featured Images** | 1200x630px | 1.91:1       | JPG/PNG | < 300KB   |
| **Comic Covers**    | 600x900px  | 2:3          | JPG     | < 200KB   |
| **Action Figures**  | 800x800px  | 1:1 (Square) | JPG     | < 150KB   |
| **Event Photos**    | 1200x800px | 3:2          | JPG     | < 250KB   |
| **Body Images**     | 800x600px  | 4:3          | JPG/PNG | < 200KB   |

## 🎯 Detailed Specifications

### Author Profile Images

- **Size**: 400x400px (1:1 aspect ratio)
- **Format**: JPG or PNG
- **Purpose**: Author profile photos in blog posts and author pages
- **Optimization**: Square crop, good for both desktop and mobile
- **Style**: Professional headshots, consistent lighting

### Post Featured Images (Main Images)

- **Size**: 1200x630px (1.91:1 aspect ratio)
- **Format**: JPG or PNG
- **Purpose**: Social media sharing, blog post headers
- **Why this size**: Perfect for Facebook, Twitter, and LinkedIn sharing
- **Alternative**: 1920x1080px for higher resolution displays
- **Style**: Eye-catching, relevant to post content

### Comic Book Covers

- **Size**: 600x900px (2:3 aspect ratio)
- **Format**: JPG
- **Purpose**: Comic book cover displays
- **Why**: Matches standard comic book proportions
- **Style**: High contrast, vibrant colors

### Action Figure Photos

- **Size**: 800x800px (1:1 aspect ratio)
- **Format**: JPG
- **Purpose**: Product photos for collectibles
- **Background**: Clean white or neutral background
- **Lighting**: Even, professional lighting

### Event Photos

- **Size**: 1200x800px (3:2 aspect ratio)
- **Format**: JPG
- **Purpose**: Convention and event coverage
- **Style**: Candid shots, booth displays, signings
- **Quality**: Sharp focus, good composition

### Post Body Images (Inline Images)

- **Size**: 800x600px (4:3 aspect ratio) or 1200x800px
- **Format**: JPG or PNG
- **Purpose**: Images within blog post content
- **Flexibility**: Can be wider for landscape shots

## ⚡ Performance Optimization

### File Size Guidelines

- **Author images**: Under 100KB
- **Featured images**: Under 300KB
- **Body images**: Under 200KB
- **Thumbnails**: Under 50KB

### Format Recommendations

- **JPG**: For photos with lots of colors (comic covers, events)
- **PNG**: For images with transparency or simple graphics
- **WebP**: Modern format for better compression (Sanity supports this)

## 🖼️ Sanity Studio Configuration

Your current schema already includes:

```typescript
options: {
  hotspot: true, // Allows cropping in Sanity Studio
}
```

This means you can:

- Upload larger images and crop them in the studio
- Set focal points for responsive cropping
- Let Sanity handle multiple sizes automatically

## 📱 Responsive Considerations

Sanity will automatically generate:

- **Thumbnails**: 200x200px for previews
- **Medium**: 400-600px for mobile
- **Large**: 800-1200px for desktop
- **Original**: Full resolution for high-DPI displays

## 🎨 Design Tips for Comic Shop

### Brand Consistency

1. **Consistent Lighting**: Use similar lighting and backgrounds
2. **High Contrast**: Ensure text overlays are readable
3. **Comic Aesthetic**: Consider using comic-style borders or effects
4. **Color Consistency**: Match your brand colors (red, blue, green, purple, orange from your categories)

### Content Guidelines

- **Comic Covers**: Show the full cover, avoid cropping important elements
- **Action Figures**: Include multiple angles when possible
- **Event Photos**: Capture the energy and atmosphere
- **Author Photos**: Professional but approachable

## 🔧 Technical Notes

### Upload Process

1. **Prepare images** according to these guidelines
2. **Upload to Sanity Studio** via the media library
3. **Set hotspot** for proper cropping on different screen sizes
4. **Add alt text** for accessibility (required in your schema)

### Alt Text Guidelines

- **Descriptive**: "Spider-Man comic book cover from Amazing Spider-Man #1"
- **Contextual**: Include relevant details about the content
- **Accessible**: Help screen readers understand the image

## 📋 Checklist

Before uploading any image:

- [ ] Correct dimensions for content type
- [ ] File size under recommended limit
- [ ] Appropriate format (JPG/PNG)
- [ ] Good quality and sharp focus
- [ ] Relevant to content
- [ ] Alt text prepared
- [ ] Hotspot set for responsive cropping

## 🚀 Pro Tips

1. **Batch Processing**: Use tools like Photoshop or online resizers for multiple images
2. **Compression**: Use tools like TinyPNG or ImageOptim for file size optimization
3. **Consistency**: Create templates for different image types
4. **Backup**: Keep original high-resolution files
5. **Testing**: Preview images on different devices before publishing

---

_Last updated: January 2024_
_For questions about image guidelines, contact the development team._
