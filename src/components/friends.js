const Friends = (props) => {
    console.log("infriend")
    console.log(props.friendObj)

    return (
        <div className="friends">
            <div className="friendComp">
                <div className="friendh">Friend List</div>
                {/* <div className="line"></div> */}
                {props.friendObj !== null ?

                    props.friendObj.map((friend, idx) => <div className="friendCard" key={idx}>
                        <div className="fpicdiv">
                            <img className="fpic" src={friend.picture.large} alt="user.img" />
                            </div>

                        <ul className="fcardinfo">
                            <li className="fcdli fnameTag">{friend.name.title + ". " + friend.name.first + " " + friend.name.last}</li>


                            <li className="fcdli faddTag">{
                               
                                friend.location.city + ", " + friend.location.state}</li>
                            <li className="fcdli fmailTag">Email id: {friend.email}
                            </li>
                            {/* <span className="addTag">{friend.location.street.number + " " +
                            friend.location.street.name + ", "
                            + friend.location.city + ", " + friend.location.state}</span> */}
                        </ul>
                    </div>)
                    : <div className="emptyfriends" >
                        <span className="spanf">  Add Some Friends !</span>
                    </div>

                }

            </div>
        </div>
    )


}

export default Friends