import React from "react"

export async function getServerSideProps() {

    // fetching relevant data from Twitter Spaces API related to query 'tech'
    const token = process.env.TWITTER_BEARER_TOKEN
    const endpoint = "https://api.twitter.com/2/spaces/search?query=dev&state=all&space.fields=creator_id,participant_count,title,scheduled_start&user.fields=name,id,username,url,profile_image_url"
    const res = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
    const datas = await res.json()
    return { props: { datas }}
}
  

function devSpaces({ datas }) {
    return (
        <div className="flex flex-col min-h-screen lg:flex-row flex-wrap bg-dark-background font-play gap-6 justify-center items-center">
            {/* Section for displaying all the spaces with 'tech' keyword */}
            {datas.data.map((item, key) => {
                return (
                    <div key={key} className="bg-orange rounded-xl w-5/6 h-auto lg:w-80 lg:h-80 lg:min-h-full p-6">
                        <p className="font-bold text-3xl whitespace-normal">{item.title}</p>
                        {/* Show participants if the space is live else show starting time */}
                        {item.state=='live' ?
                            <div>
                                <p className="pt-2">{item.participant_count} people are listening</p>
                                <button className="bg-white border-2 p-2 mt-2 font-bold rounded">
                                    {/*Link to the space*/}
                                    <a href={`https://twitter.com/i/spaces/${item.id}`}>
                                        Start Listening
                                    </a>
                                </button>
                            </div> :
                            <div>
                                <p className="pt-2">Starting at {item.scheduled_start}</p>
                                <button className="bg-white border-2 mt-2 p-2 font-bold rounded">
                                    {/*Link to the space*/}
                                    <a href={`https:twitter.com/i/spaces/${item.id}`}>
                                        Set Reminder
                                    </a>        
                                </button>
                            </div>
                        }
                    </div>
                )
            })}
        </div>    
    )
}

export default devSpaces