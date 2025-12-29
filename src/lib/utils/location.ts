
export default async () => {
    if (process.env['NEXT_PUBLIC_ENVIRONMENT'] === 'development') {
        return `http://localhost:${process.env.NEXT_PUBLIC_PORT}`

    } else if (process.env['NEXT_PUBLIC_ENVIRONMENT'] === 'production') {
        return 'https://web-toolkit.coccoto.com'

    } else {
        console.log('An error occurred in location.')
        return null
    }
}
