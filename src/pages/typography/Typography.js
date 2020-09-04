import React from "react"
import Header from "../../components/typography/Header"
import {header} from "../../info/Info"
import Card from "../../components/chart/Card"

class Typography extends React.Component {
    render(){
        return (
<Card>
    <div className="col-12">
<Header header={header}/>
    </div>
    <div>

    </div>
</Card>
        )
    }
}
export default Typography