import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x"
import { TPost } from "@/src/types"
import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "");
}

type Props = {
  blockMap: any
  data: TPost
}

const PostDetail: React.FC<Props> = ({ blockMap, data }) => {
  return (
    <div
      className={`w-full px-0 md:w-2/3 darkrounded-3xl py-12 px-6`}
    >
      <article className="w-full">
        {data.type[0] === "Post" && <PostHeader data={data} />}
        {blockMap && (
          <div className="mt-4">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow,
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
        {data.type[0] === "Post" && (
          <>
            <Footer />

          </>
        )}
      </article>
    </div>
  )
}

export default PostDetail
