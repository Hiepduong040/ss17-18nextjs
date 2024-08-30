import React from "react";
import Head from "next/head";

export default function BlogPost() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Accusamus beatae ad facilis",
    description: "Ngon , bổ, rẻ",
    author: {
      "@type": "Person",
      name: "John Doe",
    },
    datePublished: "2024-08-30",
    image:
      "https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      "@type": "Organization",
      name: "Example Publisher",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.png",
      },
    },
  };

  return (
    <div>
      <Head>
        <title>Accusamus beatae ad facilis</title>
        <meta name="description" content="Mô tả ngắn gọn về bài viết" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <h1>Accusamus beatae ad facilis</h1>
      <p>Nội dung bài viết...</p>
    </div>
  );
}
