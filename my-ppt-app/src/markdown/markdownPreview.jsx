import React, { useEffect, useState } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

export default function MarkdownPreview({ markdown }) {
  const [tree, setTree] = useState(null);

  useEffect(() => {
    const ast = unified().use(remarkParse).use(remarkGfm).parse(markdown);
    setTree(ast);
  }, [markdown]);

  const renderNode = (node, key = 0) => {
    switch (node.type) {
      case 'heading':
        const Tag = `h${node.depth}`;
        return <Tag key={key}>{node.children.map((c, i) => renderNode(c, i))}</Tag>;
      case 'paragraph':
        return <p key={key}>{node.children.map((c, i) => renderNode(c, i))}</p>;
      case 'text':
        return <span key={key}>{node.value}</span>;
      case 'strong':
        return <strong key={key}>{node.children.map((c, i) => renderNode(c, i))}</strong>;
      case 'emphasis':
        return <em key={key}>{node.children.map((c, i) => renderNode(c, i))}</em>;
      case 'list':
        const ListTag = node.ordered ? 'ol' : 'ul';
        return <ListTag key={key}>{node.children.map((c, i) => renderNode(c, i))}</ListTag>;
      case 'listItem':
        return <li key={key}>{node.children.map((c, i) => renderNode(c, i))}</li>;
      case 'inlineCode':
        return <code key={key} className="bg-gray-100 px-1">{node.value}</code>;
      case 'code':
        return (
          <pre key={key} className="bg-gray-100 p-2 my-2 rounded">
            <code>{node.value}</code>
          </pre>
        );
      case 'link':
        return (
          <a key={key} href={node.url} className="text-blue-600 underline" target="_blank">
            {node.children.map((c, i) => renderNode(c, i))}
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="prose max-w-none">
      {tree && tree.children.map((node, i) => renderNode(node, i))}
    </div>
  );
}
