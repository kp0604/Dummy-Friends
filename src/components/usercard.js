const UserCard = (props) => {
    // console.log("inusercard");
    // console.log(props.userObj);
    return (
        <div className="userCard">
            <div className="cardComp">
                

                {props.userObj !== null ? (
                    <div className="card">
                        <div className="upicdiv">
                        <img
                            className="pic"
                            src={props.userObj.picture.large}
                            alt="user.img"
                            />
                            </div>

                        <ul className="cardinfo">
                            <li className="cdli nameTag">{props.userObj.name.title +
                                ". " +
                                props.userObj.name.first +
                                " " +
                                props.userObj.name.last}
                            </li>

                            <li className="cdli addtag">Belongs to: {props.userObj.location.city +
                                ", " +
                                props.userObj.location.state}
                            </li>
                            {/* <span className="ageTag">Age: {props.userObj.dob.age}
                            </span> */}
                            <li className="cdli emailTag">Email id: {props.userObj.email}
                            </li>
                        </ul>
                    </div>
                )
                    : (
                    <div className="card">
                        <img className="pic" alt="user.img" />

                        <div className="cardinfo">
                            <span className="nameTag">Loading....</span>

                            <span className="addtag"></span>
                        </div>
                        </div>
                        
                    )}
                

                <div className="cardBtn">

                    <button className="btn" onClick={() => props.fetchData()}>
                        NEXT
                    </button>

                    <button
                        className="btn1"
                        onClick={() => {
                            props.friendObj !== null
                                ? props.setFriendObj([...props.friendObj, props.userObj])
                                : props.setFriendObj([props.userObj]);
                            props.fetchData();
                            // alert("ADDED TO FRIENDS LIST");
                            // console.log(props.userObj);
                            // console.log("next is clicked");
                        }}
                    >
                        ADD
                     </button>
                    
                </div>
            </div>
        </div>
    );
};

export default UserCard;
