import { dummyImage, dummyImage3 } from "../assets/blog/assets";

const Read = () => {
  return (
    <>
      {/* 이미지 */}
      <section className="max-w-[800px] mx-auto">
        <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
          Next.JS
        </strong>
        <h3 className="text-[46px] font-bold">
          What Traveling Greece For 2 Weeks Taught Me About Life
        </h3>
        <p className="text-sm text-[#515151] mb-[18px]">
          Aug 1, 2021 • 7 min read
        </p>
        <img
          src={dummyImage}
          alt="dummy"
          className="object-cover w-full max-h-[278px] rounded-md"
        />
        <div className="mt-4 flex items-center gap-[14px]">
          <img src={dummyImage3} alt="" className="rounded-s-full" />
          <strong className="text-sm">George Costanazv</strong>
        </div>
      </section>
      {/* 본문 */}
      <section className="max-w-[800px] mx-auto text-xl text-[#434343] mt-5 [&>p]:mb-10 ">
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
      </section>
      {/* 관련 게시물 */}
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-[36px] font-bold mb-[30px]">Recommand Reading</h3>
        <ul className="[&>li]:mb-[30px]">
          <li>
            <div className="flex gap-[34px]">
              <img
                src={dummyImage}
                alt=""
                className="rounded-md max-w-[250px]"
              />
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Why you don’t need more than 3 pieces of clothing
                </h4>
                <p className="text-lg text-[#4b4b4b] line-clamp-3">
                  Et vitae, mollis euismod lobortis blandit amet sed amet. Amet
                  ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-[34px]">
              <img
                src={dummyImage}
                alt=""
                className="rounded-md max-w-[250px]"
              />
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Why you don’t need more than 3 pieces of clothing
                </h4>
                <p className="text-lg text-[#4b4b4b] line-clamp-3">
                  Et vitae, mollis euismod lobortis blandit amet sed amet. Amet
                  ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-[34px]">
              <img
                src={dummyImage}
                alt=""
                className="rounded-md max-w-[250px]"
              />
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Why you don’t need more than 3 pieces of clothing
                </h4>
                <p className="text-lg text-[#4b4b4b] line-clamp-3">
                  Et vitae, mollis euismod lobortis blandit amet sed amet. Amet
                  ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Read;
