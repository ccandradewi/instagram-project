import Link from 'next/link'
export default function Home() {
  return (
    <main className=' flex flex-col items-center max-w-sm p-11 rounded overflow-hidden border border-gray-300' >
      <img src='https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png' className=' w-28 item-center' ></img>
      <form className=' flex flex-col gap-3'>
      <input placeholder='username' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black' ></input>
      <input placeholder='password' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black'></input>
      <Link href='/Home'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>Login</button>
      </Link>
      <Link href='' className='text-blue-500'> Forget password? </Link>
      </form>
      <p className=' mt-4 '>Don't have an account?</p><Link href='/register' className=' text-blue-500 '>Sign up</Link>
    </main>
  );
}
