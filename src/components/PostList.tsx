import PostListItem from "./PostListItem";
const PostList = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-[80px] mt-[80px] mb-[152px]">
        <PostListItem />
      </section>
    </>
  );
};
export default PostList;
