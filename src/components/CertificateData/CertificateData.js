import React, { Component } from 'react'
import "./CertificateData.css"

 class CertificateData extends Component {
    render() {
        return (
            <div className="data">
                <h1>Data: 18/Octomber/2020</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad</p>
                <h2 className="sg1">Signatory-1</h2>
                <h2 className="sg2" >Signatory-2</h2>
             </div>
        )
    }
}

export default CertificateData
