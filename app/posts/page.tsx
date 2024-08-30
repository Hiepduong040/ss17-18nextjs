import React from "react";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Image from "next/image";

export default function Post() {
  const posts = [
    {
      id: 1,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-xl font-semibold mb-4">Danh sách bài viết</h1>
      <div className="ml-16 grid grid-cols-3 gap-4">
        {posts.map((item) => (
          <div key={item.id}>
            <Image
              alt={item.title}
              width={500}
              height={500}
              src={item.thumbnailUrl}
              loading="lazy"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
