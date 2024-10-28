import { Button } from '@/components/Button';

export default function Home() {
    return (
        <main className='w-full '>
            <section className="  bg-[url('/bg.jpg')] bg-cover h-screen">
                <div className='container h-main pt-24 flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-center'>
                        A design in plan to make something new for people,
                    </h1>
                    <h2>that they perceive as benefical </h2>
                    <div className='space-x-3'>
                        <Button>Let's work together</Button>
                        <Button variant='secondary'>Experience</Button>
                    </div>
                </div>
                <center>
                    <Button className='sticky bottom-6 bg-gray-300 aspect-square'>
                        |
                    </Button>
                </center>
            </section>
            <section className="  bg-[url('/bg.jpg')] bg-cover h-screen">
                <div className='container h-main pt-24 flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-center'>
                        A design in plan to make something new for people,
                    </h1>
                    <h2>that they perceive as benefical </h2>
                    <div className='space-x-3'>
                        <Button>Let's work together</Button>
                        <Button variant='secondary'>Experience</Button>
                    </div>
                    {/* <Button className='fixed bottom-6 bg-gray-300'></Button> */}
                </div>
            </section>
        </main>
    );
}
