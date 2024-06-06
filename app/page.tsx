import Image from "next/image";
import {redirect } from 'next/navigation';

export default function Home() {
  
  //this is used in the client side of the CSR
  // const router = useRouter();
  // useEffect(()=>{
  //   router.push('/home')
  // }
  redirect('/home')

}
