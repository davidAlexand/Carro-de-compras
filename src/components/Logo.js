import { Component } from "react"

const styles = {
    logo : {
        fontweight:'700',
        fontSize:'2rem',
    }
}

class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                shop
            </div>
        )
    }
}

export default Logo