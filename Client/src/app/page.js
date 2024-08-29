'use client';
import Home from "./home/page";
import { Provider } from "react-redux"
import store from "@/redux/store"

export default function LoginPage() {
  return (
    <div>
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
    
  );
}
