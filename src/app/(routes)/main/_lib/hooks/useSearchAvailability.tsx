import { GET_SEARCH_AVAILABILITY } from "@/app/_gql/queries/blog-analytics.query";
import { client } from "@/app/_lib/graphqlClient";
import {
  GetSearchAvailabilityQuery,
  GetSearchAvailabilityQueryVariables,
} from "@/app/_types/graphql";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useSearchAvailability = () => {
  const params = useSearchParams();
  const blogId = params.get("b");
  const page = Number(params.get("p")) || 1;
  const itemCount = 5;
  const options = queryOptions({
    queryKey: ["searchAvailability", blogId, page],
    queryFn: async () => {
      try {
        if (!blogId) return null;
        const res = await client.request<
          GetSearchAvailabilityQuery,
          GetSearchAvailabilityQueryVariables
        >(GET_SEARCH_AVAILABILITY, {
          input: {
            blogId,
            page,
            itemCount,
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
    data: data?.getSearchAvailability.posts || [],
    isLoading,
  };
};

export default useSearchAvailability;
