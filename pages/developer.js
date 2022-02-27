import React from "react"

export async function getServerSideProps() {

    // fetching relevant data from Twitter Spaces API related to query 'tech'
    const token = process.env.TWITTER_BEARER_TOKEN
    const endpoint = "https://api.twitter.com/2/spaces/search?query=developer&state=all&space.fields=creator_id,participant_count,title,scheduled_start&user.fields=name,id,username,url,profile_image_url"
    const res = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
    const datas = await res.json()
    return { props: { datas }}
}
  

function developerSpaces({ datas }) {
    return (
        <div className="flex flex-col min-h-screen bg-dark-background font-play gap-6 justify-center items-center">
            {/* Section for displaying all the spaces with 'tech' keyword */}
            {datas.data.map((item, key) => {

                {/* function to handle the link to space */}
                const clickHandle = () => {
                    window.location.href = `https://twitter.com/i/spaces/${item.id}`
                }
                return (
                    <div key={key} className="bg-orange hover:cursor-pointer transition ease-in-out hover:bg-wheat rounded-xl w-80 h-auto p-6">
                        <p className="font-bold text-3xl whitespace-normal">{item.title}</p>
                        {/* Show participants if the space is live else show starting time */}
                        {item.state=='live' ?
                            <div>
                                <p className="pt-2">{item.participant_count} people are listening</p>
                                <button onClick={clickHandle} className="bg-white hover:bg-dark-background hover:text-white hover:border-0 border-2 p-2 mt-2 font-bold rounded">
                                    Start Listening
                                </button>
                            </div> :
                            <div>
                                <p className="pt-2">Starting at {item.scheduled_start}</p>
                                <button onClick={clickHandle} className="bg-white hover:bg-dark-background hover:text-white hover:border-0 border-2 mt-2 p-2 font-bold rounded">
                                    Set Reminder
                                </button>
                            </div>
                        }
                    </div>
                )
            })}
        </div>    
    )
}

export default developerSpaces