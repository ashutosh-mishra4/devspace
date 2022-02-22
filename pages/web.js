import React from "react"

export async function getServerSideProps(context) {

    const token = process.env.TWITTER_BEARER_TOKEN
    const endpoint = "https://api.twitter.com/2/spaces/search?query=web&state=all&space.fields=creator_id,participant_count,title,scheduled_start&user.fields=name,id,username,url,profile_image_url"
    const res = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
    const datas = await res.json()

    if(!datas) {
        return {
            notFound: true
        }
    }

    return { props: { datas }}
}
  

function tech({ datas }) {
    return (
        <div className="flex flex-col gap-6 justify-center bg-dark-background items-center">
            <p>hello woel</p>
            {datas.data.map((item, key) => {
                return (
                    <div key={key} className="bg-background rounded-xl w-5/6 h-auto p-6">
                        {/* <p className="text-white">{item.state.toUppercase()}</p> */}
                        <p className="text-white font-bold text-3xl whitespace-normal">{item.title}</p>
                        {item.state=='live' ?
                            <div>
                                <p className="text-white pt-2">{item.participant_count} people are listening</p>
                                <button className="bg-wheat p-2 mt-2 font-bold rounded">
                                    <a href={`https://twitter.com/i/spaces/${item.id}`}>
                                        Start Listening
                                    </a>    
                                </button>
                            </div> :
                            <div>
                                <p className="text-white pt-2">Starting at {item.scheduled_start}</p>
                                <button className="bg-wheat mt-2 p-2 font-bold rounded">
                                    <a href={`https://twitter.com/i/spaces/${item.id}`}>
                                        Set Reminder
                                    </a>
                                </button>
                            </div>
                        }
                    </div>
                )
            })}
            {console.log(datas.data.map(item => item.title))}
        </div>    
    )
}

export default tech