const UserCard = (props) => {
    console.log(props.userObj)
    return (<div className="cardComp">
        {
            (props.userObj !== null) ? <div className="card" >

                <img className="pic" src={props.userObj.picture.large} alt="user.img" />

                <div className="cardinfo">
                    <span className="nameTag">{props.userObj.name.title + ". " + props.userObj.name.first + " " + props.userObj.name.last}</span>

                    {/* <p className="ptag">{props.userObj.location.street.number + " " +
                            props.userObj.location.street.name + ", "
                            + props.userObj.location.city + ", " + props.userObj.location.state}</p> */}

                    <span className="addtag">{props.userObj.location.street.name + ", "
                        + props.userObj.location.city + ", " + props.userObj.location.state}</span>
                </div>
            </div>

                : <div className="card" >

                    <img className="pic"  alt="user.img" />

                    <div className="cardinfo">
                        <span className="nameTag">Loading....</span>

                        <span className="addtag"></span>
                    </div>
                </div>

        }
        <div className="carBtn">
            <button className="btn"

                onClick={() => props.fetchData()}>

                NEXT

        </button>
            <button className="btn1"

                onClick={() => {
                    props.friendObj !== null ? props.setFriendObj([...props.friendObj, props.userObj])
                        : props.setFriendObj([props.userObj])
                    props.fetchData()
                    alert("ADDED TO FRIENDS LIST")
                    console.log(props.userObj)
                    console.log("next is clicked")
                }
                }
            >

                ADD

        </button>
        </div>

    </div>)



}

export default UserCard