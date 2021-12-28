import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return <div> coffee Store page {router.query.id}</div>;
};

export default CoffeeStore;
