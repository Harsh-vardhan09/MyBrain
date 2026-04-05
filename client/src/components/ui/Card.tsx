import ShareIcon from "../../icons/ShareIcon";

interface cardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ title, link, type }: cardProps) => {
  return (
    <div>
      <div className="bg-white rounded-md  outline-slate-200 border border-gray-200 p-8 max-w-72 min-w-48 ">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ShareIcon size="md" />
            <h3 className="font-semibold text-md text-gray-700">{title}</h3>
          </div>
          <div className="flex gap-2 text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon size="md" />
            </a>
            <ShareIcon size="md" />
          </div>
        </div>
        <div className="w-full pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch?v=", "embed/")}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              allow="acclerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
            />
          )}
          <div className='w-full'>
            {type === "twitter" && (
              <blockquote className={`twitter-tweet`}>
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
