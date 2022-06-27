import Layout from "@/components/Layout"
import Image from "next/image"
import imgHero from "@/public/images/daan-weijers-pSaEMIiUO84-unsplash.jpg"
import imgOne from "@/public/images/pexels-xue-guangjian-1687845.jpg"
import imgTwo from "@/public/images/pexels-clem-onojeghuo-221436.jpg"
import imgThree from "@/public/images/pexels-vlad-bagacian-1061640.jpg"
import imgFour from "@/public/images/pexels-taryn-elliott-5737940.jpg"




import styles from "@/styles/Home.module.css"

import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <Image src={imgHero} layout="fill" objectFit="cover" alt="" />
        <div className={styles.overSec}>
          <div className="flex justify-center items-center w-6/12">
          <h1 className="text-9xl text-gray-200 drop-shadow-md">Logo</h1>
          </div>
          
          <div className="md:w-3/12">
            <h2 className="text-5xl text-gray-100 drop-shadow-md">Try this</h2>
            <p className="text-base text-gray-100 drop-shadow-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

              <button className="btn bg-transparent  border border-gray-100 w-full text-xl text-gray-100 rounded-md hover:bg-gray-100 hover:text-gray-800 ease-in duration-300">
              <Link href="/contact">Contact</Link>
              </button>
 
          </div>
        </div>
      </section>


      <section className="my-10">
        <div className="container p-5 mx-auto md:flex justify-center items-center" style={{maxWidth: 1140}}>
          <div className="flex-1 drop-shadow-lg position: relative" style={{maxWidth: 700, height:400}}>
          <Image src={imgOne} className="rounded-md" layout="fill" objectFit="cover"/>
          </div>

          <div className="flex-1 p-5">
            <h2 className="text-xl font-bold">Title one</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti ut asperiores dolorum? Harum aspernatur enim beatae minima quo molestias.</p>
          </div>
          
        </div>
      </section>

      <section>
        <div className="bg-gray-800 p-10">
        <div className="container mx-auto md:flex justify-center items-center" style={{maxWidth: 1140}}>
          <div className="flex-1 p-5 text-gray-100">
            <h2 className="text-xl font-bold">Title one</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti ut asperiores dolorum? Harum aspernatur enim beatae minima quo molestias.</p>
          </div>

          <div className="flex-1 order-first md:order-last position: relative" style={{maxWidth: 700, height:400}}>
          <Image src={imgTwo} className="rounded-md" layout="fill" objectFit="cover"/>
          </div>
          </div>
        

          
        </div>
      </section>

      <section className="mt-10">
        <div className="container p-2 mx-auto md:flex justify-center items-center" style={{maxWidth: 1140}}>
          <div className="flex-1 position: relative" style={{maxWidth: 700, height:400}}>
          <Image src={imgThree} className="rounded-md" layout="fill" objectFit="cover"/>
          </div>

          <div className="flex-1 p-5">
            <h2 className="text-xl font-bold">Title one</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti ut asperiores dolorum? Harum aspernatur enim beatae minima quo molestias.</p>
          </div>
          
        </div>
      </section>


      <section className="mb-10">
        <div className="container p-2 mx-auto md:flex justify-center items-center" style={{maxWidth: 1140}}>
        <div className="flex-1 p-5">
            <h2 className="text-xl font-bold">Title one</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti ut asperiores dolorum? Harum aspernatur enim beatae minima quo molestias.</p>
          </div>

          <div className="flex-1 position: relative" style={{maxWidth: 700, height:400}}>
          <Image src={imgFour} className="rounded-md" layout="fill" objectFit="cover"/>
          </div>

          
          
        </div>
      </section>


      <div className="container p-2 mx-auto mb-20" style={{maxWidth: 1140}}>
      <button className="btn bg-gray-800 w-full text-3xl text-gray-100 p-3 rounded-md hover:bg-transparent border hover:border-gray-800 hover:text-gray-800 ease-in duration-300">
              <Link href="/contact">Contact</Link>
              </button>
      </div>



    </Layout>

  )
}
