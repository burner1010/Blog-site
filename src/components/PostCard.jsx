import React from "react";
import service from "../appwrite_services/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  //ye function ke arguments ayenge appwrite db se so $id ek variable hai as it is
  return (
    <Link to={`/post/${$id}`}>//$id is variable
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link> 
  );
}

export default PostCard;
