import PostList from "../components/PostList";
import Search from "../components/Search";
const Home = () => {
  return (
    <>
      {/* 메인 영역 */}
      <main className="mt-[49px]">
        {/* 메인 타이틀 */}
        <section className="flex flex-col items-center justify-center">
          <h2 className="text-[48px] font-extrabold text-[#000638]">
            The Sucoding Blog
          </h2>
          <p className="text-xl text-[#605C59]">
            A blog about food. experience, and recipes.
          </p>
        </section>
        {/* 검색 영역 */}
        <Search />
        {/* 포스트 리스트 */}
        <PostList />
      </main>
    </>
  );
};
export default Home;
