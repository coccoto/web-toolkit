
export default async () => {
    if (process.env['NEXT_PUBLIC_ENVIRONMENT'] === 'development') {
        return 'http://localhost:18010'

    } else if (process.env['NEXT_PUBLIC_ENVIRONMENT'] === 'production') {
        return 'https://web-toolkit.coccoto.com'

    } else {
        console.log('An error occurred in getLocation.')
        return null
    }
}
