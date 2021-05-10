import React from "react"
import { IconType } from "react-icons"
import { IComments } from "../../utils/interfaces"
import moment from "moment"

interface IProps {
  comment: IComments
  ProfileIcon: IconType
  LikeIcon: IconType
  usersId: string
}

const PostModalComments: React.FC<IProps> = ({
  comment,
  ProfileIcon,
  LikeIcon,
  usersId,
}) => {
  const IconProfile = ProfileIcon
  const IconLike = LikeIcon

  const time = moment(comment.dateCreated).fromNow()

  const handleLikeComment = () => {}

  return (
    <div className="flex flex-row  items-center p-2">
      <div className="w-20">
        <IconProfile
          style={{
            height: "30px",
            width: "100%",
          }}
        />
      </div>
      <div className="flex flex-col w-3/4">
        <p className="text-blue">
          {comment.commentedBy.firstName} {comment.commentedBy.secondName}
          {comment.commentedBy.lastName}
        </p>
        <p className="text-black font-bold py-1">{comment.content}</p>
        <div className="flex flex-row">
          <div className="flex flex-row" onClick={handleLikeComment}>
            <IconLike
              style={{
                height: "28px",
                width: "24px",
                fill:
                  comment?.likedBy?.filter(
                    (comment) => comment?._id === usersId
                  ).length > 0
                    ? "red"
                    : "",
                color:
                  comment?.likedBy?.filter(
                    (comment) => comment?._id === usersId
                  ).length > 0
                    ? "red"
                    : "inherit",
              }}
              className="mr-1 cursor-pointer"
            />
            <p className="px-1 mr-4">{comment.likes}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostModalComments
