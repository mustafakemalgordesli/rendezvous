export default function Notes() {
    return <div className="flex items-center justify-center h-full">
        <div className="flex flex-col text-red-400 justify-center items-center">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M330.001-250.001h299.998v-59.998H330.001v59.998Zm0-160h299.998v-59.998H330.001v59.998Zm-77.692 310q-30.308 0-51.308-21t-21-51.308v-615.382q0-30.308 21-51.308t51.308-21h317.692l209.998 209.998v477.692q0 30.308-21 51.308t-51.308 21H252.309Zm287.692-520V-800H252.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v615.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h455.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-447.692H540.001ZM240-800v179.999V-800v640V-800Z" /></svg>
            <span className="text-lg">Customer has no notes</span>
        </div>
    </div>
}