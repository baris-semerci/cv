import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo: string;
  storelinks?: readonly string[];
}

export function ProjectCard({ title, description, tags, link, logo, storelinks }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
  <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
  <div className="flex items-center space-x-3"> 
    <a href={link} target="_blank" className="flex-shrink-0">
      <img src={logo} alt="logo" className="w-8 h-8" /> 
    </a>
    <div className="flex-grow min-w-0 "> 
      <CardTitle className="text-base">
        {link ? (
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center gap-1 hover:underline"
          >
            {title}{" "}
          </a>
        ) : (
          title
        )}
      </CardTitle>
     
    </div>
  </div>
  <div className="hidden font-mono text-xs underline print:visible">
    {link?.replace("https://", "").replace("www.", "").replace("/", "")}
  </div>
</CardHeader>

<CardDescription className="font-mono text-xs print:text-[10px]">
            {description}
          </CardDescription>



       
     

      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>


      <CardContent className="mt-auto flex">
  <div className={`mt-2 flex ${storelinks?.length === 2 ? 'flex-row' : 'flex-col'} gap-1`}>
    {storelinks?.map((storelink, index) => (
      <a
        key={index}
        href={ storelink}
        target="_blank"
        style={{ width: storelinks.length === 2 ? '50%' : '50%', height: 'auto' }}
      >
        <img
src={index === 0 
  ? "https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png"
  : "https://developer.apple.com/assets/elements/icons/download-on-the-app-store/download-on-the-app-store.svg"
}          alt="logo"
          style={{ width: '100%', height: 'auto' }} 
        />
      </a>
    ))}
  </div>
</CardContent>



    </Card>
  );
}
