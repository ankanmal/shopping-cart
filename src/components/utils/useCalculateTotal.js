import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCalculateTotal = () => {
  const cartItems = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalAmt = cartItems.reduce(
      (acc, init) => acc + init.qty * init.price,
      0
    );
    setTotal(totalAmt);
  }, [cartItems]);

  return total;
};
export default useCalculateTotal;
