import { useRouter } from "next/router"

const Slug = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
        <h2>{slug}</h2>
        </>
    )
}

export default Slug