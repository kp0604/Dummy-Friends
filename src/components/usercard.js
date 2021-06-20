const UserCard = (props) => {
    // console.log("inusercard");
    // console.log(props.userObj);

    const handleClick = () => {
        if (props.friendObj == null) {
            console.log('innot')
            localStorage.setItem('Flocal', JSON.stringify([props.userObj]))
            props.setFriendOb(JSON.parse(localStorage.getItem('Flocal')))
            props.fetchData();
        }
        else {
            
            console.log('in')
            console.log([...props.friendObj, props.userObj])
            localStorage.setItem('Flocal', JSON.stringify([...props.friendObj, props.userObj]))


            console.log(JSON.parse(localStorage.getItem('Flocal')))
            // console.log(typeof(flocal))
            props.setFriendOb(JSON.parse(localStorage.getItem('Flocal')))
            console.log('after')
            props.fetchData();


            // alert("ADDED TO FRIENDS LIST");
            // console.log(props.userObj);
            // console.log("next is clicked");
        }
    }
        
    
   

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
                        onClick={()=>handleClick()}
                    >
                        ADD
                     </button>

                </div>
            </div>
        </div >
    )
};

export default UserCard;
