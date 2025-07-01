import { Suspense,lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
const Home =  lazy(()=>import("./pages/Home")) ;
// const About = lazy(()=>import("./pages/About")) ;
// const Contact = lazy(()=>import("./pages/Contact")) ;
// const Destination = lazy(()=>import("./pages/Destination")) ;
const Layout = lazy(()=>import("./layout/layout")) ;
const Loader = lazy(()=>import("./components/Loader")) ;



function App() {
  return (
    <>

    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destination" element={<Destination />} /> */}
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Suspense>
  </>
  )
}

export default App
