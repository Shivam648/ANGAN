import type { JournalBlock } from "../../lib/types";
import { Picture } from "../ui/Picture";

export function ArticleBody({ blocks }: { blocks: JournalBlock[] }) {
  return (
    <div className="prose-editorial">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return <h2 key={index}>{block.text}</h2>;
          case "h3":
            return <h3 key={index}>{block.text}</h3>;
          case "quote":
            return <blockquote key={index}>{block.text}</blockquote>;
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={index} className="my-10 sm:my-12">
                <div className="relative aspect-[3/2] overflow-hidden bg-oatmeal">
                  <Picture
                    image={block.image}
                    sizes="(min-width: 880px) 760px, 100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                {block.caption ? (
                  <figcaption className="mt-3 text-[0.625rem] uppercase tracking-[0.16em] text-espresso/45">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
