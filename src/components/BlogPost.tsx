import React from 'react';
import type { BlogPost } from '../lib/blogData';

interface BlogPostProps {
  post: BlogPost;
  backUrl: string;
}

export default function BlogPost({ post, backUrl }: BlogPostProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convert markdown-like content to HTML (improved implementation)
  const formatContent = (content: string) => {
    let html = content;
    
    // Handle code blocks first (before other processing)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, language, code) => {
      const lang = language || 'text';
      return `<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6"><code class="language-${lang}">${code.trim()}</code></pre>`;
    });
    
    // Handle inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>');
    
    // Handle headers
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">$1</h3>');
    
    // Handle bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    
    // Handle links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Handle lists with a more robust approach
    const lines = html.split('\n');
    const processedLines = [];
    let inUnorderedList = false;
    let inOrderedList = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isUnorderedItem = /^- (.*)$/.test(line);
      const isOrderedItem = /^\d+\. (.*)$/.test(line);
      
      if (isUnorderedItem) {
        if (!inUnorderedList) {
          processedLines.push('<ul class="mb-4 ml-6 list-disc">');
          inUnorderedList = true;
        }
        if (inOrderedList) {
          processedLines.push('</ol>');
          inOrderedList = false;
          processedLines.push('<ul class="mb-4 ml-6 list-disc">');
          inUnorderedList = true;
        }
        const content = line.replace(/^- (.*)$/, '$1');
        processedLines.push(`<li class="mb-1">${content}</li>`);
      } else if (isOrderedItem) {
        if (!inOrderedList) {
          processedLines.push('<ol class="mb-4 ml-6 list-decimal">');
          inOrderedList = true;
        }
        if (inUnorderedList) {
          processedLines.push('</ul>');
          inUnorderedList = false;
          processedLines.push('<ol class="mb-4 ml-6 list-decimal">');
          inOrderedList = true;
        }
        const content = line.replace(/^\d+\. (.*)$/, '$1');
        processedLines.push(`<li class="mb-1">${content}</li>`);
      } else {
        if (inUnorderedList) {
          processedLines.push('</ul>');
          inUnorderedList = false;
        }
        if (inOrderedList) {
          processedLines.push('</ol>');
          inOrderedList = false;
        }
        processedLines.push(line);
      }
    }
    
    // Close any remaining lists
    if (inUnorderedList) processedLines.push('</ul>');
    if (inOrderedList) processedLines.push('</ol>');
    
    html = processedLines.join('\n');
    
    // Handle paragraphs (split by double newlines, but avoid breaking code blocks)
    const paragraphs = html.split(/\n\s*\n/);
    html = paragraphs.map(paragraph => {
      paragraph = paragraph.trim();
      if (!paragraph) return '';
      
      // Don't wrap if it's already a block element
      if (paragraph.match(/^<(h[1-6]|pre|ul|ol|div)/)) {
        return paragraph;
      }
      
      return `<p class="mb-4 leading-relaxed">${paragraph}</p>`;
    }).join('\n');
    
    return html;
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <a
        href={backUrl}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </a>

      {/* Post Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">
            {post.readTime}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center text-gray-600 mb-6">
          <time dateTime={post.pubDate}>
            {formatDate(post.pubDate)}
          </time>
        </div>

        {post.image && (
          <div className="aspect-video overflow-hidden rounded-xl mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      {/* Post Content */}
      <div 
        className="prose prose-lg prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
      />

      {/* Post Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Published on {formatDate(post.pubDate)}
          </div>
          
          <a
            href={backUrl}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Back to Blog
          </a>
        </div>
      </footer>
    </article>
  );
} 