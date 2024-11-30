import Image from "next/image"
import logo from "../app/assets/2.png"

export default () => {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-300 md:px-8">
                <div className="sm:max-w-xl sm:mx-auto text-center">
                    <div className="flex items-center justify-center">
                        <Image src={logo} width={120}
                            height={50}
                            alt="logo" />
                    </div>
                    <p className="mb-10">
                        Simplify embedding with instant code conversion for websites and apps.                    </p>

                </div>
                <div className="mt-10 py-10 border-t items-center text-center justify-between sm:flex">
                    <p>© 2024 embedify @x.com/mayurstwt.</p>
                    <ul className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <li className="text-gray-300 hover:text-gray-500 duration-150" key={idx}> {/* Move key to li */}
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </footer>
    )
}