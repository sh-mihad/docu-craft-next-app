import ContentDisplay from "@/app/components/ContentDisplay";

export default function contentPage({params:{contentId}}) {
  return (
  <ContentDisplay id={contentId} />
  )
}
