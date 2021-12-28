import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      coffee Store page {router.query.id}
      <Link href='/'>
        <a>Back Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
