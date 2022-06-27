import Layout from '@/components/Layout'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import Link from 'next/link'

import imgOne from '@/public/images/pexels-quang-nguyen-vinh-3232542.jpg'
import imgTwo from '@/public/images/pexels-taryn-elliott-5737939.jpg'
import imgThree from '@/public/images/pexels-dmitriy-ganin-8653680.jpg'
import imgFour from '@/public/images/pexels-elizabeth-zernetska-9292196.jpg'


function AboutPage() {
    return (
        <Layout title="About Page">
            <section>
                <div className={styles.hero}>
                    <Image src={imgOne} layout="fill" objectFit="cover" alt=""/>
                    <h1 className={styles.heading1}>About</h1>
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

export default AboutPage
