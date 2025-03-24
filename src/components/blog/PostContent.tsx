
import React from 'react';
import { FileText } from 'lucide-react';
import { BlogPostType } from '../../types/blog';

interface PostContentProps {
  post: BlogPostType;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      {post.content.map((section, index) => {
        switch (section.type) {
          case 'paragraph':
            return (
              <p key={index} id={section.id} className="text-bluegray mb-6">
                {section.content}
              </p>
            );
          
          case 'heading':
            const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag 
                key={index} 
                id={section.id}
                className="font-bold mt-8 mb-4 font-serif"
              >
                {section.content}
              </HeadingTag>
            );
          
          case 'image':
            return (
              <figure key={index} className="my-8">
                <img 
                  src={section.url} 
                  alt={section.caption || 'Blog image'} 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                {section.caption && (
                  <figcaption className="text-center text-bluegray/70 text-sm mt-2">
                    {section.caption}
                  </figcaption>
                )}
              </figure>
            );
          
          case 'quote':
            return (
              <blockquote 
                key={index}
                className="border-l-4 border-highlight pl-4 py-1 italic text-bluegray my-6"
              >
                <p>{section.content}</p>
                {section.author && (
                  <footer className="text-bluegray/70 not-italic text-sm mt-2">
                    — {section.author}
                  </footer>
                )}
              </blockquote>
            );
          
          case 'list':
            if (section.style === 'ordered') {
              return (
                <ol key={index} className="list-decimal pl-8 my-6 text-bluegray">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">{item}</li>
                  ))}
                </ol>
              );
            } else {
              return (
                <ul key={index} className="list-disc pl-8 my-6 text-bluegray">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">{item}</li>
                  ))}
                </ul>
              );
            }
          
          case 'document':
            return (
              <div key={index} className="my-8 bg-light rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <FileText size={24} className="mr-3 text-info" />
                  <h4 className="text-lg font-bold">{section.title}</h4>
                </div>
                <p className="text-bluegray mb-4">{section.description}</p>
                <a 
                  href={section.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white px-4 py-2 rounded border border-gray-200 text-info hover:bg-info hover:text-white transition-colors duration-200"
                >
                  Download PDF
                </a>
              </div>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PostContent;
