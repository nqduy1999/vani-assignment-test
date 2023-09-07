'use client'

import { Button } from '@/components/shared';
import { PATHNAME } from '@/constant'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import backgroundImg from 'public/images/background-home.png'

const HomePage = () => {

    const router = useRouter()

    const onRedirectToQuiz = () => {
        router.push(PATHNAME.QUIZ);
    }

    return (
        <div className="flex justify-between items-center flex-col h-screen w-full pb-5">
            <div className="flex items-center justify-center bg-primary w-full px-4 md:py-16 py-24 md:flex-row flex-col">
                <p className="md:text-4xl md:w-[640px] text-lg w-[274px] text-center leading-8">Take the Quiz of the Vani Coins to get instantly 1,000 coins</p>
                <Image src={backgroundImg} width={450} height={550} alt={'backgroundImg'} className='object-contain' />
            </div>
            <Button variant='primary' size='lg' onClick={onRedirectToQuiz}>Start Quiz</Button>
        </div>
    )
}

export const getStaticProps = async () => {

}

export default HomePage