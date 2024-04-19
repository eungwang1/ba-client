export const extractBlogId = (urlOrId: string) => {
  const match = urlOrId.match(/blog\.naver\.com\/([^\/\?]+)\/?/);
  return match ? match[1] : urlOrId;
};

export const extractBlogIdAndPostId = (url: string) => {
  const match = url.match(/blog\.naver\.com\/([^\/\?]+)\/([^\/\?]+)\/?/);
  return match ? { blogId: match[1], postId: match[2] } : null;
};
