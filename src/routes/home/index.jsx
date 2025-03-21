import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
const Home = () => {
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
  return (
    <div>
      <CategoryContainer categories={categories} />
    </div>
  );
};

export default Home;
