
export interface BlogPostType {
  id: number;
  title: string;
  slug: string;
  author: string;
  authorImage?: string;
  publishDate: string;
  category: string;
  coverImage: string;
  excerpt: string;
  readingTime: number;
  tableOfContents?: {
    id: string;
    title: string;
  }[];
  content: BlogContentSection[];
  tags?: string[];
}

export type BlogContentSection = 
  | ParagraphSection
  | HeadingSection
  | ImageSection 
  | QuoteSection
  | ListSection
  | DocumentSection;

interface ParagraphSection {
  type: 'paragraph';
  id?: string;
  content: string;
}

interface HeadingSection {
  type: 'heading';
  id: string;
  level: 2 | 3 | 4 | 5 | 6;
  content: string;
}

interface ImageSection {
  type: 'image';
  url: string;
  caption?: string;
  alt?: string;
}

interface QuoteSection {
  type: 'quote';
  content: string;
  author?: string;
}

interface ListSection {
  type: 'list';
  style: 'ordered' | 'unordered';
  items: string[];
}

interface DocumentSection {
  type: 'document';
  title: string;
  description: string;
  url: string;
  fileType: string;
}
