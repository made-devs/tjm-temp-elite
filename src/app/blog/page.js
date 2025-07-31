import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import FeaturedPost from "@/components/sections/blog/FeaturedPost";
import PostGrid from "@/components/sections/blog/PostGrid";
import CtaSection from "@/components/sections/shared/CtaSection";
import { allPosts } from "@/data/blog/posts";

export default function BlogPage() {
  // Pisahkan artikel pertama sebagai unggulan
  const featuredPost = allPosts[0];
  // Sisa artikel untuk ditampilkan di grid
  const otherPosts = allPosts.slice(1);

  return (
    <Fragment>
      <PageHeader
        title="Wawasan Otomotif"
        breadcrumb="Home / Blog"
        backgroundImage="/bengkel1.webp"
      />
      <FeaturedPost post={featuredPost} />
      <PostGrid posts={otherPosts} />
      <CtaSection />
    </Fragment>
  );
}
