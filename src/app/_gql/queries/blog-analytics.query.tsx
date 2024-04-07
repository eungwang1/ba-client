import { gql } from "graphql-request";

export const GET_KEYWORD_SEARCH_COUNT = gql`
  query GetKeywordSearchCount($input: GetKeywordSearchCountInput!) {
    getKeywordSearchCount(input: $input) {
      error
      ok
      keywordList {
        monthlyMobileQcCnt
        monthlyPcQcCnt
        relKeyword
      }
    }
  }
`;

export const GET_BLOG_CATEGORY_LIST = gql`
  query GetBlogCategoryList($input: GetBlogCategoryListInput!) {
    getBlogCategoryList(input: $input) {
      categories {
        categoryName
        postCnt
      }
      error
      ok
      postCnt
    }
  }
`;

export const GET_SEARCH_AVAILABILITY = gql`
  query GetSearchAvailability($input: GetSearchAvailabilityInput!) {
    getSearchAvailability(input: $input) {
      error
      ok
      posts {
        isSearchAvailability
        commentCnt
        link
        logNo
        sympathyCnt
        titleWithInspectMessage
        thumbnailCount
      }
    }
  }
`;

export const GET_POST_SEARCH_RANK = gql`
  query GetSearchRank($input: GetSearchRankInput!) {
    getSearchRank(input: $input) {
      daumBlogSearchRank
      naverBlogSearchRank
      ok
      error
      postLink
    }
  }
`;

export const GET_BLOG_INFO = gql`
  query GetBlogInfo($input: GetBlogInfoInput!) {
    getBlogInfo(input: $input) {
      ok
      error
      blogInfo {
        blogName
        subscriberCount
        blogDirectoryName
        totalVisitorCount
        blogVisitor {
          visitor
          date
        }
        influencerUrl
      }
    }
  }
`;
