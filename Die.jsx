export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return(
        <button 
            style={styles}
            onClick={() => props.hold(props.id)} //2onClick={props.hold} (Alt in app.jsx)
            
        > {props.value}</button>
    )

}