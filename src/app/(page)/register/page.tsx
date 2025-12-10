import Regiter from '@/app/_components/authForm/register/Regiter'
import { Metadata } from 'next';
import { rediret } from '@/redirectUser';
export const metadata: Metadata = {
    title: "Register",
    description: "Create a new account to join our fashion community",
};
const page =  () => {
    rediret()
    return (
        <>
            <main className=" pt-12">
                <section className=" mx-2 md:mx-15 bg-white flex items-center justify-center min-h-screen">
                    <section className="w-full md:w-[80%] lg:w-[70%] py-12">
                        {/* Header */}
                        <section className="text-center mb-8">
                            <h2 className="text-4xl font-bold tracking-tight mb-2 capitalize">CREATE ACCOUNT</h2>
                            <p className="text-gray-500 text-sm tracking-wide">Join our exclusive fashion community</p>
                        </section>
                        <Regiter />
                    </section>
                </section>
            </main>
        </>
    )
}

export default page
