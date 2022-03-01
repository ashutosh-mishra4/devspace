function footer() {
    return (
        <div className="font-black text-center bg-orange font-play py-2">
            <p>
                Made with ❤️ by <a onClick={() => window.location.href = 'https:twitter.com/ashutoshmishrae'}>Ashutosh Mishra</a>
            </p>
            <p>
                Build with NextJS. Deployed on Netlify
            </p>
        </div>

    )
}

export default footer