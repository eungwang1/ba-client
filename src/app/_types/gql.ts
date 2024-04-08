/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetKeywordSearchCount($input: GetKeywordSearchCountInput!) {\n    getKeywordSearchCount(input: $input) {\n      error\n      ok\n      keywordList {\n        monthlyMobileQcCnt\n        monthlyPcQcCnt\n        relKeyword\n      }\n    }\n  }\n": types.GetKeywordSearchCountDocument,
    "\n  query GetBlogCategoryList($input: GetBlogCategoryListInput!) {\n    getBlogCategoryList(input: $input) {\n      categories {\n        categoryName\n        postCnt\n      }\n      error\n      ok\n      postCnt\n    }\n  }\n": types.GetBlogCategoryListDocument,
    "\n  query GetSearchAvailability($input: GetSearchAvailabilityInput!) {\n    getSearchAvailability(input: $input) {\n      error\n      ok\n      posts {\n        isSearchAvailability\n        commentCnt\n        link\n        logNo\n        sympathyCnt\n        titleWithInspectMessage\n        thumbnailCount\n      }\n    }\n  }\n": types.GetSearchAvailabilityDocument,
    "\n  query GetSearchRank($input: GetSearchRankInput!) {\n    getSearchRank(input: $input) {\n      naverSmartSearchRank\n      naverSmartSearchTitle\n      naverBlogSearchRank\n      ok\n      error\n      postLink\n    }\n  }\n": types.GetSearchRankDocument,
    "\n  query GetBlogInfo($input: GetBlogInfoInput!) {\n    getBlogInfo(input: $input) {\n      ok\n      error\n      blogInfo {\n        blogName\n        subscriberCount\n        blogDirectoryName\n        totalVisitorCount\n        blogVisitor {\n          visitor\n          date\n        }\n        influencerUrl\n      }\n    }\n  }\n": types.GetBlogInfoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetKeywordSearchCount($input: GetKeywordSearchCountInput!) {\n    getKeywordSearchCount(input: $input) {\n      error\n      ok\n      keywordList {\n        monthlyMobileQcCnt\n        monthlyPcQcCnt\n        relKeyword\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetKeywordSearchCount($input: GetKeywordSearchCountInput!) {\n    getKeywordSearchCount(input: $input) {\n      error\n      ok\n      keywordList {\n        monthlyMobileQcCnt\n        monthlyPcQcCnt\n        relKeyword\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBlogCategoryList($input: GetBlogCategoryListInput!) {\n    getBlogCategoryList(input: $input) {\n      categories {\n        categoryName\n        postCnt\n      }\n      error\n      ok\n      postCnt\n    }\n  }\n"): (typeof documents)["\n  query GetBlogCategoryList($input: GetBlogCategoryListInput!) {\n    getBlogCategoryList(input: $input) {\n      categories {\n        categoryName\n        postCnt\n      }\n      error\n      ok\n      postCnt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSearchAvailability($input: GetSearchAvailabilityInput!) {\n    getSearchAvailability(input: $input) {\n      error\n      ok\n      posts {\n        isSearchAvailability\n        commentCnt\n        link\n        logNo\n        sympathyCnt\n        titleWithInspectMessage\n        thumbnailCount\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSearchAvailability($input: GetSearchAvailabilityInput!) {\n    getSearchAvailability(input: $input) {\n      error\n      ok\n      posts {\n        isSearchAvailability\n        commentCnt\n        link\n        logNo\n        sympathyCnt\n        titleWithInspectMessage\n        thumbnailCount\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSearchRank($input: GetSearchRankInput!) {\n    getSearchRank(input: $input) {\n      naverSmartSearchRank\n      naverSmartSearchTitle\n      naverBlogSearchRank\n      ok\n      error\n      postLink\n    }\n  }\n"): (typeof documents)["\n  query GetSearchRank($input: GetSearchRankInput!) {\n    getSearchRank(input: $input) {\n      naverSmartSearchRank\n      naverSmartSearchTitle\n      naverBlogSearchRank\n      ok\n      error\n      postLink\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBlogInfo($input: GetBlogInfoInput!) {\n    getBlogInfo(input: $input) {\n      ok\n      error\n      blogInfo {\n        blogName\n        subscriberCount\n        blogDirectoryName\n        totalVisitorCount\n        blogVisitor {\n          visitor\n          date\n        }\n        influencerUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlogInfo($input: GetBlogInfoInput!) {\n    getBlogInfo(input: $input) {\n      ok\n      error\n      blogInfo {\n        blogName\n        subscriberCount\n        blogDirectoryName\n        totalVisitorCount\n        blogVisitor {\n          visitor\n          date\n        }\n        influencerUrl\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;