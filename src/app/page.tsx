"use client"
import { decrement, increment } from "@/global-redux/features/counter-slice";
import { Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";


const Home = ()=>{
  const count = useSelector((state:any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 items-center w-full mx-auto font-bold">
      {count}
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  )
}
export default Home


