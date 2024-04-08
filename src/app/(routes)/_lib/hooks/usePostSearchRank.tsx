import { GET_POST_SEARCH_RANK } from "@/app/_gql/queries/blog-analytics.query";
import { client } from "@/app/_lib/graphqlClient";
import {
  GetSearchRankQuery,
  GetSearchRankQueryVariables,
} from "@/app/_types/graphql";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const usePostSearchRank = (keyword: string) => {
  const params = useSearchParams();
  const blogId = params.get("b");
  const options = queryOptions({
    queryKey: ["searchRank", blogId, keyword],
    queryFn: async () => {
      try {
        if (!blogId || !keyword) return null;
        const res = await client.request<
          GetSearchRankQuery,
          GetSearchRankQueryVariables
        >(GET_POST_SEARCH_RANK, {
          input: {
            blogId,
            keyword,
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
    data: data?.getSearchRank,
    isLoading,
  };
};

export default usePostSearchRank;
