const Friends = (props) => {
    console.log("infriend")
    console.log(props.friendObj)

    return (
        <div className="friendComp">
            <h2>Friend List</h2>
            {/* <div className="line"></div> */}
            {props.friendObj !== null ?

                props.friendObj.map((friend, idx) => <div className="friendCard" key={idx}>

                    <img className="fpic" src={friend.picture.large} alt="user.img" />

                    <div className="fcardinfo">
                        <span className="nameTag">{friend.name.title + ". " + friend.name.first + " " + friend.name.last}</span>


                        <span className="addTag">{
                            friend.location.street.name + ", "
                            + friend.location.city + ", " + friend.location.state}</span>
                        {/* <span className="addTag">{friend.location.street.number + " " +
                            friend.location.street.name + ", "
                            + friend.location.city + ", " + friend.location.state}</span> */}
                    </div>
                </div>)
                : <div >
                    <p>Add some friends</p>
                </div>

            }

        </div>

    )


}

export default Friends