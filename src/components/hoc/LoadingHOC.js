import React, {useState} from "react";
import Spinner from "../Spinner";

const LoadingHOC = (Component) => {

  function HOC({...props}) {
    const [isLoading, setIsLoading] = useState(false);

    const loadingHandler=(bool)=>{
        setIsLoading(bool);
    }
    
    return(
      <>
        { isLoading &&
            <Spinner fullPage={true} />
        }
        <Component {...props} setLoading={loadingHandler}/>
      </>
       
    ) 
  }
  return HOC;
};
export default LoadingHOC;