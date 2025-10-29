import type { FC } from "react";
type LoadingProps = {show:boolean; text?:string}
const LoadingOverlay: FC<LoadingProps> = ({show,text="Loading..."}) => {
  if(!show)return null;
  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-2 bg-muted/100 ">
        <h1 className="text-title text-soft font-semibold">{text}</h1>
        <div className="w-5 h-5 bg-accent rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-accent rounded-full animate-bounce" style={{animationDelay:'0.1s'}}></div>
        <div className="w-5 h-5 bg-accent rounded-full animate-bounce" style={{animationDelay:'0.2s'}}></div>
      </div>
    </>
  );
};
export default LoadingOverlay;
