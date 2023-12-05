import React,{Suspense} from "react";
// import Header from "layout/Header";
// import Footer from "layout/Footer";
// import Content from "content/Content";
import MyReusableComponent from "./MyReusableComponent";
import contentstore from "content/store";
import layoutstore from "layout/store";
import { Provider } from 'react-redux';


class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    return hasError ? <h2>Something went wrong !!!</h2> : children;
  }
}

const Header = React.lazy(() => import("layout/Header"));
const Content = React.lazy(()=>import("content/Content"));
const Footer = React.lazy(()=>import("layout/Footer"));


const App = () => {
  return (
    <div className="container"> 
      <Suspense fallback={"loading..."}>
      <ErrorBoundary>
        <Header/>
      </ErrorBoundary>
     </Suspense>

       <Provider store={layoutstore}>
      <MyReusableComponent />
      </Provider>

      {/* component is rendered here only */}
      

      <Suspense fallback={"loading..."}>
      <ErrorBoundary>
      <Provider store={contentstore}> 
      <Content />
      </Provider>
      </ErrorBoundary>
     </Suspense>
     
     <Suspense fallback={"loading..."}>
      <ErrorBoundary>
      <Footer />
      </ErrorBoundary>
     </Suspense>
      
    </div>
 
  );
};

export default App;