import Link from "next/link";
import Image from "next/image";
import Img from "@/image/logo-transparent-png.png"
export default function Footer() {
    const services = ["Branding", "Design", "Marketing", "Advertisement"];
    const company = ["About us", "Contact", "Jobs", "Press kit"];
    const legal = ["Terms of use", "Privacy policy", "Cookie policy"];

    return (
        <>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <Image  src={Img} alt="" width={50}/>
                    <p>
                        <a className="text-3xl" href="/">INSTRAWAVE</a>
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    {services.map((service, index) => (
                        <Link key={index} href="" className="link link-hover">
                            {service}
                        </Link>
                    ))}
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    {company.map((item, index) => (
                        <Link key={index} href="" className="link link-hover">
                            {item}
                        </Link>
                    ))}
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    {legal.map((item, index) => (
                        <Link key={index} href="" className="link link-hover">
                            {item}
                        </Link>
                    ))}
                </nav>
            </footer>
        </>
    );
}