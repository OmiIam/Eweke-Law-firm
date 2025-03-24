
import { BlogPostType } from '../types/blog';

// Mock data for blog posts
export const getMockBlogPosts = (): BlogPostType[] => {
  return [
    {
      id: 1,
      title: "New Companies and Allied Matters Act: Implications for Nigerian Businesses",
      slug: "cama-act-implications-nigerian-businesses",
      author: "Barrister Emmanuel J. Eweke",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      publishDate: "May 15, 2023",
      category: "Corporate Law",
      coverImage: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      excerpt: "An in-depth analysis of the revised Companies and Allied Matters Act (CAMA) 2020 and its significant implications for corporate governance, compliance, and business operations in Nigeria.",
      readingTime: 8,
      tableOfContents: [
        { id: "introduction", title: "Introduction to CAMA 2020" },
        { id: "key-changes", title: "Key Changes in the New Act" },
        { id: "compliance", title: "Compliance Requirements" },
        { id: "implications", title: "Implications for Businesses" },
        { id: "recommendations", title: "Recommendations for Companies" }
      ],
      content: [
        {
          type: "paragraph",
          id: "introduction",
          content: "The Companies and Allied Matters Act (CAMA) 2020 represents the most significant business legislation reform in Nigeria in the past three decades. Signed into law on August 7, 2020, it replaces the previous CAMA 1990 and introduces sweeping changes designed to enhance ease of doing business, improve corporate governance, and align Nigerian business practices with global standards."
        },
        {
          type: "heading",
          id: "key-changes",
          level: 2,
          content: "Key Changes in the New Act"
        },
        {
          type: "list",
          style: "unordered",
          items: [
            "Introduction of single-member/shareholder companies",
            "Provision for electronic filing, electronic share transfers, and meetings",
            "Introduction of Statement of Compliance",
            "Limited Liability Partnerships and Limited Partnerships",
            "Enhanced disclosure requirements for persons with significant control",
            "Introduction of Company Voluntary Arrangements, Administration, and Netting"
          ]
        },
        {
          type: "quote",
          content: "The new CAMA represents a bold and commendable effort to reform Nigeria's business environment and ensure it keeps pace with global business innovations and dynamics.",
          author: "Nigerian Bar Association"
        },
        {
          type: "heading",
          id: "compliance",
          level: 2,
          content: "Compliance Requirements"
        },
        {
          type: "paragraph",
          content: "All existing companies must comply with the new provisions of CAMA 2020. This includes updating company documents, reviewing existing structures, and ensuring that necessary disclosures are made in line with the new requirements. Non-compliance with provisions of the Act may result in penalties, including fines, imprisonment, or both, depending on the nature of the violation."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          caption: "Nigerian businesses must adapt to comply with the new CAMA 2020 regulations"
        },
        {
          type: "heading",
          id: "implications",
          level: 2,
          content: "Implications for Businesses"
        },
        {
          type: "paragraph",
          content: "The Act has significant implications for businesses operating in Nigeria, including streamlined company registration processes, increased protection for minority shareholders, and enhanced corporate governance standards. The introduction of a framework for business rescue provides viable alternatives to liquidation, allowing distressed companies opportunities for recovery."
        },
        {
          type: "document",
          title: "CAMA 2020 Full Text",
          description: "Download the complete Companies and Allied Matters Act 2020 as enacted by the National Assembly of Nigeria.",
          url: "#document-url",
          fileType: "PDF"
        },
        {
          type: "heading",
          id: "recommendations",
          level: 2,
          content: "Recommendations for Companies"
        },
        {
          type: "paragraph",
          content: "Companies should conduct a comprehensive review of their existing structures and processes to ensure compliance with CAMA 2020. This includes updating Articles of Association, reviewing board compositions, and implementing new governance procedures. Businesses should also take advantage of the new provisions that facilitate ease of doing business, such as electronic filing and virtual meetings."
        }
      ]
    },
    {
      id: 2,
      title: "Recent Supreme Court Decisions on Land Disputes in Nigeria: Legal Analysis",
      slug: "supreme-court-land-disputes-nigeria",
      author: "Barr. Olivia Adeyemi",
      publishDate: "June 8, 2023",
      category: "Property Law",
      coverImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80",
      excerpt: "A detailed examination of recent landmark Supreme Court judgments on land disputes in Nigeria and their implications for property ownership, customary land rights, and land administration.",
      readingTime: 10,
      content: [
        {
          type: "paragraph",
          content: "Land disputes remain one of the most contentious areas of Nigerian law, with far-reaching implications for economic development, social cohesion, and investment security. Recent Supreme Court decisions have established important precedents that reshape our understanding of property rights in Nigeria."
        }
      ]
    },
    {
      id: 3,
      title: "Navigating Nigerian Employment Law: Rights, Obligations and Recent Changes",
      slug: "nigerian-employment-law-guide",
      author: "Barr. David Okonkwo",
      publishDate: "July 20, 2023",
      category: "Employment Law",
      coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "A comprehensive guide to Nigerian employment law, covering employer and employee rights, termination procedures, workplace discrimination, and how recent legal changes affect businesses and workers.",
      readingTime: 7,
      content: [
        {
          type: "paragraph",
          content: "Understanding Nigerian employment law is crucial for both employers and employees. This article explores the legal framework governing employment relationships in Nigeria, highlighting key obligations, protections, and recent developments in labor law."
        }
      ]
    },
    {
      id: 4,
      title: "Protecting Intellectual Property in Nigeria's Growing Tech Ecosystem",
      slug: "intellectual-property-nigeria-tech",
      author: "Barr. Chika Nwosu",
      publishDate: "August 5, 2023",
      category: "Intellectual Property",
      coverImage: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "An exploration of intellectual property protection strategies for Nigeria's booming tech industry, covering patents, trademarks, copyrights, and enforcement mechanisms in the digital age.",
      readingTime: 6,
      content: [
        {
          type: "paragraph",
          content: "As Nigeria's technology ecosystem flourishes, intellectual property protection has become increasingly important. This article examines the legal frameworks available to tech entrepreneurs, developers, and creative professionals seeking to safeguard their innovations in Nigeria."
        }
      ]
    },
    {
      id: 5,
      title: "Nigerian Tax Law Reform: Implications for Individuals and Businesses",
      slug: "nigerian-tax-law-reform",
      author: "Barr. Emmanuel J. Eweke",
      publishDate: "September 12, 2023",
      category: "Tax Law",
      coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1411&q=80",
      excerpt: "A detailed analysis of recent changes to Nigerian tax legislation, including the Finance Act amendments, VAT reforms, and their practical implications for individual taxpayers and corporate entities.",
      readingTime: 9,
      content: [
        {
          type: "paragraph",
          content: "Nigeria's tax landscape continues to evolve with significant reforms aimed at expanding the tax base, improving compliance, and aligning with international best practices. This article breaks down the key changes and their impact on various stakeholders."
        }
      ]
    },
    {
      id: 6,
      title: "Foreign Investment in Nigeria: Legal Framework and Protection Mechanisms",
      slug: "foreign-investment-nigeria-legal-guide",
      author: "Barr. Olivia Adeyemi",
      publishDate: "October 3, 2023",
      category: "Corporate Law",
      coverImage: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      excerpt: "A comprehensive overview of Nigeria's legal framework for foreign direct investment, including regulatory requirements, investment protections, dispute resolution mechanisms, and practical considerations.",
      readingTime: 8,
      content: [
        {
          type: "paragraph",
          content: "Foreign investment plays a crucial role in Nigeria's economic development strategy. This article examines the legal and regulatory environment for foreign investors, highlighting both opportunities and challenges in Africa's largest economy."
        }
      ]
    },
    {
      id: 7,
      title: "Navigating Oil and Gas Regulations in Nigeria: A Legal Perspective",
      slug: "oil-gas-regulations-nigeria",
      author: "Barr. David Okonkwo",
      publishDate: "November 15, 2023",
      category: "Energy Law",
      coverImage: "https://images.unsplash.com/photo-1492147348729-be7ed6e43bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      excerpt: "An insightful analysis of Nigeria's petroleum industry legal framework, including the Petroleum Industry Act, licensing requirements, environmental regulations, and local content provisions.",
      readingTime: 11,
      content: [
        {
          type: "paragraph",
          content: "Nigeria's oil and gas sector operates within a complex legal and regulatory framework that continues to evolve. This article provides a detailed examination of key legislative developments and their implications for industry stakeholders."
        }
      ]
    }
  ];
};

// Get blog post by slug
export const fetchBlogPost = async (slug: string): Promise<BlogPostType | null> => {
  // In a real implementation, this would fetch from an API
  const posts = getMockBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

// Get related posts
export const fetchRelatedPosts = async (category: string, currentSlug: string): Promise<BlogPostType[]> => {
  // In a real implementation, this would fetch from an API
  const posts = getMockBlogPosts();
  return posts
    .filter(post => post.category === category && post.slug !== currentSlug)
    .slice(0, 3);
};

// Get all categories
export const getAllCategories = (): string[] => {
  const posts = getMockBlogPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
};

// Featured posts
export const getFeaturedPosts = (): BlogPostType[] => {
  const posts = getMockBlogPosts();
  return posts.slice(0, 3);
};

// Search posts
export const searchPosts = (query: string): BlogPostType[] => {
  const posts = getMockBlogPosts();
  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm)
  );
};
