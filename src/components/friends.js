import { useEffect } from 'react'

const Friends = (props) => {
    // console.log("infriend")
    console.log(typeof (props.friendObj))
    console.log(props.friendObj)
    if (props.friendObj !== null) {
        console.log(props.friendObj)
    }

    const handleDelClick = (idx) => {
        console.log('del')
        console.log(idx)
        let up = props.friendObj.filter((fr, index) => { if (index != idx) { return fr } })
        localStorage.setItem('Flocal', JSON.stringify(up))
        console.log(up)
        console.log(props.friendObj.pop())
        props.setFriendOb(JSON.parse(localStorage.getItem('Flocal')))
    }

    return (
        <div className="friends">
            <div className="friendComp">
                <div className="friendh">Friends List
                    <hr />
                </div>
                {/* <div className="line"></div> */}
                {props.friendObj == null || (props.friendObj.length == 0) ?
                    <div className="emptyfriends" >
                        <span className="spanf">  Add Some Friends !</span>
                    </div>

                    :
                    props.friendObj.map((friend, idx) =>
                        <div className="friendCard" key={idx}>
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
                            <div className="delBtndiv">
                                <button onClick={() => handleDelClick(idx)}><i className="fa fa-trash-alt delBtn"> Delete</i></button>
                            </div>


                        </div>
                    )

                }

            </div>
        </div>
    )


}

export default Friends