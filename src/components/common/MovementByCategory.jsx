import JoinedMovementCard from "./JoinedMovementCard";


const MovementByCategory = ({item, name}) => {
  return (
    <div>
      <p className="text-base text-themeBlack font-semibold">{item?.category}</p>
      <div>
        {
            item?.posts?.map((postItem) => (
                <div key={postItem?.id} className="mt-4 last:mb-4">
                    <JoinedMovementCard item={postItem} name={name} />
                </div>
            ) )
        }
      </div>
    </div>
  );
};

export default MovementByCategory;