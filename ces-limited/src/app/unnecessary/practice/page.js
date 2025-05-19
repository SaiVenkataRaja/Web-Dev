function Comp1() {
    return <p>Vachindayya Developer-u</p>
}
function MemuMeeFans(props) {
    return(
        <div>
            <p>Fan : {props.name}</p>
        </div>
    )
}
function CondRender({isLogged}) {
    return ( 
        <div>
            {isLogged ? <p>Hii</p> :  <p>Byeee</p> } 
        </div>
    )
}
function Clicked({yesClicked}) {
    return (
        <div>
            {yesClicked ? <button className="bg-blue-200">Click</button> : <button className="bg-red-200">Click</button>}
        </div>
    )
}
export default function Practice() {
    return(
        //functional componenets 
        <div>
            <h2>Hey, I am Practicing React , Next.js </h2>
            <p>Vachindayya Developer-u</p>
            <Comp1 />
            
            <MemuMeeFans name="Sai"/>
            <MemuMeeFans name="Venkat" />

            <CondRender isLogged={false}/>
            <Clicked yesClicked={false} />
        </div>
        
    )
}