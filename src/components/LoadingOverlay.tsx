import { useEffect, useState, type FC } from "react";
import { useLocation } from "react-router-dom";



const LoadingOverlay: FC = () => {
  const [loading,setLoading]=useState<boolean>(false);
  const {pathname}=useLocation();
  useEffect(()=>{
    setLoading(true);
    const timer = setTimeout(()=>setLoading(false),500);
    return () => clearTimeout(timer);
  },[pathname]);
  
  
  if(!loading)return null;
  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center min-h-screen gap-2 bg-muted/50 backdrop-blur-[2px]">
        <div className="w-5 h-5 bg-accent rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-accent rounded-full animate-bounce" style={{animationDelay:'0.1s'}}></div>
        <div className="w-5 h-5 bg-accent rounded-full animate-bounce" style={{animationDelay:'0.2s'}}></div>
      </div>
    </>
  );
};
export default LoadingOverlay;
