// src/markdown/astRenderer.jsx
import React from 'react';

export function renderNode(node, key = 0) {
  switch (node.type) {
    case 'Header':
      const Tag = `h${node.depth}`;
      return <Tag key={key} className="font-bold text-xl mt-4">{node.raw.replace(/^#+\s/, '')}</Tag>;

    case 'Paragraph':
      return <p key={key} className="my-2">{node.children.map((child, i) => renderNode(child, i))}</p>;

    case 'Strong':
      return <strong key={key}>{node.children.map((child, i) => renderNode(child, i))}</strong>;

    case 'Emphasis':
      return <em key={key}>{node.children.map((child, i) => renderNode(child, i))}</em>;

    case 'List':
      const ListTag = node.ordered ? 'ol' : 'ul';
      return (
        <ListTag key={key} className="pl-6 list-disc">
          {node.children.map((item, i) => renderNode(item, i))}
        </ListTag>
      );

    case 'ListItem':
      return <li key={key}>{node.children.map((child, i) => renderNode(child, i))}</li>;

    case 'CodeBlock':
      return (
        <pre key={key} className="bg-gray-100 p-2 my-2 rounded overflow-auto">
          <code>{node.value}</code>
        </pre>
      );

    case 'Link':
      return <a key={key} href={node.url} className="text-blue-600 underline">{node.children.map((child, i) => renderNode(child, i))}</a>;

    case 'Text':
      return <span key={key}>{node.value}</span>;

    default:
      return null;
  }
}
