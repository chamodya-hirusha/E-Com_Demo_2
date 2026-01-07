import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]"
      >
        {/* Background Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-background">
          <Badge variant="coral" className="mb-4">{post.category}</Badge>
          <h2 className="font-serif text-2xl md:text-4xl font-medium mb-3 group-hover:text-peach transition-colors">
            {post.title}
          </h2>
          <p className="text-background/80 mb-4 max-w-2xl line-clamp-2 hidden md:block">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-background/70">
            <span>{formattedDate}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
        >
          {post.category}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{formattedDate}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} min
          </span>
        </div>

        <h3 className="font-serif text-lg md:text-xl font-medium group-hover:text-coral transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center text-sm font-medium text-coral group-hover:gap-2 transition-all">
          Read More
          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
