import Image from 'next/image'

export default function Home() {
  return (
    <main className="sm:flex min-h-screen sm:flex-col md:flex-row sm:w-screen items-center">

      <div className='flex flex-col items-center justify-between sm:w-screen md:w-1/2 py-4 gap-12 relative'>
        <section className='flex flex-col relative text-center gap-2 justify-center items-center min-h-72 px-10'>
          <strong className='text-4xl'>Ong'owo Wicklif</strong>
          <p className='text-xs'>Software Developer</p>
        </section>
        <ul className='flex flex-col justify-center sm:w-full gap-2'>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </main>
  )
}
