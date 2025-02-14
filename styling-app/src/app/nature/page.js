import Image from "next/image"

export default function Nature() {
    return <div>
        {/* Local image */}
        <Image src="/nature.png" alt="Picture of  Nature" width={500} height={500} />

        {/* Remote Image */}
        <Image src="https://via.placeholder.com/150/d32776" alt="Picture of something" width={500} height={500} />

    </div>
}