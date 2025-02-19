export default function GameLayout(props) {
    return <div id="gameslayout">
        {/* Game Page Content */}
        {props.children}
        {/* Team Content */}
        {
            props.team
        }
        {/* Anaylitcs content */}
        {props.anaylitics}

    </div>
}