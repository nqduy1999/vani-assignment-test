"use client"
import { QuizPage } from "@/components/features";
import { PageTransition, ReactQueryHydrate } from "@/components/shared";
import { prefetchQuizContentQuery } from "@/queries/quiz";

export default async function Quiz() {
    return (
        <PageTransition>
            <ReactQueryHydrate state={await prefetchQuizContentQuery()}>
                <QuizPage />
            </ReactQueryHydrate>
        </PageTransition>
    );
}

