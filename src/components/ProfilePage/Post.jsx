const Post = ({ post }) => {
  return (
    <div className="p-3 bg-[#F6F6F6] rounded-[8px] dash-post-card cursor-pointer border border-[#F6F6F6] hover:border-primaryColor duration-200 ease-in-out">
      <div className="h-[113px] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-[8px] duration-200 ease-in-out"
          src={post?.image}
          alt=""
        />
      </div>
      <div>
        <p className="text-base text-themeBlack mt-3 max-md:text-sm">{post?.title}</p>
      </div>
    </div>
  );
};

export default Post;
