import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full">
            <div className='container mx-auto py-8'>
                <p className="font-normal mt-5 mb-5">
                    You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.
                </p>
                <p className="font-normal mt-5 mb-5">
                    Omegle (oh·meg·ull) is a great way to meet new friends, even while practicing social distancing. When you use Omegle, you are paired randomly with another person to talk one-on-one. If you prefer, you can add your interests and you’ll be randomly paired with someone who selected some of the same interests.
                </p>

                <p className="font-normal mt-5 mb-5">
                    To help you stay safe, chats are anonymous unless you tell someone who you are (not recommended!), and you can stop a chat at any time. See our Terms of Service and Community Guidelines for more info about the do’s and don’ts in using Omegle. Omegle video chat is moderated but no moderation is perfect. Users are solely responsible for their behavior while using Omegle.
                </p>
                <p className="font-normal mt-5 mb-5">
                    YOU MUST BE 18 OR OLDER TO USE OMEGLE. See Omegle’s Terms of Service for more info. Parental control protections that may assist parents are commercially available and you can find more info at https://www.connectsafely.org/controls/ as well as other sites.
                </p>
                <p className="font-normal mt-5 mb-5">
                    Please leave Omegle and visit an adult site instead if that's what you're looking for, and you are 18 or older.
                </p>
                <h2 className="font-bold bg-sky-400 justify-center text-center p-1 mt-5 mb-5">
                    Video is monitored. Keep it clean
                </h2>
                <div className="flex justify-center items-center flex-col ">
                    <p className="text-xl mb-3 mt-5">Start Chatting</p>
                    <div>
                        <button className='mr-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl shadow-md'>
                            Text Chat
                        </button>
                        <Link href='/'>
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl shadow-md">
                                Video Chat
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
