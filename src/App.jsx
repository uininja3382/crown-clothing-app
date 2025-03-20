import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import { Routes, Route, Link, Outlet } from "react-router";
function App() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://res.cloudinary.com/dmlsjxqkt/image/upload/v1741606028/hats_qohrjr.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://res.cloudinary.com/dmlsjxqkt/image/upload/v1741606028/jackets_szegrw.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://res.cloudinary.com/dmlsjxqkt/image/upload/v1741606028/sneakers_iguzui.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://res.cloudinary.com/dmlsjxqkt/image/upload/v1741606028/womens_eskkbv.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://res.cloudinary.com/dmlsjxqkt/image/upload/v1741606029/men_u3t7qh.png",
    },
  ];
  const Navigation = () => {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hats">Hats</Link>
          </li>
          <li>
            <Link to="/jackets">Jackets</Link>
          </li>
        </ul>
        <Outlet />
      </>
    );
  };
  const Home = () => {
    return (
      <div>
        <CategoryContainer categories={categories} />
      </div>
    );
  };
  const Hats = () => {
    return (
      <div>
        <h1>Welcome to the Hats page</h1>
      </div>
    );
  };
  const Jackets = () => {
    return (
      <div>
        <h1>Welcome to the Jackets page</h1>
      </div>
    );
  };
  const NotFound = () => {
    return (
      <div>
        <h1>The Page you requested is not found</h1>
        <p>
          Click <Link to="/">Home</Link> to go back to the Home Page
        </p>
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="hats" element={<Hats />} />
          <Route path="jackets" element={<Jackets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
