import Head from 'next/head';
import Image from 'next/image';
import Home from '../components/home';
import Body from '../components/Body';
import Loader from '../components/model/loader';


export default function App() {
    return (
        <>
            <Loader/>
            <Head>
                <title>OAU - Minimarts</title>
                <meta name="description" content="Buy, Sell within your school" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <div className="w-full h-full bg-black">
                <Body component={<Home/>}/>
            </div>

        </>
    )
}
