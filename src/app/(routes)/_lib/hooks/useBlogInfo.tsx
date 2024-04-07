import { GET_BLOG_INFO } from "@/app/_gql/queries/blog-analytics.query";
import { client } from "@/app/_lib/graphqlClient";
import {
  GetBlogInfoQuery,
  GetBlogInfoQueryVariables,
} from "@/app/_types/graphql";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useBlogInfo = () => {
  const params = useSearchParams();
  const blogId = params.get("b");
  const options = queryOptions({
    queryKey: ["getBlogInfo", blogId],
    queryFn: async () => {
      try {
        if (!blogId) return;
        const res = await client.request<
          GetBlogInfoQuery,
          GetBlogInfoQueryVariables
        >(GET_BLOG_INFO, {
          input: { blogId },
        });
        return res;
      } catch (e) {
        console.log(e);
      }
    },
  });

  const { data, isLoading } = useQuery(options);

  return {
    data: data?.getBlogInfo,
    isLoading,
  };
};

export default useBlogInfo;
