# `create-context-hook`

Simplify the creation of context hooks with global singleton state.

## Installation

```bash
npm install @nkzw/create-context-hook
```

## Usage

Define your context hook using `createContextHook`:

```typescript
import createContextHook from '@nkzw/create-context-hook';

const [HideContext, useHide] = createContextHook(() => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.shiftKey &&
        event.code === 'KeyB'
      ) {
        event.preventDefault();

        setHidden((hidden) => !hidden);
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, []);

  return hidden;
}, false);

export { useHide, HideContext };
```

Wrap your app using `HideContext`:

```typescript
import { HideContext } from './HideContext';

const App = () => {
  return (
    <HideContext>
      <MyComponent />
    </HideContext>
  );
};
```

Now you can use `useHide` in your components.

```typescript
import { useHide } from './HideContext';

const MyComponent = () => {
  const hidden = useHide();

  return <div>{hidden ? 'Hidden' : 'Visible'}</div>;
};
```
