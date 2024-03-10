import {createSignal, Show} from "solid-js"
import {Motion, Presence} from "solid-motionone"

export default function App() {
  const [isShown, setShow] = createSignal(true)

  return (
    <div>
      <Presence exitBeforeEnter>
        <Show when={isShown()}>
          <Motion
            initial={{opacity: 0, scale: 0.6}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.6}}
            transition={{duration: 0.3}}
          />
        </Show>
      </Presence>
      <button onClick={() => setShow(p => !p)}>Toggle</button>
    </div>
  )
}