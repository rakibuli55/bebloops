import PostCard from "../components/common/PostCard";
import CommentSection from "../components/PostDetailsPage/CommentSection";


const PostDetailsPage = () => {
  return (
    <section className="pt-6 custom-2xl:pt-4 custom-xl:pt-4 custom-lg:pt-2 custom-xs:pt-[10px]">
      <div className="flex items-start flex-wrap custom-xl:block custom-lg:block max-md:block">
        {/* post area  */}
        <div className="w-[60%] custom-xl:w-full custom-lg:w-full max-md:w-full">
            <PostCard type="full" />
        </div>
        {/* comments area  */}
        <div className="w-[40%] custom-xl:w-full custom-lg:w-full max-md:w-full pl-5 custom-2xl:pl-4 custom-xl:pl-0 custom-xl:pb-4 custom-lg:pl-0 custom-lg:pb-4 max-md:pl-0 max-md:pb-4">
            <CommentSection />
        </div>
      </div>
    </section>
  );
};

export default PostDetailsPage;