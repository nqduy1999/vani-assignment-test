'use client'

import { Button } from '@/components/shared';
import { IMAGES, PATHNAME } from '@/constant'
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ResultFailPage = () => {

    const router = useRouter()

    const onRedirectToHome = () => {
        router.push(PATHNAME.HOME);
    }

    return (
        <MainLayout onClickBack={onRedirectToHome}>
            <div className="flex justify-between items-center flex-col h-screen w-full">
                <div className="flex items-center justify-center bg-primary w-full px-4 h-full flex-col">
                    <div className='flex items-center flex-col gap-3'>
                        <p className="md:text-4xl text-white md:w-[640px] text-lg w-[unset] text-center text-2xl font-bold leading-8">Thank you for taking the quizzes!</p>
                        <Image src={IMAGES.background} width={450} height={550} alt={'backgroundImg'} className='object-contain' />
                    </div>
                    <Button className='mt-16 md:min-w-[550px] min-w-full animate-bounce' variant='default' size='lg' onClick={onRedirectToHome}>Return to Home</Button>
                </div>
            </div>
        </MainLayout>
    )
}

export const getStaticProps = async () => {

}

export default ResultFailPage