'use client'

import { Button } from '@/components/shared';
import { IMAGES, PATHNAME } from '@/constant'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ResultPage = () => {

    const router = useRouter()

    const onRedirectToHome = () => {
        router.push(PATHNAME.HOME);
    }

    return (
        <div className="flex justify-between items-center flex-col h-screen w-full">
            <div className="flex items-center justify-center bg-primary w-full px-4 h-full flex-col">
                <div className='flex items-center flex-col gap-3'>
                    <p className="md:text-4xl text-white md:w-[640px] text-lg w-[unset] text-center text-2xl font-bold leading-8">You solved all the quizzes correctly!</p>
                    <p className='text-lg text-white mt-4'>1,000 Vani Coins Coupon has arrived</p>
                    <Image src={IMAGES.coupon} alt='coupon' width={150} height={50} className='mt-3' />
                </div>
                <Button className='mt-16 md:min-w-[550px] min-w-full animate-bounce' variant='default' size='lg' onClick={onRedirectToHome}>Check Coupon</Button>
                <p className='text-sm text-white font-thin'>Please check inbox and use a coupon to earn Vani Coin</p>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {

}

export default ResultPage