import Header from "@/components/Header"
import Footer from "@/components/Footer"

import Head from 'next/head'


function Layout({ title, keywords, description, children }) {
    return (
        <>   
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}


Layout.defaultProps = {
    title: 'Campsite website for test purpose',
    keywords: 'Campsite, camping. outdoor',
    description: 'This is campsite website for test purpose'
}

export default Layout
