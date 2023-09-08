'use client'

import { Button } from '@/components/shared';
import { IMAGES, PATHNAME } from '@/constant'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const HomePage = () => {

    const router = useRouter()

    const onRedirectToQuiz = () => {
        router.push(PATHNAME.QUIZ);
    }

    return (
        <div className="flex justify-between items-center flex-col h-screen w-full">
            <div className="flex items-center justify-center bg-primary w-full px-4 h-full flex-col">
                <div className='flex items-center flex-col md:flex-row-reverse'>
                    <p className="md:text-4xl text-white md:w-[640px] text-lg w-[unset] text-center leading-8">Take the Quiz of the Vani Coins to get instantly 1,000 coins</p>
                    <Image src={IMAGES.background} width={450} height={550} alt={'backgroundImg'} className='object-contain' />
                </div>
                <Button className='mt-16 md:min-w-[550px] min-w-[240px] animate-bounce' variant='default' size='lg' onClick={onRedirectToQuiz}>Start Quiz</Button>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {

}

export default HomePage