import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/store";

const view = () => {
  const [item, setItem] = useState(null);

  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item?.cover} width="400px" alt="" /> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed?"Completed":"Not completed"}</div>
      <div>{item?.review}</div>
    </Layout>
  );
};

export default view;
