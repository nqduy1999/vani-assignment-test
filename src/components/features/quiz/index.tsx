
const QuizPage = () => {
    return (
        <div className="h-screen w-full bg-lightgray"></div>
    )
}

export default QuizPage

export async function getServerSideProps({ props }: any) {
    console.log(props, 'props');

    return {
        props: {
            onClick: () => console.log('click back ')
        },
    };
}