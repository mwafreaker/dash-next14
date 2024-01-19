// import Image from 'next/image'
// import Head from 'next/head'

// export default function Home() {
//   return (
//     <main className="sm:flex min-h-screen sm:flex-col md:flex-row w-full items-center">

//       <div className='flex flex-col items-center justify-between sm:w-screen relative'>
//         <section className='flex flex-col relative text-center gap-4 h-screen justify-end pb-32 items-center min-h-72 px-10'>
//           <strong className='text-5xl'>Ong'owo Wicklif</strong>
//           <p className='text-sm'>Software Developer</p>
//         </section>

//         <ul className='flex flex-col sm:w-full gap-2 absolute bg-slate-800 bottom-4 w-full h-60 justify-center align-middle pl-16 py-16'>
//           <li>About</li>
//           <li>Skills</li>
//           <li>Projects</li>
//           <li>Experience</li>
//           <li>Contact</li>
//         </ul>

//         <div>
//           <div className='w-4 h-1'></div>
//           <div className='w-4 h-1'></div>
//           <div className='w-4 h-1'></div>
//         </div>
//       </div>

//     </main>
//   )
// }





// pages/index.tsx

import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Ong'owo Wycliffe - Developer Portfolio</title>
        <meta name="description" content="Proudly crafted by Mwafreaker" />
        <link rel="icon" href="/app/IME_OEM_ANDROID_oem_icon_h5_global_more6265_0210_default.png" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          <Link href="#">Wycliffe</Link> Ong'owo
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Full Stack Developer | Web Enthusiast
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/projects" className="card">
            <h3 className="text-2xl font-semibold mb-2">Projects &rarr;</h3>
            <p>Explore my projects and contributions.</p>
          </Link>

          <Link href="/about" className="card">
            <h3 className="text-2xl font-semibold mb-2">About Me &rarr;</h3>
            <p>Learn more about my skills and background.</p>
          </Link>

          <Link href="/contact" className="card">
            <h3 className="text-2xl font-semibold mb-2">Contact &rarr;</h3>
            <p>Get in touch with me for collaboration or inquiries.</p>
          </Link>
        </div>
      </main>
      <footer className="mt-8 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Mwafreaker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
