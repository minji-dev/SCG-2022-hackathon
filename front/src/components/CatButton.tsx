import { Props } from 'types/types'
import Link from 'next/link'

function CatButton({height, width} : Props) {
    return(
        <div>
            <style jsx>{`
                div {
                    box-sizing: border-box;
                    width: ${width}px;
                    height: ${height}px;
                    margin: 10px;
                    background: #FFFFFF;
                    border: 3px solid #333D79;
                    border-radius: 20px;
                    float: left;
                    padding: 0px;
                    }   
            `}</style>
        </div>
        )
}
export default CatButton

