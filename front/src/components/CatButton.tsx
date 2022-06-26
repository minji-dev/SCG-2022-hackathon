import { Props } from 'types/types'
import Link from 'next/link'

function CatButton({height, width} : Props) {
    return(
        <div>
            <h1>순발력 게임</h1>
            <hr/>
            <style jsx>{`
                @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
                h1 {
                    color: #333D79;
                    text-align: center;
                    font-family: 'NanumSquare', sans-serif;
                    font-weight: 700;
                    font-size: 26px;
                    margin: 10px
                }
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
                hr {
                    background-color: #333D79;
                    height: 3px;
                    border: 0px;
                }
            `}</style>
        </div>
        )
}
export default CatButton

