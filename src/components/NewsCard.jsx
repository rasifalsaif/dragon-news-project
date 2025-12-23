import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    rating,
    total_view,
    author,
    tags,
  } = news;

  const publishDate = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md">

      {/* 1️⃣ Top Author Bar */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold">{author?.name}</p>
            <p className="text-gray-500">{publishDate}</p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-600 text-lg cursor-pointer">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      <div className="card-body gap-4">

        {/* 2️⃣ Title */}
        <h2 className="text-xl font-bold leading-snug">
          {title}
        </h2>

        {/* 3️⃣ Image */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded"
        />

        {/* 4️⃣ Date + Tags */}
        <p className="text-sm text-gray-500">
          {publishDate} | Tag Cloud Tags:{" "}
          {tags?.join(", ")}
        </p>

        {/* 5️⃣ Description */}
        <p className="text-gray-600">
          {details.length > 180
            ? details.slice(0, 180) + "..."
            : details}
        </p>

        {/* 6️⃣ Read More */}
        <p className="text-orange-500 font-semibold cursor-pointer hover:underline">
          Read More
        </p>

        {/* 7️⃣ Footer */}
        <div className="flex justify-between items-center pt-3 border-t">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating?.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 ml-1">
              {rating?.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

