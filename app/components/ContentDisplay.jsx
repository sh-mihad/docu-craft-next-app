import { getDocumentContents } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

export default async function ContentDisplay({id}) {
    const documentContent = await getDocumentContents(id)
    console.log(documentContent);
  return (
    <article className="prose dark:prose-invert">
        <h1>{documentContent.title}</h1>
        <div>
            <span>Published On : {documentContent.date} by {" "} 
                <Link href={`/author/${documentContent.author}`}>{documentContent.author}</Link>{" "}
                under the {" "}
                <Link href={`/categories/${documentContent.category}`}>{documentContent.category}</Link>{" "}category.
            </span>
        </div>
        <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <dir className="lead" dangerouslySetInnerHTML={{__html:documentContent.contentHtml}} />
    </article>
  )
}
