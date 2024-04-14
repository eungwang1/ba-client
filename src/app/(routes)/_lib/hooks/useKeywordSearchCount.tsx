import { queryOptions, useQuery } from "@tanstack/react-query";
import { GET_KEYWORD_SEARCH_COUNT } from "@/app/_gql/queries/blog-analytics.query";
import {
  GetKeywordSearchCountQuery,
  GetKeywordSearchCountQueryVariables,
} from "@/app/_types/graphql";
import { useSearchParams } from "next/navigation";
import { client } from "@/app/_lib/graphqlClient";

const useNaverKeywordSearch = () => {
  const params = useSearchParams();
  const keyword = params.get("q");
  const options = queryOptions({
    queryKey: ["getKewordSearchCount", keyword],
    queryFn: async () => {
      try {
        if (!keyword) return null;
        const res = await client.request<
          GetKeywordSearchCountQuery,
          GetKeywordSearchCountQueryVariables
        >(GET_KEYWORD_SEARCH_COUNT, {
          input: { keyword },
        });
        return res;
      } catch (e) {
        console.log(e);
      }
    },
  });

  const { data, isLoading } = useQuery(options);

  return {
    data: data?.getKeywordSearchCount.keywordList || [],
    isLoading,
  };
};

export default useNaverKeywordSearch;
