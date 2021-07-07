import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsAction } from '../redux/action/apiAction';
import { loginAction, logoutAction } from '../redux/action/mainAction';

export default function MyComponent() {
    // const { user } = useSelector(state => state.main);
    // const { comments } = useSelector(state => state.api);
    // const dispatch = useDispatch();
    // console.log(comments);
    // useEffect(() => {
    //     dispatch(getCommentsAction())
    // }, []);
    return (
        <>
            <h1>User: {/* {user.name} */}</h1>
            {/* <button
                onClick={() => dispatch(logoutAction())}
            >
                Logout
            </button>
            <button
                onClick={() => dispatch(loginAction({
                    id: 2,
                    name: 'Horacio'
                }))}
            >
                Login
            </button>
            <h1>Comments</h1>
            {comments.map(i => (
                <div key={i.id} style={{ marginTop: '20px' }}>
                    <div>
                        <li><b>Name:</b> {i.name}</li>
                    </div>
                    <div>
                        <li><b>Comment:</b> {i.body}</li>
                    </div>
                </div>
            ))
            }; */}

        </>
    )
}



