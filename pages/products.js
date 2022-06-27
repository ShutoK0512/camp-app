import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Products.module.css'

import imgOne from '@/public/images/pexels-pavel-danilyuk-9143449.jpg'
import imgTwo from '@/public/images/pexels-uriel-mont-6271290.jpg'
import imgThree from '@/public/images/pexels-uriel-mont-6271638.jpg'
import imgFour from '@/public/images/pexels-clem-onojeghuo-221436.jpg'


function ProductsPage() {
    return (
        <Layout title="Products Page">
            <section>
                <div className={styles.hero}>
                    <Image src={imgOne} layout="fill" objectFit="cover" alt=""/>
                    <h1 className={styles.heading1}>Products</h1>
                </div>
            </section>

            <section className="mt-10">
                <div className="container p-2 mx-auto md:flex justify-center items-center" style={{maxWidth: 1140}}>
                    <div className="flex-1 position: relative" style={{maxWidth: 700, height:400}}>
                    <Image src={imgTwo} className="rounded-md" layout="fill" objectFit="cover"/>
                    </div>

                    <div className="flex-1 p-5">
                        <h2 className="text-xl font-bold">Title one</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti ut asperiores dolorum? Harum aspernatur enim beatae minima quo molestias.</p>
                    </div>
                
                </div>
            </section>
            <section className="mt-10">
                <div className="container p-2 mx-auto md:flex justify-center items-center" style={{maxWidth: 1140}}>
                    <div className="flex-1 p-5">
                        <h2 className="text-xl font-bold">Title one</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti ut asperiores dolorum? Harum aspernatur enim beatae minima quo molestias.</p>
                    </div>
                    <div className="flex-1 position: relative" style={{maxWidth: 700, height:400}}>
                    <Image src={imgThree} className="rounded-md" layout="fill" objectFit="cover"/>
                    </div>
                </div>
            </section>
            <section className="my-10">
                <div className="container p-2 mx-auto md:flex justify-center items-center" style={{maxWidth: 1140}}>
                    <div className="flex-1 position: relative" style={{maxWidth: 700, height:400}}>
                    <Image src={imgFour} className="rounded-md" layout="fill" objectFit="cover"/>
                    </div>

                    <div className="flex-1 p-5">
                        <h2 className="text-xl font-bold">Title one</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti ut asperiores dolorum? Harum aspernatur enim beatae minima quo molestias.</p>
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

export default ProductsPage