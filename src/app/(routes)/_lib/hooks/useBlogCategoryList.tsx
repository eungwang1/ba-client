import { GET_BLOG_CATEGORY_LIST } from "@/app/_gql/queries/blog-analytics.query";
import { client } from "@/app/_lib/graphqlClient";
import {
  GetBlogCategoryListQuery,
  GetBlogCategoryListQueryVariables,
} from "@/app/_types/graphql";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useBlogCategoryList = () => {
  const params = useSearchParams();
  const blogId = params.get("b");
  const options = queryOptions({
    queryKey: ["getBlogCategoryList", blogId],
    queryFn: async () => {
      try {
        if (!blogId) return;
        const res = await client.request<
          GetBlogCategoryListQuery,
          GetBlogCategoryListQueryVariables
        >(GET_BLOG_CATEGORY_LIST, {
          input: {
            blogId,
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
    data: data?.getBlogCategoryList,
    isLoading,
  };
};

export default useBlogCategoryList;
