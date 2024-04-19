import { GET_BLOG_POST_DETAIL } from "@/app/_gql/queries/blog-analytics.query";
import { client } from "@/app/_lib/graphqlClient";
import {
  GetBlogPostDetailQuery,
  GetBlogPostDetailQueryVariables,
} from "@/app/_types/graphql";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface UseBlogPostDetailProps {
  postId: string | null;
  blogId: string | null;
}

const useBlogPostDetail = ({ postId, blogId }: UseBlogPostDetailProps) => {
  const options = queryOptions({
    queryKey: ["getBlogPostDetail", postId],
    queryFn: async () => {
      try {
        if (!postId || !blogId) return null;
        const res = await client.request<
          GetBlogPostDetailQuery,
          GetBlogPostDetailQueryVariables
        >(GET_BLOG_POST_DETAIL, {
          input: {
            blogId,
            postId,
          },
        });
        return res;
      } catch (e) {
        console.log(e);
      }
    },
  });
  const { data, isLoading, error } = useQuery(options);

  return {
    data: data?.getBlogPostDetail,
    isLoading,
    error,
  };
};

export default useBlogPostDetail;
