import { GET_BLOG_POST_DETAIL } from "@/app/_gql/queries/blog-analytics.query";
import { client } from "@/app/_lib/graphqlClient";
import {
  GetBlogPostDetailQuery,
  GetBlogPostDetailQueryVariables,
} from "@/app/_types/graphql";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface UseBlogPostDetailProps {
  postId: string;
  blogId: string;
}

const useBlogPostDetail = ({ postId, blogId }: UseBlogPostDetailProps) => {
  const options = queryOptions({
    queryKey: ["getBlogPostDetail", postId],
    queryFn: async () => {
      try {
        if (!blogId) return null;
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

  const { data, isLoading } = useQuery(options);

  return {
    data: data?.getBlogPostDetail,
    isLoading,
  };
};

export default useBlogPostDetail;
